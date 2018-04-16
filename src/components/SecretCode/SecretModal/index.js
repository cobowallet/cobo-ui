import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import SecretModalIcon from './SecretModalIcon';
import { CBHeader, CBText } from '../../Core';
import CBButton from '../../Core/CBButton/';

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0.7;
  background-color: #000;
  display: ${props => (props.isModalOpen ? 'flex' : 'none')};
`;

class SecretModal extends Component {
  render() {
    return (
      <Container isModalOpen={this.props.isModalOpen}>
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
              onPress={this.props.onPress}
            />
          </View>
        </Modal>
      </Container>
    );
  }
}

export default SecretModal;
