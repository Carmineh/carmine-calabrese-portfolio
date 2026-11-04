---
# ===================================================================
#  ARTICLE TEMPLATE (non viene pubblicato: i file che iniziano con "_"
#  sono ignorati da Astro)
#
#  COME CREARE UN NUOVO ARTICOLO
#  1. Copia questo file in src/content/articles/ con un nome senza "_",
#     es. "htb-lame-writeup.md". Il nome del file diventa l'URL:
#       /articles/htb-lame-writeup/   e   /it/articles/htb-lame-writeup/
#  2. Compila il frontmatter qui sotto e scrivi il contenuto in Markdown.
#  3. Lascia draft: true finché non è pronto, poi mettilo a false.
#  4. Controlla in locale con `pnpm dev`, poi fai commit e push:
#     Cloudflare Pages pubblica da solo.
#
#  COME CREARE UNA NUOVA CATEGORIA (es. "active-directory")
#  1. Apri src/data/articleCategories.ts e aggiungi una riga:
#       'active-directory': { en: 'Active Directory', it: 'Active Directory' },
#  2. Usa quell'id qui sotto:  category: "active-directory"
#  3. Fine: il filtro "Active Directory" appare da solo nella pagina
#     Articoli appena esiste un articolo pubblicato con quella categoria.
#     (Se l'id non esiste, `pnpm build` si ferma con un errore chiaro.)
#
#  Categorie esistenti: cybersecurity, devsecops, software-engineering,
#  blockchain-privacy, cheatsheets, tech-notes
# ===================================================================

title: "HackTheBox: Lame – Walkthrough"
description: "Una o due frasi: compaiono nella lista articoli, su Google e nelle anteprime social."
pubDate: 2026-11-04
# updatedDate: 2026-11-10          # opzionale, se aggiorni l'articolo
category: "cybersecurity"          # uno degli id in src/data/articleCategories.ts
lang: "it"                         # lingua in cui è scritto: "it" oppure "en"
tags: ["hackthebox", "linux", "smb", "privesc"]
readingTime: "6 min"               # opzionale
draft: true
---

> **Disclaimer:** attività svolta in un ambiente autorizzato (lab / CTF / VM personale) a scopo didattico.

## Panoramica

| | |
| --- | --- |
| **Piattaforma** | HackTheBox |
| **Difficoltà** | Easy |
| **Sistema** | Linux |
| **Concetti chiave** | Enumerazione SMB, CVE pubblica, privilege escalation |

## 1. Ricognizione

Spiega cosa cerchi e perché, poi i comandi:

```bash
nmap -sC -sV -p- -T4 10.10.10.3 -oN nmap/full.txt
```

## 2. Accesso iniziale

Cosa hai trovato, quale vulnerabilità, come l'hai sfruttata.

## 3. Privilege escalation

Il percorso verso root / Administrator.

## Cosa ho imparato

- Un punto chiave
- Un errore da non ripetere
- Uno strumento nuovo
