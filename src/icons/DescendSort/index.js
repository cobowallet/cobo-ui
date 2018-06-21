import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function DescendSort({ style, ...otherProps }) {
  return <Image style={style} source={require('./img/descend-sort.png')} {...otherProps} />;
}

DescendSort.propTypes = {
  style: PropTypes.any,
};

DescendSort.defaultProps = {
  style: {},
};

export default DescendSort;
