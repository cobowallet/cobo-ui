import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Button } from 'react-native';
import SuccessAnimation from './index';

class Animation extends React.Component {
  state = {
    success: false,
  };

  success = () => {
    this.setState({
      success: true,
    });
  };

  restart = () => {
    this.setState(
      {
        success: false,
      },
      this.animation.restart
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SuccessAnimation success={this.state.success} ref={d => (this.animation = d)} />
        <Button title="success" onPress={this.success} />
        <Button title="restart" onPress={this.restart} />
      </View>
    );
  }
}

storiesOf('Payment Success Animation', module).add('default', () => <Animation />);
