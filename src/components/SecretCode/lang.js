export const lang = {
  zh: {
    frontPage: {
      header: '备份钱包助记词',
      subTitle: '助记词即为私钥，它是掌管您资产的钥匙',
      descriptions: [
        '由12个字符组成，请抄写并保管在安全的地方。',
        '100%由您掌管，一经丢失，无法找回。',
        '请在收币或卸载之前，务必完成助记词备份。',
      ],
      button: '立即备份',
      secondButton: '我先看看，稍后再说',
    },

    codePage: {
      header: '请抄写 Cobo 助记词',
      descriptions: [
        'Cobo 助记词用于恢复钱包，请按照顺序将下方的 12 个单词抄写到纸上，并保存到安全的地方。',
        '请勿截图！如果有人获取你的 Cobo 助记词将直接获取你的资产！',
      ],
      button: '我已安全保存',
    },

    confirmPage: {
      header: '请确认 Cobo 助记词',
      descriptions: ['为了确保您已将 Cobo 助记词正确得抄写，请选择对应序号的单词。'],
      buttonNormal: '下一步',
      buttonLast: '完成',
    },

    modal: {
      header: '请环顾四周',
      description: '任何人获得了助记词，意味着获取了您的资产，请确保周围无人，无摄像头。',
      button: '知道了',
    },
  },
  en: {
    frontPage: {
      header: 'Backup Recovery Phrase',
      subTitle: 'Recovery Phrase is your Private Key, which controls all your assets',
      descriptions: [
        'Consists of 12 words, please store them at a safe place.',
        '100% controlled by you, wallet cannot be recovered if lost.',
        'Backup them up before deposit or delete App.',
      ],
      button: 'Backup Immediately',
      secondButton: 'I will do it later',
    },

    codePage: {
      header: 'Please backup Cobo Recovery Phrase',
      descriptions: [
        'Cobo Recovery Phrase is used to recover your wallet. Please store the following 12 words at a safe place.',
        'No Screenshot！Anyone with the Receovery Phrase can gain full access to your associated funds.',
      ],
      button: 'I have safely stored Recovery Phrase',
    },

    confirmPage: {
      header: 'Please confirm Cobo Recovery Phrase',
      descriptions: [
        'To ensure you have safely backup Recovery Phrase, please select the word at the following position.',
      ],
      buttonNormal: 'Next',
      buttonLast: 'Done',
    },

    modal: {
      header: 'Are you being watched',
      description:
        'No Screenshot! Anyone with the Receovery Phrase can gain full access to your associated funds. Please make sure no eyes around.',
      button: 'I have checked',
    },
  },
};
