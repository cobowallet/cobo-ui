import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { Container, renderPasswordInputContent } from './style';
import PasswordSettingContentTheme from './theme';

class PasswordSettingContent extends React.PureComponent {
  constructor(props) {
    super(props);
    const theme = PasswordSettingContentTheme[props.theme] || PasswordSettingContentTheme.default;
    this.state = {
      theme,
      password: '',
      passwordComplete: false,
      passwordPrompt: props.enterPasswordHint,
      passwordPromptColor: theme.errorColor,
      verifyPassword: '',
      verifyPasswordComplete: false,
      verifyPasswordPrompt: '',
      verifyPasswordPromptColor: theme.errorColor,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.theme !== this.props.theme) {
      const theme =
        PasswordSettingContentTheme[nextProps.theme] || PasswordSettingContentTheme.default;
      this.setState({
        theme,
        verifyPasswordPromptColor: theme.errorColor,
      });
    }
  }

  clear = () => {
    this.setState({
      password: '',
      passwordComplete: false,
      passwordPrompt: this.props.enterPasswordHint,
      passwordPromptColor: this.state.theme.errorColor,
      verifyPassword: '',
      verifyPasswordComplete: false,
      verifyPasswordPrompt: '',
      verifyPasswordPromptColor: this.state.theme.errorColor,
    });
  };

  onComplete = () => {
    const { password, passwordComplete, verifyPasswordComplete } = this.state;
    if (passwordComplete && verifyPasswordComplete) {
      this.props.onComplete(password);
    }
  };

  inputPassword = text => {
    const { theme, verifyPassword } = this.state;
    const {
      enterPasswordHint,
      passwordLengthHint,
      passwordContainsTypeHint,
      passwordNotConsistentHint,
      mediumLevelHint,
      strongLevelHint,
    } = this.props;
    const containsTypes = this.regularVerifyPassword(text);

    let passwordPrompt = '';
    let passwordPromptColor = theme.errorColor;
    let passwordComplete = false;
    let verifyPasswordComplete = this.state.verifyPasswordComplete;
    let verifyPasswordPrompt = this.state.verifyPasswordPrompt;

    if (!text) {
      passwordPrompt = enterPasswordHint;
    } else {
      if (text.length < 8) {
        if (containsTypes < 2) {
          passwordPrompt = enterPasswordHint;
        } else {
          passwordPrompt = passwordLengthHint;
        }
      } else {
        if (containsTypes < 2) {
          passwordPrompt = passwordContainsTypeHint;
        } else {
          passwordComplete = true;
          if (containsTypes >= 3) {
            passwordPromptColor = theme.completeColor;
            passwordPrompt = strongLevelHint;
          } else {
            passwordPrompt = mediumLevelHint;
            passwordPromptColor = theme.mediumLevelColor;
          }
        }
      }

      if (verifyPassword) {
        if (verifyPassword.length >= text.length) {
          if (verifyPassword === text) {
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
    }

    this.setState(
      {
        password: text,
        passwordComplete,
        passwordPrompt,
        passwordPromptColor,
        verifyPasswordComplete,
        verifyPasswordPrompt,
      },
      () => {
        setTimeout(this.onComplete, 100);
      }
    );
  };

  inputVerifyPassword = text => {
    const { password, passwordComplete } = this.state;
    const { passwordNotConsistentHint } = this.props;
    let verifyPasswordComplete = false;
    let verifyPasswordPrompt = '';

    if (password && text && password.length <= text.length) {
      if (password === text) {
        verifyPasswordComplete = passwordComplete;
        verifyPasswordPrompt = '';
      } else {
        verifyPasswordPrompt = passwordNotConsistentHint;
      }
    }
    this.setState(
      {
        verifyPassword: text,
        verifyPasswordComplete,
        verifyPasswordPrompt,
      },
      () => {
        setTimeout(this.onComplete, 100);
      }
    );
  };

  regularVerifyPassword = password => {
    let containsTypes = 0;
    containsTypes += password.search('[0-9]') >= 0 ? 1 : 0;
    containsTypes += password.search('[A-Za-z]') >= 0 ? 1 : 0;
    containsTypes +=
      password.search("[`~!@#$^&*()=|{}':;',.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") >= 0
        ? 1
        : 0;
    return containsTypes;
  };

  render() {
    const { style, passwordPlaceholder, verifyPasswordPlaceholder } = this.props;
    const {
      theme,
      passwordPrompt,
      passwordPromptColor,
      passwordComplete,
      verifyPasswordPrompt,
      verifyPasswordPromptColor,
      verifyPasswordComplete,
      password,
      verifyPassword,
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Container style={style}>
          {renderPasswordInputContent({
            onChangeText: this.inputPassword,
            placeholder: passwordPlaceholder,
            passwordPrompt,
            passwordPromptColor,
            isComplete: passwordComplete,
            value: password,
          })}
          {renderPasswordInputContent({
            onChangeText: this.inputVerifyPassword,
            placeholder: verifyPasswordPlaceholder,
            passwordPrompt: verifyPasswordPrompt,
            passwordPromptColor: verifyPasswordPromptColor,
            isComplete: verifyPasswordComplete,
            value: verifyPassword,
          })}
        </Container>
      </ThemeProvider>
    );
  }
}

PasswordSettingContent.propTypes = {
  onComplete: PropTypes.func.isRequired,
  passwordPlaceholder: PropTypes.string.isRequired,
  verifyPasswordPlaceholder: PropTypes.string.isRequired,
  enterPasswordHint: PropTypes.string.isRequired,
  passwordLengthHint: PropTypes.string.isRequired,
  passwordContainsTypeHint: PropTypes.string.isRequired,
  passwordNotConsistentHint: PropTypes.string.isRequired,
  mediumLevelHint: PropTypes.string.isRequired,
  strongLevelHint: PropTypes.string.isRequired,
  theme: PropTypes.string,
  style: PropTypes.any,
};

PasswordSettingContent.defaultProps = {
  theme: 'default',
  style: {},
  passwordPlaceholder: '',
  verifyPasswordPlaceholder: '',
  enterPasswordHint:
    'Password must be at least 8 characters in length and contain letters, numbers, and special characters',
  passwordLengthHint: 'Password is too short (must be at least 8 characters)',
  passwordContainsTypeHint: 'Password must contain letters, numbers, and special characters',
  passwordNotConsistentHint: 'Passwords do not match, please try again',
  mediumLevelHint: 'Password Strength: Medium',
  strongLevelHint: 'Password Strength: Strong',
};

export default PasswordSettingContent;
