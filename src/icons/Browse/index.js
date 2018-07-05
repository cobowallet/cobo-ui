import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import activeBrowse from './img/browse-active.png';
import inactiveBrowse from './img/browse.png';

function Browse({ style, active = false }) {
  const source = active ? activeBrowse : inactiveBrowse;
  return <Image style={style} source={source} />;
}

Browse.propTypes = {
  style: PropTypes.object,
  active: PropTypes.bool,
};

Browse.defaultProps = {
  style: {},
  active: false,
};

export default Browse;
