---
# ===================================================================
#  TEMPLATE: WRITE-UP DI UNA MACCHINA HACKTHEBOX (RETIRED)
#  Non viene pubblicato: i file che iniziano con "_" sono ignorati.
#
#  1. Copia il file come "htb-<nome-macchina>.md" (es. htb-lame.md).
#  2. Immagini in src/content/articles/images/htb-<nome-macchina>/
#  3. Le istruzioni sono nei commenti <!-- --> : non compaiono nella
#     pagina, ma toglile prima di pubblicare (restano nel sorgente HTML).
#
#  REGOLE PRIMA DI PUBBLICARE
#  - Solo macchine RETIRED (le attive non si possono pubblicare).
#  - Niente flag, hash di user.txt/root.txt, password reali di root,
#    contenuto di /etc/shadow completo.
#  - Niente tuo IP VPN / username HTB negli screenshot (usa 10.10.14.X).
# ===================================================================

title: "HackTheBox: NomeMacchina"
description: "Linux · Easy — da <vettore iniziale> a root tramite <privesc>. Una frase che riassume la catena di attacco."
pubDate: 2026-11-04
category: "cybersecurity"
lang: "it"
# Convenzione tag: piattaforma, OS, difficoltà, poi le tecniche principali
tags: ["hackthebox", "linux", "easy", "web", "sqli", "suid"]
readingTime: "10 min"
draft: true
---

> **Disclaimer:** macchina *retired* di HackTheBox, risolta nel laboratorio ufficiale della piattaforma a scopo didattico.

<!--
TL;DR: la parte più importante. Molti (recruiter compresi) leggono solo questa.
3-5 punti che descrivono la catena di attacco dall'inizio alla fine.
-->

## TL;DR

1. **Ricognizione:** porte aperte e servizio interessante.
2. **Accesso iniziale:** vulnerabilità sfruttata (CVE o misconfigurazione) → shell come `utente`.
3. **Movimento laterale:** *(se presente)* da `utente` a `altro-utente`.
4. **Privilege escalation:** vettore → `root`.

| | |
| --- | --- |
| **Sistema** | Linux / Windows |
| **Difficoltà** | Easy / Medium / Hard / Insane |
| **Ritirata il** | GG/MM/AAAA |
| **Tecniche** | Enumerazione web, SQL injection, SUID binary |
| **Strumenti** | nmap, ffuf, Burp Suite, linpeas |

---

## 1. Ricognizione

<!--
Mostra il comando e SOLO le righe utili dell'output (taglia il resto con "[...]").
Spiega in una frase cosa ti ha colpito e cosa decidi di guardare per primo.
-->

```bash
nmap -sC -sV -p- --min-rate 2000 -oA nmap/full 10.10.10.X
```

```text
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu
80/tcp open  http    Apache httpd 2.4.41
[...]
```

Solo due porte: SSH difficilmente è il punto d'ingresso, quindi parto dal web.

## 2. Enumerazione

<!--
Il "come ci sono arrivato". Qui si vede il metodo: ipotesi → verifica.
Directory/vhost fuzzing, versioni dei servizi, tecnologie, file interessanti.
Gli screenshot servono soprattutto qui (pagine web, risposte di Burp).
-->

```bash
ffuf -u http://10.10.10.X/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
```

![Pagina di login trovata su /admin](./images/htb-nomemacchina/login.png)

### Vicoli ciechi

<!--
Breve ma prezioso: cosa hai provato che NON ha funzionato e perché l'hai scartato.
Mostra il ragionamento, non solo la soluzione. 2-3 punti bastano.
-->

- Ho provato credenziali di default sul pannello: nessun risultato.
- La versione di Apache non ha vulnerabilità sfruttabili note.

## 3. Accesso iniziale

<!--
Spiega la vulnerabilità con parole tue: COSA è e PERCHÉ esiste (causa).
Preferisci lo sfruttamento manuale; se usi un exploit pubblico, linka la fonte
invece di incollare tutto il codice. Mostra solo il pezzo rilevante del payload.
-->

**Vulnerabilità:** SQL injection nel parametro `username` del login ([CVE-XXXX-XXXXX](https://nvd.nist.gov/)).
La query viene costruita concatenando l'input dell'utente senza parametri.

```http
POST /admin/login.php HTTP/1.1
Host: 10.10.10.X

username=admin'-- -&password=x
```

```bash
nc -lvnp 4444
# connect to [10.10.14.X] from (UNKNOWN) [10.10.10.X]
id
# uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## 4. Movimento laterale

<!-- Elimina la sezione se la macchina non lo prevede. -->

Credenziali del database trovate in `config.php`, riutilizzate per l'utente `utente` via SSH.

## 5. Privilege escalation

<!--
Come per l'accesso iniziale: cosa hai trovato, perché è sfruttabile, come.
Per la prova finale basta l'output di `id` / `whoami`: NON mostrare root.txt.
-->

```bash
find / -perm -4000 -type f 2>/dev/null
```

Il binario `/usr/bin/xyz` ha il bit SUID e permette di eseguire comandi ([GTFOBins](https://gtfobins.github.io/)).

```bash
/usr/bin/xyz -exec /bin/sh -p
id
# uid=1000(utente) gid=1000(utente) euid=0(root)
```

## Come si sarebbe evitato

<!--
La sezione che distingue un write-up qualunque da quello di un futuro
pentester/DevSecOps: per ogni falla, la correzione concreta.
-->

| Problema | Correzione |
| --- | --- |
| SQL injection nel login | Query parametrizzate / prepared statement |
| Password riutilizzata tra DB e utente di sistema | Credenziali distinte, gestite con un secret manager |
| Binario con SUID non necessario | Rimuovere il bit SUID (`chmod u-s`) e verificare periodicamente |

## Cosa ho imparato

- Una tecnica nuova o capita meglio.
- Un errore di metodo da non ripetere.
- Uno strumento o un comando che userò di nuovo.

## Riferimenti

- [Pagina della macchina su HackTheBox](https://app.hackthebox.com/machines/NomeMacchina)
- [CVE-XXXX-XXXXX](https://nvd.nist.gov/)
- [GTFOBins – xyz](https://gtfobins.github.io/)
