const SecretCode = {
  frontPage: {
    header: 'Frase de recuperación de respaldo',
    subTitle: 'La frase de recuperación es su clave privada, que controla todos sus activos',
    descriptions: [
      'Consiste en 12 palabras, por favor guárdelas de manera segura.',
      '100% gestionado por usted mismo, la billetera no se puede recuperar si se pierde la frase de recuperación.',
      'Copia de seguridad antes de depositar o eliminar la aplicación.',
    ],
    button: 'Respaldar inmediatamente',
    secondButton: 'lo haré después',
  },

  codePage: {
    header: 'Por favor respalde la frase de recuperación Cobo',
    descriptions: [
      'Frase de recuperación Cobo se utiliza para recuperar su billetera. Por favor, guarde las siguientes 12 palabras de forma segura.',
      '¡No hay captura de pantalla! Cualquier persona con la frase de recuperación puede obtener acceso total a sus fondos asociados.',
    ],
    button: 'He guardado frase de recuperación',
  },

  confirmPage: {
    header: 'Please confirm Cobo Recovery Phrase',
    descriptions: [
      'To ensure you have safely backed up Recovery Phrase, please select the words in the following sequence.',
    ],
    buttonNormal: 'Next',
    buttonLast: 'Terminado',
  },

  backupPage: {
    header: 'Por favor, vuelva a ingresar sus frases mnemónicas',
    descriptions: [
      'Para asegurarse de que ha recordado sus frases mnemónicas, ingrese las frases en el orden correcto.',
    ],
    finish: 'Terminado',
    error:
      'El orden de las frases mnemónicas seleccionadas es incorrecto, ingrese las frases en el orden correcto.',
  },

  modal: {
    header: 'Estás siendo vigilado',
    description:
      '¡No hay captura de pantalla! Cualquier persona con la frase de recuperación puede obtener acceso total a sus fondos asociados. Por favor, asegúrese de que no haya espías alrededor y ninguna cámara oculta.',
    button: 'He comprobado',
  },
};

export default SecretCode;
