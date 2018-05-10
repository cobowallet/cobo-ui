import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Asset({ style }) {
  return <Image style={style} source={require('./img/asset.png')} />;
}

Asset.propTypes = {
  style: PropTypes.any,
};

Asset.defaultProps = {
  style: {},
};

export default Asset;
