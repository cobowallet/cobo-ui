import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import AssetCard from './index';

class AssetCardTest extends PureComponent {
  render() {
    const wallets = [
      {
        coinCode: 'ETH',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        txList: [{ title: 'Received' }, { title: 'Sent' }],
      },
      {
        coinCode: 'ETH',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        txList: [{ title: 'Received' }, { title: 'Sent' }],
      },
      {
        coinCode: 'ETH',
        amount: '4.800',
        fiatCurrencyAmount: '5220.96',
        fiatCurrencySymbol: '$',
        txList: [{ title: 'Received' }, { title: 'Sent' }],
      },
    ];
    return (
      <View
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: '#f5f5f6' }}
      >
        {wallets.map((item, index) => {
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
