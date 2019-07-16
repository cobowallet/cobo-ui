const SecretCode = {
  frontPage: {
    header: 'Backup Recovery Phrase',
    subTitle: 'The recovery phrase is your private key, giving you control of all your assets.',
    descriptions: [
      'There are 12-words, please store them safely.',
      'Completely owned by yourself, so if the phrase is lost, we cannot retrieve your wallet.',
      'Make sure to back up your phrase before depositing or deleting the app.',
    ],
    button: 'Backup Immediately',
    secondButton: 'I will do it later',
  },

  codePage: {
    header: 'Please backup Cobo Recovery Phrase',
    descriptions: [
      'Cobo Recovery Phrase is used to recover your wallet. Please store the following 12 words safely.',
      'No Screenshot！Anyone with the Receovery Phrase can gain full access to your associated funds.',
    ],
    button: 'I have safely stored Recovery Phrase',
  },

  confirmPage: {
    header: 'Please confirm Cobo Recovery Phrase',
    descriptions: [
      'To ensure you have safely backed up Recovery Phrase, please select the words in the following sequence.',
    ],
    buttonNormal: 'Next',
    buttonLast: 'Done',
  },

  backupPage: {
    header: 'Please re-enter your mnemonic phrases',
    descriptions: [
      'To ensure that you have remembered your mnemonic phrases, please input the phrases in the right order.',
    ],
    finish: 'Done',
    error:
      'Your selected mnemonic phrases order is incorrect, please input the phrases in the right order.',
  },

  modal: {
    header: 'Be Careful',
    description:
      'No screenshots! Anyone with your recovery phrase can access your funds. Please also make sure there are no spying eyes or hidden cameras around.',
    button: 'I have checked',
  },
};

export default SecretCode;
