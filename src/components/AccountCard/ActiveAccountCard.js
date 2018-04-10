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
  onSendPress,
  onReceivePress,
  onEnter,
  colors,
  title,
  reward,
}) => {
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
            <BottomContainer>
              {renderButtons([
                {
                  onPress: onReceivePress,
                  canPress: true,
                  title: 'Receive',
                },
                {
                  onPress: onSendPress,
                  canPress: true,
                  title: 'Send',
                },
              ])}
            </BottomContainer>
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
};

ActivateAccountCard.defaultProps = {
  onSendPress: null,
  onReceivePress: null,
  onEnter: null,
  reward: '',
};

export default ActivateAccountCard;
