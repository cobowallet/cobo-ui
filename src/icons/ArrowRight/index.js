import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ArrowRight({ style, type }) {
  const getSource = type => {
    let source = require('./img/arrow-right.png');
    switch (type) {
      case 'setting':
        source = require(`./img/arrow-right-setting.png`);
        break;
      case 'white':
        source = require(`./img/arrow-right-white.png`);
        break;
      case 'blue':
        source = require(`./img/arrow-right-blue.png`);
        break;
      default:
        source = require('./img/arrow-right.png');
    }
    return source;
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
