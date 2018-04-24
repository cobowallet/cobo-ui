import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { HDWalletHeaderTheme } from '../../theme';
import HDWalletHeader from './index';

const CoinWalletHeader = ({
  coinValue,
  legalTenderValue,
  icon,
  percent,
  color,
  address,
  theme,
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
        detail={address}
        HeaderOnPress={() => {}}
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
  address: PropTypes.element,
  theme: PropTypes.string.isRequired,
};

CoinWalletHeader.defaultProps = {
  icon: null,
  address: null,
};

export default CoinWalletHeader;
