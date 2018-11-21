import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import CoinLogos from '../CoinLogos';

// 显示wallet icon逻辑： 后端url - 前端图片 - 默认图片
function WalletLogo({ style, coin, uri }) {
  if (uri && uri.length > 0) {
    return <Image style={style} source={{ uri }} />;
  }
  const coinIconSource = coin ? CoinLogos[coin] : '';
  if (coinIconSource) {
    return <Image style={style} source={coinIconSource} />;
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
