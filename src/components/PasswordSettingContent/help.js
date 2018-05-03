const sanitizeInputContainsTypeCount = text => {
  let containsTypes = 0;
  containsTypes += text.search('[0-9]') >= 0 ? 1 : 0;
  containsTypes += text.search('[A-Za-z]') >= 0 ? 1 : 0;
  containsTypes +=
    text.search("[`~!@#$^&*()=|{}':;',.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") >= 0 ? 1 : 0;
  return containsTypes;
};

export const composePasswordContent = (state, props, text) => {
  const { theme } = state;
  const {
    enterPasswordHint,
    passwordLengthHint,
    passwordContainsTypeHint,
    mediumLevelHint,
    strongLevelHint,
    minPasswordLength,
    minPasswordContainsTypeCount,
    strongPasswordContainsTypeCount,
  } = props;
  const containsTypes = sanitizeInputContainsTypeCount(text);

  let passwordPrompt = '';
  let passwordPromptColor = theme.errorColor;
  let passwordComplete = false;

  if (!text) {
    passwordPrompt = enterPasswordHint;
  } else {
    if (text.length < minPasswordLength) {
      if (containsTypes < minPasswordContainsTypeCount) {
        passwordPrompt = enterPasswordHint;
      } else {
        passwordPrompt = passwordLengthHint;
      }
    } else {
      if (containsTypes < minPasswordContainsTypeCount) {
        passwordPrompt = passwordContainsTypeHint;
      } else {
        passwordComplete = true;
        if (containsTypes >= strongPasswordContainsTypeCount) {
          passwordPromptColor = theme.completeColor;
          passwordPrompt = strongLevelHint;
        } else {
          passwordPrompt = mediumLevelHint;
          passwordPromptColor = theme.mediumLevelColor;
        }
      }
    }
  }

  return {
    password: text,
    passwordComplete,
    passwordPrompt,
    passwordPromptColor,
  };
};

export const composeConfirmContent = (state, props, password, passwordComplete) => {
  const { verifyPassword } = state;
  const { passwordNotConsistentHint } = props;

  let verifyPasswordComplete = state.verifyPasswordComplete;
  let verifyPasswordPrompt = state.verifyPasswordPrompt;

  if (password && password.length > 0 && verifyPassword && verifyPassword.length > 0) {
    if (verifyPassword.length >= password.length) {
      if (verifyPassword === password) {
        verifyPasswordComplete = passwordComplete;
        verifyPasswordPrompt = '';
      } else {
        verifyPasswordPrompt = passwordNotConsistentHint;
        verifyPasswordComplete = false;
      }
    } else {
      verifyPasswordComplete = false;
      verifyPasswordPrompt = '';
    }
  }
  return {
    verifyPasswordComplete,
    verifyPasswordPrompt,
  };
};
