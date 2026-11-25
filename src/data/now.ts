/**
 * The "Now" section on the Home page: one sentence about what Carmine is doing at the moment.
 * Each part is plain text, `strong` (highlighted in white) or `accent` (lime, at most one).
 * Update the parts and the `updated` month whenever something changes.
 */
export type NowPart = { text: string; tone?: 'strong' | 'accent' };

export const now: { updated: Record<'en' | 'it', string>; sentence: Record<'en' | 'it', NowPart[]> } = {
  updated: { en: 'Updated November 2026', it: 'Aggiornato a novembre 2026' },
  sentence: {
    en: [
      { text: "Right now I'm " },
      { text: 'finishing my thesis', tone: 'strong' },
      { text: ' on privacy-preserving authentication for connected vehicles, ' },
      { text: 'studying the cloud world', tone: 'strong' },
      { text: ' and getting ' },
      { text: 'Go Fishin!', tone: 'accent' },
      { text: ' ready for Steam.' },
    ],
    it: [
      { text: 'In questo periodo ' },
      { text: 'sto chiudendo la tesi', tone: 'strong' },
      { text: " sull'autenticazione anonima per veicoli connessi, " },
      { text: 'studio il mondo del cloud', tone: 'strong' },
      { text: ' e preparo ' },
      { text: 'Go Fishin!', tone: 'accent' },
      { text: ' per Steam.' },
    ],
  },
};
