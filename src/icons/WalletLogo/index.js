import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import CoinLogos from '../CoinLogos';

function WalletLogo({ style, coin, uri }) {
  if (uri && uri.length > 0) {
    return <Image style={style} source={{ uri }} />;
  }
  const coinIconSource = coin ? CoinLogos[coin] : '';
  const logoSource = coinIconSource ? coinIconSource : require('./img/coin-default-logo.png');
  return <Image style={style} source={logoSource} />;
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
