import React from 'react';
import { ThemeProvider } from 'styled-components/native';
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

export default CoinWalletHeader;
