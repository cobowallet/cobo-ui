import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import wallet from './img/wallet.png';

function Wallet({ style }) {
  return <Image style={style} source={wallet} />;
}

Wallet.propTypes = {
  style: PropTypes.object,
};

Wallet.defaultProps = {
  style: {},
};

export default Wallet;
