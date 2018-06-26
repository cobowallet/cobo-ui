import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Wallet({ style, size = '1' }) {
  return <Image style={style} source={require(`./img/wallet@${size}x.png`)} />;
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
