import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

export default function Search({ inline }) {
  const getSource = inline => {
    return inline ? require('./img/search-inline.png') : require('./img/search.png');
  };

  return <Image source={getSource(inline)} />;
}

Search.propTypes = {
  inline: PropTypes.bool,
};
