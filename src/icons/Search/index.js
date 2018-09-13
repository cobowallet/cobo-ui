import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const imgs = {
  normal: require('./img/search.png'),
  inline: require('./img/search-inline.png'),
  bar: require('./img/search-bar.png'),
};

export default function Search({ inline, type, style }) {
  const getSource = (inline, type) => {
    if (inline) {
      type = 'inline';
    }
    return imgs[type];
  };

  return <Image style={style} source={getSource(inline)} />;
}

Search.propTypes = {
  inline: PropTypes.bool,
  type: PropTypes.oneOf(['normal', 'inline', 'bar']),
};

Search.defaultTypes = {
  inline: false,
  type: 'normal',
};
