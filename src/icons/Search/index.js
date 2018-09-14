import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import normal from './img/search.png';
import inline from './img/search-inline.png';
import bar from './img/search-bar.png';
import notSearch from './img/not-search.png';

const imgs = {
  normal,
  inline,
  bar,
  notSearch,
};

export default function Search({ inline, type, style }) {
  if (inline) {
    type = 'inline';
  }
  return <Image style={style} source={imgs[type]} />;
}

Search.propTypes = {
  inline: PropTypes.bool,
  type: PropTypes.oneOf(['normal', 'inline', 'bar', 'notSearch']),
};

Search.defaultProps = {
  inline: false,
  type: 'normal',
};
