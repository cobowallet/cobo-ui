import React from 'react';
import { ScrollView } from 'react-native';
import { BrowseTab, Wallet, ExchangeWallet } from '../../icons';
import { Row } from './style';

class BrowserIcon extends React.PureComponent {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Row>
          <BrowseTab />
        </Row>
        <Row>
          <BrowseTab focused />
        </Row>
        <Row>
          <Wallet />
        </Row>
        <Row>
          <ExchangeWallet />
        </Row>
      </ScrollView>
    );
  }
}

export default BrowserIcon;
