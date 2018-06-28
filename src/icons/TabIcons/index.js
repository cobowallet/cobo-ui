import React from 'react';
import { Image } from 'react-native';
import Assets from './assets.png';
import Reward from './reward.png';
import Market from './market.png';
import Receive from './receive.png';
import Send from './send.png';
import Setting from './setting.png';
import AssetsActive from './assets_active.png';
import RewardActive from './reward_active.png';
import MarketActive from './market_active.png';
import ReceiveActive from './receive_active.png';
import SendActive from './send_active.png';
import SettingActive from './setting_active.png';

export const AssetsTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? AssetsActive : Assets} />
);

export const RewardTab = ({ focused }) => (
  <Image style={{ marginBottom: 2 }} source={focused ? RewardActive : Reward} />
);

export const MarketTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? MarketActive : Market} />
);

export const SendTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? SendActive : Send} />
);

export const ReceiveTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? ReceiveActive : Receive} />
);

export const SettingTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? SettingActive : Setting} />
);
