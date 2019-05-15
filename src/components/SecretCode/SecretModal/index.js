import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import SecretModalIcon from './SecretModalIcon';
import { CBLabel, CBText } from '../../Core';
import CBButton from '../../Core/CBButton';
import { MODAL_COLORS } from '../../../theme/CBColor';

const SecretModal = ({ isModalOpen, header, description, button, onPress, bannerContent }) => {
  return (
    <Modal isVisible={isModalOpen} backdropColor={MODAL_COLORS.black} backdropOpacity={0.9}>
      <LinearGradient
        colors={['#FF416C', '#E00044']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ borderRadius: 5 }}
      >
        <View
          style={{
            backgroundColor: 'transparent',
            paddingTop: 32,
            paddingBottom: 16,
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
            <CBLabel bold size={19} style={{ paddingTop: 32, paddingBottom: 10 }}>
              {header}
            </CBLabel>
            <CBText
              color={'white'}
              small
              style={{
                paddingBottom: 28,
                paddingLeft: 30,
                paddingRight: 30,
                textAlign: 'center',
                lineHeight: 21,
              }}
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
        {bannerContent}
      </LinearGradient>
    </Modal>
  );
};

SecretModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  bannerContent: PropTypes.element,
};

export default SecretModal;
