import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function Customer({ style }) {
  return (
    <Image style={[{ width: 22, height: 20 }, style]} source={require('./img/customer.png')} />
  );
}

Customer.propTypes = {
  style: PropTypes.any,
};

Customer.defaultProps = {
  style: {},
};

export default Customer;
