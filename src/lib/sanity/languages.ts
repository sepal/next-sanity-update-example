// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
export const languages = [
  { id: "en", title: "English", isDefault: true },
  { id: "de", title: "German" },
];

export const baseLanguage = languages.find((l) => l.isDefault);

export const i18n = {
  languages,
  base: baseLanguage,
};
