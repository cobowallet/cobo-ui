import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function AddressNotExists({ style }) {
  return <Image style={style} source={require('./img/address-not-exists.png')} />;
}

AddressNotExists.propTypes = {
  style: PropTypes.any,
};

AddressNotExists.defaultProps = {
  style: {},
};

export default AddressNotExists;
