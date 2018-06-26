import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Browse({ style, active = false, size = '1' }) {
  switch (size) {
    case '1':
      if (active) {
        return <Image style={style} source={require(`./img/browse-active1x.png`)} />;
      }
      return <Image style={style} source={require(`./img/browse1x.png`)} />;
    case '2':
      if (active) {
        return <Image style={style} source={require(`./img/browse-active2x.png`)} />;
      }
      return <Image style={style} source={require(`./img/browse2x.png`)} />;
    case '3':
      if (active) {
        return <Image style={style} source={require(`./img/browse-active3x.png`)} />;
      }
      return <Image style={style} source={require(`./img/browse3x.png`)} />;
    default:
      return null;
  }
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
