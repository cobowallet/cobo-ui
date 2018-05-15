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
  DescriptionRow,
  DescriptionText,
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
  descriptions,
  buttons,
}) => {
  const hasDescription = descriptions && descriptions.length > 0;

  return renderGradientContainer({
    renderChild: () => (
      <Container>
        <Balance>
          <CoinText>{`${coinBalance} ${coinCode}`}</CoinText>
          <CurrencyText>{`${currencySymbol} ${currencyBalance}`}</CurrencyText>
        </Balance>

        {hasDescription ? (
          <Description>
            {descriptions.map(item => {
              const { key, value } = item;
              return (
                <DescriptionRow>
                  <DescriptionText>{key}</DescriptionText>
                  <DescriptionText>{value}</DescriptionText>
                </DescriptionRow>
              );
            })}
          </Description>
        ) : null}

        <BottomContainer
          style={{
            marginTop: hasDescription ? 24 : 32,
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
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  /**
   * [{onPress, canPress, title}]
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      canPress: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      renderImage: PropTypes.func.isRequired,
    })
  ).isRequired,
};

WalletHeader.defaultProps = {
  descriptions: [],
};

export default WalletHeader;
