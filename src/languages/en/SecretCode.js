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

  backupPage: {
    header: '请确认 Cobo 密语',
    descriptions: ['为了确保您已将 Cobo 助记词正确抄写，请按照对应的顺序点击助记词。'],
    finish: 'Done',
    error: '选择的助记词不正确，请重新选择',
  },

  modal: {
    header: 'Are you being watched',
    description:
      'No Screenshot! Anyone with the Receovery Phrase can gain full access to your associated funds. Please make sure no spying eyes around and no hidden camera.',
    button: 'I have checked',
  },
};

export default SecretCode;
