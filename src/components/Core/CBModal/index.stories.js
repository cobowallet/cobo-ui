import React from 'react';
import { View, Text, Button } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CBModal from './index';

function ModalInner({ onPress }) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <Text style={{ lineHeight: 28 }}>{'Modal title'}</Text>
      <Text style={{ lineHeight: 20 }}>
        {` Name	Type	Default	Description
animationIn	string or object	'slideInUp'	Modal show animation
animationInTiming	number	300	Timing for the modal show animation (in ms)
animationOut	string or object	'slideOutDown'	Modal hide animation
            `}
      </Text>
      <Button
        style={{
          width: '100%',
          borderTopWidth: 1,
          borderTopColor: 'gray',
          height: 40,
        }}
        onPress={onPress}
        title={'close modal'}
      />
    </View>
  );
}

class ModalTest extends React.Component {
  state = {
    display: false,
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <CBModal
          visible={this.state.display}
          style={{
            paddingVertical: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <ModalInner
            onPress={() => {
              this.setState({ display: false });
            }}
          />
        </CBModal>
        <Button title={'show modal'} onPress={() => this.setState({ display: true })} />
      </View>
    );
  }
}

storiesOf('CBModal', module).add('default', () => <ModalTest />);
