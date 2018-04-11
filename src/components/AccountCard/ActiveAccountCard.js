import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { CBGradientCard } from '../Core';
import { TopContainer, Header, BottomContainer, renderButtons, Balance } from './style';

/**
 * Active account, deposit account or reward account
 */
const ActivateAccountCard = ({
  coinCode,
  coinBalance,
  currencySymbol,
  currencyBalance,
  sendTitle,
  onSendPress,
  receiveTitle,
  onReceivePress,
  onEnter,
  colors,
  title,
  reward,
  buttons,
}) => {
  let bottomButtons = [
    {
      onPress: onReceivePress,
      canPress: true,
      title: receiveTitle,
    },
    {
      onPress: onSendPress,
      canPress: true,
      title: sendTitle,
    },
  ];
  if (buttons && buttons.length > 0) {
    bottomButtons = buttons;
  }
  return (
    <CBGradientCard
      colors={colors}
      renderChild={() => {
        return (
          <TouchableOpacity onPress={onEnter} activeOpacity={0.6}>
            <TopContainer>
              <Header title={title} reward={reward} />
              <Balance
                coinCode={coinCode}
                coinBalance={coinBalance}
                currencySymbol={currencySymbol}
                currencyBalance={currencyBalance}
              />
            </TopContainer>
            <BottomContainer>{renderButtons(bottomButtons)}</BottomContainer>
          </TouchableOpacity>
        );
      }}
    />
  );
};

ActivateAccountCard.displayName = 'Activate Account Card';

ActivateAccountCard.propTypes = {
  /**
   * coin of the account
   */
  coinCode: PropTypes.string.isRequired,
  /**
   * balance, 4 digital string
   */
  coinBalance: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  currencyBalance: PropTypes.string.isRequired,
  onSendPress: PropTypes.func,
  onReceivePress: PropTypes.func,
  onEnter: PropTypes.func,
  colors: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  reward: PropTypes.string,
  receiveTitle: PropTypes.string,
  sendTitle: PropTypes.string,
  /**
   * [{onPress, canPress, title}]
   */
  buttons: PropTypes.array,
};

ActivateAccountCard.defaultProps = {
  onSendPress: null,
  onReceivePress: null,
  onEnter: null,
  reward: '',
  receiveTitle: 'Receive',
  sendTitle: 'Send',
  buttons: [],
};

export default ActivateAccountCard;
