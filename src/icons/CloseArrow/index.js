import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function CloseArrow({ style }) {
  return <Image style={style} source={require('./img/close-arrow.png')} />;
}

export default CloseArrow;
