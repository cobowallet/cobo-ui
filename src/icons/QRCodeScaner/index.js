import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function QRCodeScaner({ style, type }) {
  const qrCodeMap = {
    gray: require('./img/gray-scan-qrcode.png'),
    default: require('./img/scan-qrcode.png'),
    grayDark: require('./img/dark-gray-scan-qrcode.png'),
  };
  return <Image style={style} source={qrCodeMap[type]} />;
}

QRCodeScaner.propTypes = {
  type: PropTypes.oneOf('default', 'gray', 'grayDark'),
};

QRCodeScaner.defaultProps = {
  type: 'default',
};

export default QRCodeScaner;
