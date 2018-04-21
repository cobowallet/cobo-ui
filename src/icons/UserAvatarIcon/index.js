import React from 'react';
import { Image } from 'react-native';

function UserAvatarIcon({ style }) {
  return <Image style={style} source={require('./img/userAvatarIcon.png')} />;
}

export default UserAvatarIcon;
