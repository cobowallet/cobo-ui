import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import CBColors, { ButtonColors } from '../../../theme/CBColor';

const ButtonContainer = styled(TouchableOpacity)`
  height: ${props => (props.simple ? 40 : 50)};
  width: auto;
  margin-left: ${props => (props.horizontalMargin ? 16 : 0)};
  margin-right: ${props => (props.horizontalMargin ? 16 : 0)};
  justify-content: center;
  align-items: center;
  border-radius: ${props => (props.rounded ? 25 : 3)};
  background-color: ${props => {
    if (props.simple) {
      return 'transparent';
    }
    if (props.disabled) {
      return props.disabledColor ? props.disabledColor : ButtonColors.disabledGray;
    }
    if (props.bgColor) {
      return props.bgColor;
    }
    return ButtonColors.blue;
  }};
`;

const LinearGradientBackground = styled(LinearGradient)`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: ${props => (props.rounded ? 25 : 3)};
`;

const ButtonText = styled.Text`
  color: ${props => {
    if (props.disabled) {
      return CBColors.grayLight;
    }
    if (props.textColor) {
      return props.textColor;
    }
    if (props.simple) {
      return ButtonColors.blue;
    }
    return ButtonColors.white;
  }};
  font-size: 15;
  font-weight: 600;
`;

function CBButton({
  text,
  simple,
  bgColor,
  textStyle,
  textColor,
  disabled,
  rounded,
  horizontalMargin,
  children,
  hasLinearGradient,
  linearGradientProps,
  ...rest
}) {
  return (
    <ButtonContainer
      simple={simple}
      rounded={rounded}
      disabled={disabled}
      bgColor={hasLinearGradient ? 'transparent' : bgColor}
      horizontalMargin={horizontalMargin}
      {...rest}
    >
      {hasLinearGradient && <LinearGradientBackground {...linearGradientProps} />}
      {children}
      {!children && (
        <ButtonText style={textStyle} textColor={textColor} disabled={disabled} simple={simple}>
          {text}
        </ButtonText>
      )}
    </ButtonContainer>
  );
}

CBButton.propTypes = {
  text: PropTypes.string,
  simple: PropTypes.bool,
  textStyle: PropTypes.object,
  bgColor: PropTypes.string,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  hasLinearGradient: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  horizontalMargin: PropTypes.bool,
};

CBButton.defaultProps = {
  text: '',
  simple: false,
  textStyle: {},
  rounded: false,
  disabled: false,
  hasLinearGradient: false,
  linearGradientProps: {},
  horizontalMargin: true,
};

export default CBButton;
