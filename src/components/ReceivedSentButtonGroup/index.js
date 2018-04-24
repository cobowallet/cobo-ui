import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Button, ButtonText, DivideLine } from './style';
import { SendIcon, ReceiveIcon } from '../../icons';

function ReceivedSentButtonGroup({ sendTitle, onSendPress, receiveTitle, onReceivePress, style }) {
  return (
    <ButtonContainer style={style}>
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
  );
}

ReceivedSentButtonGroup.displayName = 'Received and sent buttons group';

ReceivedSentButtonGroup.propTypes = {
  sendTitle: PropTypes.string.isRequired,
  onSendPress: PropTypes.func.isRequired,
  receiveTitle: PropTypes.string.isRequired,
  onReceivePress: PropTypes.func.isRequired,
};

ReceivedSentButtonGroup.defaultProps = {};

export default ReceivedSentButtonGroup;
