import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import SecretModalIcon from './SecretModalIcon';
import { CBHeader, CBText } from '../../Core';
import CBButton from '../../Core/CBButton/';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: '#000',
  },
});

class SecretModal extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Modal isVisible={this.props.isModalOpen}>
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
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default SecretModal;
