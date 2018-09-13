import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import normal from './img/search.png';
import inline from './img/search-inline.png';
import bar from './img/search-bar.png';

const imgs = {
  normal,
  inline,
  bar,
};

export default function Search({ inline, type, style }) {
  if (inline) {
    type = 'inline';
  }
  return <Image style={style} source={imgs[type]} />;
}

Search.propTypes = {
  inline: PropTypes.bool,
  type: PropTypes.oneOf(['normal', 'inline', 'bar']),
};

Search.defaultTypes = {
  inline: false,
  type: 'normal',
};
