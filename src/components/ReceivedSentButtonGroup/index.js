import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import { receivedSentButtonGroupTheme } from '../../theme';
import { ButtonContainer, Button, ButtonText, DivideLine } from './style';
import { SendIcon, ReceiveIcon } from '../../icons';

function ReceivedSentButtonGroup({
  sendTitle,
  onSendPress,
  receiveTitle,
  onReceivePress,
  style,
  theme,
}) {
  return (
    <ThemeProvider
      theme={receivedSentButtonGroupTheme[theme] || receivedSentButtonGroupTheme.default}
    >
      <ButtonContainer style={[{ shadowOffset: { width: 0, height: -1 } }, style]}>
        <Button onPress={onSendPress}>
          <SendIcon type={'sent'} />
          <ButtonText>{sendTitle}</ButtonText>
        </Button>
        <DivideLine />
        <Button onPress={onReceivePress}>
          <ReceiveIcon type={'received'} />
          <ButtonText>{receiveTitle}</ButtonText>
        </Button>
      </ButtonContainer>
    </ThemeProvider>
  );
}

ReceivedSentButtonGroup.displayName = 'Received and sent buttons group';

ReceivedSentButtonGroup.propTypes = {
  sendTitle: PropTypes.string.isRequired,
  onSendPress: PropTypes.func.isRequired,
  receiveTitle: PropTypes.string.isRequired,
  onReceivePress: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

ReceivedSentButtonGroup.defaultProps = {
  theme: 'default',
};

export default ReceivedSentButtonGroup;
