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
      this.setState({
        theme: PasswordSettingContentTheme[nextProps.theme] || PasswordSettingContentTheme.default,
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
    const { passwordComplete, verifyPasswordComplete } = this.state;
    if (passwordComplete && verifyPasswordComplete) {
      this.props.onComplete(this.state.password);
    }
  };

  inputPassword = text => {
    const {
      enterPasswordHint,
      passwordLengthHint,
      passwordContainsTypeHint,
      passwordNotConsistentHint,
      mediumLevelHint,
      strongLevelHint,
    } = this.props;
    const { theme } = this.state;
    let passwordPrompt = '';
    let passwordPromptColor = theme.errorColor;
    let passwordComplete = false;
    if (!text) {
      passwordPrompt = enterPasswordHint;
    } else {
      if (this.state.verifyPassword) {
        let verifyPasswordComplete = false;
        let verifyPasswordPrompt = '';
        if (this.state.verifyPassword.length === text.length) {
          if (this.state.verifyPassword === text) {
            verifyPasswordComplete = true;
            verifyPasswordPrompt = '';
          } else {
            verifyPasswordPrompt = passwordNotConsistentHint;
          }
        }
        this.setState({
          verifyPasswordComplete,
          verifyPasswordPrompt,
        });
      }

      if (text.length < 8) {
        passwordPrompt = passwordLengthHint;
        if (this.regularVerifyPassword(text) < 2) {
          passwordPrompt = enterPasswordHint;
        }
      } else {
        if (this.regularVerifyPassword(text) < 2) {
          passwordPrompt = passwordContainsTypeHint;
        } else {
          passwordComplete = true;
          if (this.regularVerifyPassword(text) >= 3) {
            passwordPromptColor = theme.completeColor;
            passwordPrompt = strongLevelHint;
          } else {
            passwordPrompt = mediumLevelHint;
            passwordPromptColor = theme.mediumLevelColor;
          }
        }
      }
    }

    this.setState(
      {
        password: text,
        passwordComplete,
        passwordPrompt,
        passwordPromptColor,
      },
      () => {
        setTimeout(this.onComplete, 100);
      }
    );
  };

  inputVerifyPassword = text => {
    let verifyPasswordComplete = false;
    let verifyPasswordPrompt = '';
    if (this.state.password && text && this.state.password.length <= text.length) {
      verifyPasswordPrompt = this.props.passwordNotConsistentHint;
      if (this.state.password === text) {
        verifyPasswordComplete = true;
        verifyPasswordPrompt = '';
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
    let passwordIncludedTypesCount = 0;
    passwordIncludedTypesCount += password.search('[0-9]') >= 0 ? 1 : 0;
    passwordIncludedTypesCount += password.search('[A-Za-z]') >= 0 ? 1 : 0;
    passwordIncludedTypesCount +=
      password.search("[`~!@#$^&*()=|{}':;',.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") >= 0
        ? 1
        : 0;
    return passwordIncludedTypesCount;
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
          })}
          {renderPasswordInputContent({
            onChangeText: this.inputVerifyPassword,
            placeholder: verifyPasswordPlaceholder,
            passwordPrompt: verifyPasswordPrompt,
            passwordPromptColor: verifyPasswordPromptColor,
            isComplete: verifyPasswordComplete,
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
