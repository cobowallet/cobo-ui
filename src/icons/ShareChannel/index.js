import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import wechatSession from './img/wechat-session.png';
import wechatTimeLine from './img/wechat-timeLine.png';
import qq from './img/qq.png';
import sinaWeibo from './img/sina-weibo.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import copy from './img/copy.png';
import more from './img/more.png';

const Channels = {
  wechatSession,
  wechatTimeLine,
  qq,
  sinaWeibo,
  facebook,
  twitter,
  copy,
  more,
};

function ShareChannel({ style, channel }) {
  return <Image source={Channels[channel]} style={style} />;
}

ShareChannel.propTypes = {
  style: PropTypes.object,
  channel: PropTypes.oneOf([
    'wechatSession',
    'wechatTimeLine',
    'qq',
    'sinaWeibo',
    'facebook',
    'twitter',
    'copy',
    'more',
  ]),
};

ShareChannel.defaultProps = {
  style: {},
  type: 'transaction',
};

export default ShareChannel;
