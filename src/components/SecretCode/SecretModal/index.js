import React, { Component } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import SecretModalIcon from './SecretModalIcon';
import { CBHeader, CBText } from '../../Core';
import CBButton from '../../Core/CBButton/';

class SecretModal extends Component {
  render() {
    return (
      <Modal isVisible={this.props.isModalOpen} backdropColor={'#060709'} backdropOpacity={0.9}>
        <View
          style={{
            backgroundColor: '#F83363',
            borderRadius: 5,
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SecretModalIcon />
            <CBHeader bold size={20} style={{ padding: 5 }}>
              {this.props.header}
            </CBHeader>
            <CBText
              color={'white'}
              small
              style={{ paddingTop: 10, paddingBottom: 20, paddingLeft: 10, paddingRight: 10 }}
            >
              {this.props.description}
            </CBText>
          </View>
          <CBButton
            color={'white'}
            style={{ backgroundColor: 'white' }}
            textStyle={{ color: '#F83363' }}
            text={this.props.button}
            onPress={this.props.onPress}
          />
        </View>
      </Modal>
    );
  }
}

export default SecretModal;
