import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import AggrementTheme from './theme';
import { renderBottom, Web, Container } from './style';

class AggrementContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      accept: false,
    };
  }

  onAcceptPress = () => {
    this.setState({
      accept: !this.state.accept,
    });
  };

  render() {
    const { accept } = this.state;
    const { source, acceptHint, continueTitle, onContinuePress, style, theme } = this.props;
    return (
      <ThemeProvider theme={AggrementTheme[theme] || AggrementTheme.default}>
        <Container style={style}>
          <Web source={source} />
          {renderBottom({
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
  theme: PropTypes.string,
  style: PropTypes.any,
};

AggrementContent.defaultProps = {
  source: { uri: '' },
  acceptHint: 'I accept Cobo Privacy Policy and Term of Service.',
  continueTitle: 'Continue',
  theme: 'default',
  style: {},
};

export default AggrementContent;
