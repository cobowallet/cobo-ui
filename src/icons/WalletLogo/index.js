import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import CoinLogos from '../CoinLogos';

function WalletLogo({ style, coin, uri }) {
  const coinIconSource = coin ? CoinLogos[coin] : '';
  if (coinIconSource) {
    return <Image style={style} source={coinIconSource} />;
  }
  if (uri && uri.length > 0) {
    return <Image style={style} source={{ uri }} />;
  }
  return <Image style={style} source={require('./img/coin-default-logo.png')} />;
}

WalletLogo.propTypes = {
  coin: PropTypes.string,
  uri: PropTypes.string,
};

WalletLogo.defaultProps = {
  coin: '',
  uri: '',
};

export default WalletLogo;
