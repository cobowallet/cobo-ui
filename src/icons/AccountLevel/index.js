import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import passed from './img/passed.png';
import forward from './img/forward.png';

const ICON = {
  passed,
  forward,
};

export default function AccountLevel({ style, type }) {
  return <Image style={style} source={ICON[type]} />;
}

AccountLevel.propTypes = {
  style: PropTypes.object,
  type: PropTypes.oneOf(['passed', 'forward']),
};

AccountLevel.defaultProps = {
  style: {},
  type: 'transaction',
};
