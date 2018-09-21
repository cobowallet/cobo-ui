import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import key from './img/key.png';
import bigKey from './img/big-key.png';
import secret from './img/secret.png';

const imgs = {
  key,
  bigKey,
  secret,
};

const Secret = ({ type, style }) => {
  return <Image style={style} source={imgs[type]} />;
};

Secret.propTypes = {
  type: PropTypes.oneOf(['key', 'bigKey', 'secret']),
};
Secret.defaultProps = {
  type: 'key',
};
export default Secret;
