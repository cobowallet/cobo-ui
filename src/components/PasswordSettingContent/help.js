const sanitizeInputContainsTypeCount = text => {
  let containsTypes = 0;
  containsTypes += text.search('[0-9]') >= 0 ? 1 : 0;
  containsTypes += text.search('[A-Za-z]') >= 0 ? 1 : 0;
  containsTypes +=
    text.search("[`~!@#$^&*()=|{}':;',.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") >= 0 ? 1 : 0;
  return containsTypes;
};

const verdictPasswordLength = (
  containsTypes,
  minPasswordContainsTypeCount,
  enterPasswordHint,
  passwordLengthHint
) => {
  if (containsTypes < minPasswordContainsTypeCount) {
    return enterPasswordHint;
  } else {
    return passwordLengthHint;
  }
};

const verdictPasswordLevel = (
  containsTypes,
  strongPasswordContainsTypeCount,
  theme,
  strongLevelHint,
  mediumLevelHint
) => {
  let passwordPrompt = '';
  let passwordPromptColor = '';
  if (containsTypes >= strongPasswordContainsTypeCount) {
    passwordPromptColor = theme.completeColor;
    passwordPrompt = strongLevelHint;
  } else {
    passwordPrompt = mediumLevelHint;
    passwordPromptColor = theme.mediumLevelColor;
  }

  return { passwordComplete: true, passwordPromptColor, passwordPrompt };
};

export const composePasswordContent = (
  text,
  theme,
  {
    enterPasswordHint,
    passwordLengthHint,
    passwordContainsTypeHint,
    mediumLevelHint,
    strongLevelHint,
    minPasswordLength,
    minPasswordContainsTypeCount,
    strongPasswordContainsTypeCount,
  }
) => {
  const containsTypes = sanitizeInputContainsTypeCount(text);

  let passwordPrompt = '';
  let passwordPromptColor = theme.errorColor;
  let passwordComplete = false;

  if (!text) {
    passwordPrompt = enterPasswordHint;
  } else {
    if (text.length < minPasswordLength) {
      passwordPrompt = verdictPasswordLength(
        containsTypes,
        minPasswordContainsTypeCount,
        enterPasswordHint,
        passwordLengthHint
      );
    } else {
      if (containsTypes < minPasswordContainsTypeCount) {
        passwordPrompt = passwordContainsTypeHint;
      } else {
        const passwordLevel = verdictPasswordLevel(
          containsTypes,
          strongPasswordContainsTypeCount,
          theme,
          strongLevelHint,
          mediumLevelHint
        );
        passwordComplete = passwordLevel.passwordComplete;
        passwordPromptColor = passwordLevel.passwordPromptColor;
        passwordPrompt = passwordLevel.passwordPrompt;
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

export const composeConfirmContent = (
  password,
  passwordComplete,
  { verifyPassword, verifyPasswordComplete, verifyPasswordPrompt },
  { passwordNotConsistentHint }
) => {
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
