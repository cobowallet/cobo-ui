import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function ArrowUp({ active }) {
  return (
    <Image source={active ? require('./img/arrow-up.png') : require('./img/arrow-up-light.png')} />
  );
}

ArrowUp.propTypes = {
  active: PropTypes.bool,
};

ArrowUp.defaultProps = {
  active: false,
};

export default ArrowUp;
