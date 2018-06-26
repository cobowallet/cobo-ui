import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Browse({ style, active, size }) {
  return (
    <Image
      style={style}
      source={require(`/img/browse${active ? '-active' : ''}@${size}x.png`)}
    />
  );
}

Browse.propTypes = {
  style: PropTypes.object,
  active: PropTypes.bool,
  size: PropTypes.string,
};

Browse.defaultProps = {
  style: {},
  active: false,
  size: '1',
};

export default Browse;
