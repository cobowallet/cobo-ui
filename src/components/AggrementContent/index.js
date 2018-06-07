import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import AggrementTheme from './theme';
import { renderBottom, Web, Container } from './style';

class AggrementContent extends React.PureComponent {
  state = {
    accept: false,
    webLoadSuccess: false,
  };

  onAcceptPress = () => {
    this.setState({
      accept: !this.state.accept,
    });
  };

  onError = () => {
    const { onError } = this.props;
    if (onError) {
      onError();
    }
  };

  onLoad = () => {
    this.setState(
      {
        webLoadSuccess: true,
      },
      () => {
        if (this.props.onLoad) {
          this.props.onLoad();
        }
      }
    );
  };

  render() {
    const { accept, webLoadSuccess } = this.state;
    const {
      source,
      acceptHint,
      continueTitle,
      onContinuePress,
      style,
      theme,
      ...otherWebProps
    } = this.props;
    return (
      <ThemeProvider theme={AggrementTheme[theme] || AggrementTheme.default}>
        <Container style={style}>
          <Web
            mixedContentMode={'compatibility'}
            {...otherWebProps}
            source={source}
            onError={this.onError}
            onLoad={this.onLoad}
          />
          {webLoadSuccess &&
            renderBottom({
              accept,
              acceptHint,
              continueTitle,
              onAcceptPress: this.onAcceptPress,
              onContinuePress,
            })}
        </Container>
      </ThemeProvider>
    );
  }
}

AggrementContent.propTypes = {
  source: PropTypes.object.isRequired,
  acceptHint: PropTypes.string.isRequired,
  continueTitle: PropTypes.string.isRequired,
  onContinuePress: PropTypes.func.isRequired,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  theme: PropTypes.string,
  style: PropTypes.any,
};

AggrementContent.defaultProps = {
  source: { uri: '' },
  acceptHint: 'I accept Cobo Privacy Policy and Term of Service.',
  continueTitle: 'Continue',
  theme: 'default',
  style: {},
  onError: null,
  onLoad: null,
};

export default AggrementContent;
