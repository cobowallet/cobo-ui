import React from 'react';
import PropTypes from 'prop-types';
import wechatSession from './img/wechat-session.png';
import wechatTimeLine from './img/wechat-timeLine.png';
import qq from './img/qq.png';
import sinaWeibo from './img/sina-weibo.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import messenger from './img/messenger.png';
import telegram from './img/telegram.png';
import whatsapp from './img/whatsapp.png';
import reddit from './img/reddit.png';
import snapchat from './img/snapchat.png';
import copy from './img/copy.png';
import more from './img/more.png';

import { Container, PlatformImage, HotImage } from './style';

const Platforms = {
  wechatSession,
  wechatTimeLine,
  qq,
  sinaWeibo,
  facebook,
  twitter,
  messenger,
  telegram,
  whatsapp,
  reddit,
  snapchat,
  copy,
  more,
};

function SharePlatform({ style, platform, hot }) {
  return (
    <Container>
      <PlatformImage source={Platforms[platform]} style={style} />
      {hot && <HotImage source={require('./img/hot.png')} />}
    </Container>
  );
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
    'messenger',
    'telegram',
    'whatsapp',
    'reddit',
    'snapchat',
    'copy',
    'more',
  ]),
  hot: PropTypes.bool,
};

SharePlatform.defaultProps = {
  style: {},
  platform: 'wechatSession',
  hot: false,
};

export default SharePlatform;
