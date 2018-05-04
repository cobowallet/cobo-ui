import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { Container, renderPasswordInputContent } from './style';
import PasswordSettingContentTheme from './theme';
import { composePasswordContent, composeConfirmContent } from './help';

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
    } else {
      this.props.onWaitingComplete();
    }
  };

  inputPassword = text => {
    const {
      password,
      passwordComplete,
      passwordPrompt,
      passwordPromptColor,
    } = composePasswordContent(text, this.state.theme, this.props);
    const { verifyPasswordComplete, verifyPasswordPrompt } = composeConfirmContent(
      password,
      passwordComplete,
      this.state,
      this.props
    );
    this.setState(
      {
        password,
        passwordComplete,
        passwordPrompt,
        passwordPromptColor,
        verifyPasswordComplete,
        verifyPasswordPrompt,
      },
      this.onComplete
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
      this.onComplete
    );
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
  onWaitingComplete: PropTypes.func.isRequired,
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
  minPasswordLength: PropTypes.number,
  minPasswordContainsTypeCount: PropTypes.number,
  strongPasswordContainsTypeCount: PropTypes.number,
};

PasswordSettingContent.defaultProps = {
  theme: 'default',
  style: {},
  minPasswordLength: 8,
  minPasswordContainsTypeCount: 2,
  strongPasswordContainsTypeCount: 3,
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
