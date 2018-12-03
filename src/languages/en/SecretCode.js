const SecretCode = {
  frontPage: {
    header: 'Backup Recovery Phrase',
    subTitle: 'Recovery Phrase is your Private Key, which controls all your assets',
    descriptions: [
      'Consists of 12 words, please store them safely.',
      '100% managed by yourself, wallet cannot be recovered if Recovery Phrase is lost.',
      'Backup them up before deposit or delete App.',
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

  modal: {
    header: 'Are you being watched',
    description:
      'No Screenshot! Anyone with the Receovery Phrase can gain full access to your associated funds. Please make sure no spying eyes around and no hidden camera.',
    button: 'I have checked',
  },
};

export default SecretCode;