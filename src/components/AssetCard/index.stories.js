import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import AssetCard from './index';

class AssetCardTest extends PureComponent {
  getTestData = () => {
    return [
      {
        coinCode: 'EOS',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        slogan: '年化收益300%+',
        adBadge: 'New',
        desc: '14:00(GMT+8)',
        txList: [{ title: 'Received' }, { title: 'Sent' }],
        coinParent: '',
        coinParentIconUrl: '',
      },
      {
        coinCode: 'EOSDAC',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        desc: '14:00(GMT+8)',
        txList: [{ title: 'Received' }, { title: 'Sent' }],
        coinParent: 'EOS',
        coinParentIconUrl: '',
      },
      {
        coinCode: 'TRX',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        adBadge: 'New',
        desc: '14:00(GMT+8) Receive VET dividend',
        coinParent: '',
        coinParentIconUrl: '',
      },
      {
        coinCode: 'ETH',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        desc: '14:00(GMT+8)获取VET增益',
        coinParent: '',
        coinParentIconUrl: '',
      },
    ];
  };

  render() {
    return (
      <View
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: '#f5f5f6' }}
      >
        {this.getTestData().map((item, index) => {
          return (
            <AssetCard {...item} onPress={action('assetCard did click')} key={index.toString()}>
              {item.txList &&
                item.txList.length > 0 &&
                item.txList.map((txItem, txIndex) => {
                  return (
                    <View
                      key={txIndex.toString()}
                      style={{
                        height: 50,
                        width: '100%',
                        borderTopColor: '#E3EAF1',
                        borderTopWidth: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 16,
                        backgroundColor: 'white',
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 15,
                          color: 'black',
                        }}
                      >
                        {txItem.title}
                      </Text>
                    </View>
                  );
                })}
            </AssetCard>
          );
        })}
      </View>
    );
  }
}

storiesOf('AssetCard', module).add('default', () => <AssetCardTest />);
