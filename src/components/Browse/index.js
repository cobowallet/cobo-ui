import React from 'react';
import { ScrollView } from 'react-native';
import { Browse, Wallet, ExchangeWallet } from '../../icons';
import { Row } from './style';

class BrowserIcon extends React.PureComponent {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Row>
          <Browse size={'1'} />
          <Browse size={'2'} />
          <Browse size={'3'} />
        </Row>
        <Row>
          <Browse active size={'1'} />
          <Browse active size={'2'} />
          <Browse active size={'3'} />
        </Row>
        <Row>
          <Wallet size={'1'} />
        </Row>
        <Row>
          <Wallet size={'2'} />
        </Row>
        <Row>
          <Wallet size={'3'} />
        </Row>
        <Row>
          <ExchangeWallet size={'1'} />
          <ExchangeWallet size={'2'} />
          <ExchangeWallet size={'3'} />
        </Row>
      </ScrollView>
    );
  }
}

export default BrowserIcon;
