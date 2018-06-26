import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Wallet({ style, size = '1' }) {
  switch (size) {
    case '1':
      return <Image style={style} source={require(`./img/wallet1x.png`)} />;
    case '2':
      return <Image style={style} source={require(`./img/wallet2x.png`)} />;
    case '3':
      return <Image style={style} source={require(`./img/wallet3x.png`)} />;
    default:
      return null;
  }
}

Wallet.propTypes = {
  style: PropTypes.object,
  size: PropTypes.string,
};

Wallet.defaultProps = {
  style: {},
  size: '1',
};

export default Wallet;
