import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import transaction from './img/send-coin.png';
import financing from './img/financing-send.png';
import spending from './img/spending-send.png';
import sent from './img/sent.png';

const SEND_IMG_PATHS = {
  transaction,
  financing,
  spending,
  sent,
};

function SendIcon({ style, type }) {
  return <Image style={style} source={SEND_IMG_PATHS[type]} />;
}

SendIcon.propTypes = {
  style: PropTypes.object,
  type: PropTypes.oneOf(['transaction', 'financing', 'spending', 'sent']),
};

SendIcon.defaultProps = {
  style: {},
  type: 'transaction',
};

export default SendIcon;
