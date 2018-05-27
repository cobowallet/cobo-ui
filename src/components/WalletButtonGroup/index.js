import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import walletButtonGroupTheme from './theme';
import { ButtonContainer, Button, ButtonText, DivideLine } from './style';
import { SendIcon, ReceiveIcon } from '../../icons';

function WalletButtonGroup({
  sendTitle,
  onSendPress,
  receiveTitle,
  onReceivePress,
  style,
  canVote,
  onVote,
  theme,
}) {
  return (
    <ThemeProvider theme={walletButtonGroupTheme[theme] || walletButtonGroupTheme.default}>
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
        {canVote && [
          <DivideLine />,
          <Button onPress={onVote}>
            <ButtonText>{'投票'}</ButtonText>
          </Button>,
        ]}
      </ButtonContainer>
    </ThemeProvider>
  );
}

WalletButtonGroup.displayName = 'Received and sent buttons group';

WalletButtonGroup.propTypes = {
  sendTitle: PropTypes.string.isRequired,
  onSendPress: PropTypes.func.isRequired,
  receiveTitle: PropTypes.string.isRequired,
  onReceivePress: PropTypes.func.isRequired,
  theme: PropTypes.string,
  style: PropTypes.any,
  canVote: PropTypes.bool,
  onVote: PropTypes.func,
};

WalletButtonGroup.defaultProps = {
  theme: 'default',
  style: {},
  canVote: false,
  onVote: null,
};

export default WalletButtonGroup;
