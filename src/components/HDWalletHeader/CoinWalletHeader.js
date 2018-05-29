import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { CoinWalletHeaderTheme } from '../../theme';
import BaseWalletHeader from './BaseWalletHeader';

const CoinWalletHeader = ({
  coinValue,
  fiatCurrencyValue,
  icon,
  percent,
  color,
  theme,
  children,
  style,
}) => {
  const subHeader = `≈${fiatCurrencyValue}`;

  return (
    <ThemeProvider theme={CoinWalletHeaderTheme[theme]}>
      <BaseWalletHeader
        headerValue={coinValue}
        subHeaderValue={subHeader}
        icon={icon}
        percent={percent}
        color={color}
        style={style}
        type="coinWallet"
        children={children}
      />
    </ThemeProvider>
  );
};

CoinWalletHeader.propTypes = {
  coinValue: PropTypes.string.isRequired,
  fiatCurrencyValue: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  percent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.element,
  style: PropTypes.any,
};

CoinWalletHeader.defaultProps = {
  children: null,
  style: {},
};

export default CoinWalletHeader;
