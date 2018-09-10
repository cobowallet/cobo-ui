import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import wechat from './img/weChat.png';
import qq from './img/qq.png';
import weibo from './img/weibo.png';
import telegram from './img/telegram.png';
import twitter from './img/twitter.png';
import facebook from './img/facebook.png';

const Platforms = {
  wechat,
  qq,
  weibo,
  telegram,
  twitter,
  facebook,
};

function Community({ style, platform }) {
  return <Image source={Platforms[platform]} style={style} />;
}

Community.propTypes = {
  style: PropTypes.object,
  platform: PropTypes.oneOf(['wechat', 'qq', 'weibo', 'telegram', 'twitter', 'facebook']),
};

Community.defaultProps = {
  style: {},
  platform: 'wechat',
};

export default Community;
