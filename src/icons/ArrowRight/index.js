import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ArrowRight({ style, type }) {
  const getSource = type => {
    return type ? require(`./img/arrow-right-${type}.png`) : require('./img/arrow-right.png');
  };

  return <Image style={style} source={getSource(type)} />;
}

ArrowRight.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
};

ArrowRight.defaultProps = {
  style: {},
};
