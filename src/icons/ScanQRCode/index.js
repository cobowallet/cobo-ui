import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function ScanQRCode({ style, gray }) {
  return (
    <Image
      style={style}
      source={gray ? require('./img/gray-scan-qrcode.png') : require('./img/scan-qrcode.png')}
    />
  );
}

ScanQRCode.propTypes = {
  gray: PropTypes.bool,
};

ScanQRCode.defaultProps = {
  gray: false,
};

export default ScanQRCode;
