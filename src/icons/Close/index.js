import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Close({ style }) {
  return <Image style={style} source={require('./img/close.png')} />;
}

Close.propTypes = {
  style: PropTypes.object,
};

Close.defaultProps = {
  style: {},
};

export default Close;
