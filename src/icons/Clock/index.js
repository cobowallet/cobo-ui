import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Clock({ style }) {
  return <Image style={style} source={require('./img/clock.png')} />;
}

Clock.propTypes = {
  style: PropTypes.object,
};

Clock.defaultProps = {
  style: {},
};

export default Clock;
