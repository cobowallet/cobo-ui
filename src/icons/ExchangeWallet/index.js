import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function ExchangeWallet({ style, size = '1' }) {
  switch (size) {
    case '1':
      return <Image style={style} source={require(`./img/exchange1x.png`)} />;
    case '2':
      return <Image style={style} source={require(`./img/exchange2x.png`)} />;
    case '3':
      return <Image style={style} source={require(`./img/exchange3x.png`)} />;
    default:
      return null;
  }
}

ExchangeWallet.propTypes = {
  style: PropTypes.object,
  size: PropTypes.string,
};

ExchangeWallet.defaultProps = {
  style: {},
  size: '1',
};

export default ExchangeWallet;
