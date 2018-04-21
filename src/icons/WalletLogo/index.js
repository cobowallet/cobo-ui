import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import CoinLogos from 'CoinLogos';

function WalletLogo({ style, coin }) {
  const coinIconSource = coin ? CoinLogos[coin] : '';
  const logoSource = coinIconSource ? coinIconSource : require('./img/coin-default-logo.png');
  return <Image style={style} source={logoSource} />;
}

WalletLogo.propTypes = {
  coin: PropTypes.string,
};

WalletLogo.defaultProps = {
  coin: '',
};

export default WalletLogo;
