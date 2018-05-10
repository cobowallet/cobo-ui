import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import WarningModalIcon from './WarningModalIcon/index';
import { CBLabel, CBText } from '../Core/index';
import ButtonGroup from './ButtonGroup';
import { MODAL_COLORS } from '../../theme/CBColor';
import { FontAwesome } from '../../icons/index';

class WarningModal extends React.PureComponent {
  state = {
    isChecked: false,
  };

  render() {
    const {
      isModalOpen,
      header,
      description,
      submitText,
      cancelText,
      clickBox,
      onSuccess,
      onCancel,
    } = this.props;
    return (
      <Modal isVisible={isModalOpen} backdropColor={MODAL_COLORS.black} backdropOpacity={0.9}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              height: 140,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F83363',
            }}
          >
            <WarningModalIcon />
          </View>
          <View
            style={{
              paddingTop: 36,
              paddingLeft: 20,
              paddingBottom: 36,
              paddingRight: 20,
            }}
          >
            <CBLabel bold size={20} colorHex={'#000'} style={{ paddingBottom: 12 }}>
              {header}
            </CBLabel>
            <CBText colorHex={'#000'} small style={{ paddingBottom: 12 }}>
              {description}
            </CBText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ isChecked: !this.state.isChecked })}>
                {this.state.isChecked ? (
                  <FontAwesome name={'check-circle'} size={16} color={'#5170EB'} />
                ) : (
                  <FontAwesome name={'circle-o'} size={16} color={'#8F95AA'} />
                )}
              </TouchableOpacity>
              <CBText colorHex={'#000'} small style={{ paddingLeft: 6 }}>
                {clickBox}
              </CBText>
            </View>
          </View>
          <ButtonGroup
            leftButtonText={cancelText}
            rightButtonText={submitText}
            rightButtonStyle={this.state.isChecked ? { color: '#3A5ADB' } : { color: '#8F95AA' }}
            divideLineWidth={2}
            rightButtonDisable={!this.state.isChecked}
            onLeftPress={onCancel}
            onRightPress={onSuccess}
          />
        </View>
      </Modal>
    );
  }
}

WarningModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  clickBox: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default WarningModal;
