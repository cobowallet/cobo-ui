import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import IntroductionCard from './index';

storiesOf('Introduction', module)
  .add('default', () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F4F4FA',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <IntroductionCard
        cloud={{
          title: '云端钱包',
          id: 'cloud',
          subTitle: ' 私钥在云端',
          texts: ['随时随地安全的存储和收发', '钱包备份在云端管理', '需要使用手机号码注册'],
        }}
        hd={{
          title: '助记词钱包',
          id: 'hd',
          subTitle: '私钥在本地',
          texts: [
            '私钥仅保管在本地设备，由自己管理',
            '需备份助记词，若丢失，资产无法恢复',
            '可导入助记词，立即使用资金',
          ],
        }}
      />
    </View>
  ))
  .add('selected', () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F4F4FA',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <IntroductionCard
        cloud={{
          title: '云端钱包',
          id: 'cloud',
          subTitle: ' 私钥在云端',
          texts: ['随时随地安全的存储和收发', '钱包备份在云端管理', '需要使用手机号码注册'],
        }}
        hd={{
          title: '助记词钱包',
          id: 'hd',
          subTitle: '私钥在本地',
          texts: [
            '私钥仅保管在本地设备，由自己管理',
            '需备份助记词，若丢失，资产无法恢复',
            '可导入助记词，立即使用资金',
          ],
        }}
        selected={'hd'}
        switchTab={console.log}
      />
    </View>
  ));
