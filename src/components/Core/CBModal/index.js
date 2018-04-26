import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalContent } from './style';

function CBModal({
  children,
  visible,
  animationIn,
  animationOut,
  style,
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
  /**
   * animation props type string | { from: Object, to: Object };
   */
  animationIn: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  animationOut: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

CBModal.defaultProps = {
  animationIn: { from: { opacity: 0 }, to: { opacity: 1 } },
  animationOut: { from: { opacity: 1 }, to: { opacity: 0 } },
};

export default CBModal;
