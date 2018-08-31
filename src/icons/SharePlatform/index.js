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

const Platforms = {
  wechatSession,
  wechatTimeLine,
  qq,
  sinaWeibo,
  facebook,
  twitter,
  copy,
  more,
};

function SharePlatform({ style, platform }) {
  return <Image source={Platforms[platform]} style={style} />;
}

SharePlatform.propTypes = {
  style: PropTypes.object,
  platform: PropTypes.oneOf([
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

SharePlatform.defaultProps = {
  style: {},
  platform: 'wechatSession',
};

export default SharePlatform;
