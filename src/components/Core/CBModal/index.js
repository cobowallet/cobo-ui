import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalContent } from './style';

function CBModal({
  children,
  visible,
  style,
  animationIn = { from: { opacity: 0 }, to: { opacity: 1 } },
  animationOut = { from: { opacity: 1 }, to: { opacity: 0 } },
  ...otherProps // orther react-native-modal props
}) {
  return (
    <ModalContainer
      isVisible={visible}
      animationIn={animationIn}
      animationOut={animationOut}
      {...otherProps}
    >
      <ModalContent style={style}>{children}</ModalContent>
    </ModalContainer>
  );
}

CBModal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

CBModal.defaultProps = {};

export default CBModal;
