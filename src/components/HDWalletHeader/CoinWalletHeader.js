import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { HDWalletHeaderTheme } from '../../theme';
import HDWalletHeader from './HDWalletHeader';

const CoinWalletHeader = ({
  coinValue,
  legalTenderValue,
  icon,
  percent,
  color,
  theme,
  children,
}) => {
  const subHeader = `≈${legalTenderValue}`;

  return (
    <ThemeProvider theme={HDWalletHeaderTheme[theme]}>
      <HDWalletHeader
        headerValue={coinValue}
        subHeaderValue={subHeader}
        icon={icon}
        percent={percent}
        color={color}
        HeaderOnPress={() => {}}
        children={children}
      />
    </ThemeProvider>
  );
};

CoinWalletHeader.propTypes = {
  coinValue: PropTypes.string.isRequired,
  legalTenderValue: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  percent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.element,
};

CoinWalletHeader.defaultProps = {
  children: null,
};

export default CoinWalletHeader;
