import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Delete({ style }) {
  return <Image style={style} source={require('./img/delete.png')} />;
}

Delete.propTypes = {
  style: PropTypes.any,
};

Delete.defaultProps = {
  style: {},
};

export default Delete;
