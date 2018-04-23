import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { CBContainer } from '../Core';
import MessageModal from './index';

class MessageModalTest extends PureComponent {
  state = {
    display: false,
  };

  getButtons = () => {
    return [
      {
        title: '错过也没事',
        titleColor: 'grayLight',
        canPress: true,
        onPress: () => {
          this.setState({
            display: false,
          });
        },
      },
      {
        title: '暂不划出',
        titleColor: 'primary',
        titleBold: true,
        canPress: true,
        onPress: () => {
          this.setState({
            display: false,
          });
        },
      },
    ];
  };

  render() {
    const buttons = this.getButtons();
    return (
      <CBContainer alignCenter style={{ justifyContent: 'center' }}>
        <MessageModal
          title={'确认划出'}
          buttons={buttons}
          content={'在收益期内划出会影响当期的收益，确认划出吗？'}
          visible={this.state.display}
        />
        <Button title={'show message modal'} onPress={() => this.setState({ display: true })} />
      </CBContainer>
    );
  }
}

storiesOf('MessageModal', module).add('default', () => <MessageModalTest />);
