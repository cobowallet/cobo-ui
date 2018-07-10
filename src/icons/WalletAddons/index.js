import React from 'react';
import { Image } from 'react-native';

export function Voting({ style }) {
  return <Image style={style} source={require('./Voting/img/voting.png')} />;
}

export function Account({ style }) {
  return <Image style={style} source={require('./Account/img/account.png')} />;
}

export function Bid({ style }) {
  return <Image style={style} source={require('./Bid/img/bid.png')} />;
}

export function Resources({ style }) {
  return <Image style={style} source={require('./Resources/img/resources.png')} />;
}
