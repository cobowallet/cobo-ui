import React from 'react';
import { ScrollView } from 'react-native';
import { Browse, Wallet, ExchangeWallet } from '../../icons';
import { Row } from './style';

class BrowserIcon extends React.PureComponent {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Row>
          <Browse />
        </Row>
        <Row>
          <Browse active />
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
