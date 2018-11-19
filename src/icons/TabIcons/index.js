import React from 'react';
import { Image, View } from 'react-native';
import Assets from './imgs/assets.png';
import AssetsActive from './imgs/assets_active.png';
import Reward from './imgs/reward.png';
import RewardActive from './imgs/reward_active.png';
import Market from './imgs/market.png';
import MarketActive from './imgs/market_active.png';
import Receive from './imgs/receive.png';
import ReceiveActive from './imgs/receive_active.png';
import Send from './imgs/send.png';
import SendActive from './imgs/send_active.png';
import Setting from './imgs/setting.png';
import SettingActive from './imgs/setting_active.png';
import Browse from './imgs/browse.png';
import BrowseActive from './imgs/browse_active.png';
import Finance from './imgs/finance.png';
import FinanceActive from './imgs/finance_active.png';

export const AssetsTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? AssetsActive : Assets} />
);

export const RewardTab = ({ focused }) => (
  <Image style={{ marginBottom: 3 }} source={focused ? RewardActive : Reward} />
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

export const BrowseTab = ({ focused }) => (
  <Image style={{ marginBottom: 0 }} source={focused ? BrowseActive : Browse} />
);

export const FinanceTab = ({ focused, style = {}, imageStyle = {} }) => (
  <View
    style={[
      {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#ffffff',
        borderWidth: 4,
        borderColor: '#ffffff',
        marginTop: -24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00109C',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 4,
      },
      style,
    ]}
  >
    <Image
      style={[{ width: 48, height: 48 }, imageStyle]}
      source={focused ? FinanceActive : Finance}
    />
  </View>
);
