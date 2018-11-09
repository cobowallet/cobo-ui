const translations = {
  zh: {
    MnemonicChecker: require('./zh/MnemonicChecker').default,
    MnemonicImporter: require('./zh/MnemonicImporter').default,
    SecretCode: require('./zh/SecretCode').default,
  },
  en: {
    MnemonicChecker: require('./en/MnemonicChecker').default,
    MnemonicImporter: require('./en/MnemonicImporter').default,
    SecretCode: require('./en/SecretCode').default,
  },
};

//default en
const languages = locale => {
  locale = locale || 'en';
  locale = Object.keys(translations).findIndex(item => item === locale) >= 0 ? locale : 'en';
  return translations[locale];
};

export default languages;
