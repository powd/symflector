export class Library {
  setLanguage(languageCode: 'hu' | 'pl') {
    const languageName = languageCode === 'hu' ? 'Hungarian' : 'Polish';

    return `Language "${languageName}" selected`;
  }
}
