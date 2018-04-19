import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import SecretModalIcon from './SecretModalIcon';
import { CBLabel, CBText } from '../../Core';
import CBButton from '../../Core/CBButton';
import { MODAL_COLORS } from '../../../theme/CBColor';

const SecretModal = ({ isModalOpen, header, description, button, onPress }) => {
  return (
    <Modal isVisible={isModalOpen} backdropColor={MODAL_COLORS.black} backdropOpacity={0.9}>
      <View
        style={{
          backgroundColor: MODAL_COLORS.red,
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
          <CBLabel bold size={20} style={{ padding: 5 }}>
            {header}
          </CBLabel>
          <CBText
            color={'white'}
            small
            style={{ paddingTop: 10, paddingBottom: 20, paddingLeft: 10, paddingRight: 10 }}
          >
            {description}
          </CBText>
        </View>
        <CBButton
          color={'white'}
          style={{ backgroundColor: 'white' }}
          textStyle={{ color: '#F83363' }}
          text={button}
          onPress={onPress}
        />
      </View>
    </Modal>
  );
};

SecretModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SecretModal;
