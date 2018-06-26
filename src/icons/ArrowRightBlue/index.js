import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import right from './img/right.png';

export default function ArrowRightBlue({ style, type }) {
  return <Image style={style} source={right} />;
}

ArrowRightBlue.propTypes = {
  style: PropTypes.object,
};

ArrowRightBlue.defaultProps = {
  style: {},
};
