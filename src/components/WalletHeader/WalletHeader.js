/**
 * Wallet Header
 * type: Spending, Financing
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  renderGradientContainer,
  Container,
  Balance,
  CoinText,
  CurrencyText,
  BottomContainer,
  renderButtons,
  Description,
  TotalRevenue,
  NextPaymentTime,
} from './style';

/**
 * Wallet Header, Spending Wallet Header, Financing Wallet Header
 */

const WalletHeader = ({
  coinCode,
  coinBalance,
  currencySymbol,
  currencyBalance,
  colors,
  totalRevenue,
  nextPaymentTime,
  buttons,
}) => {
  const hasTotalRevenue = totalRevenue && totalRevenue.length > 0;
  const hasNextPaymentTime = nextPaymentTime && nextPaymentTime.length > 0;
  const hasDescription = hasTotalRevenue || hasNextPaymentTime;

  return renderGradientContainer({
    renderChild: () => (
      <Container>
        <Balance>
          <CoinText>{`${coinBalance} ${coinCode}`}</CoinText>
          <CurrencyText>{`${currencySymbol} ${currencyBalance}`}</CurrencyText>
        </Balance>

        {hasDescription && (
          <Description>
            {hasTotalRevenue && <TotalRevenue>{totalRevenue}</TotalRevenue>}
            {hasNextPaymentTime && <NextPaymentTime>{nextPaymentTime}</NextPaymentTime>}
          </Description>
        )}

        <BottomContainer
          style={{
            marginTop: hasDescription ? 32 : 24,
          }}
        >
          {renderButtons(buttons)}
        </BottomContainer>
      </Container>
    ),
    colors,
  });
};

WalletHeader.displayName = 'Wallet Header';

WalletHeader.propTypes = {
  coinCode: PropTypes.string.isRequired,
  coinBalance: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  currencyBalance: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  totalRevenue: PropTypes.string,
  nextPaymentTime: PropTypes.string,
  /**
   * [{onPress, canPress, title}]
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func.isRequired,
      canPress: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      renderImage: PropTypes.func.isRequired,
    })
  ).isRequired,
};

WalletHeader.defaultProps = {
  totalRevenue: '',
  nextPaymentTime: '',
};

export default WalletHeader;
