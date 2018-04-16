import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
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
      return ButtonColors.disabledGray;
    }
    return ButtonColors.blue;
  }};
`;

const ButtonText = styled.Text`
  color: ${props => {
    if (props.textColor) {
      return props.textColor;
    }
    if (props.disabled) {
      return CBColors.grayLight;
    }
    if (props.simple) {
      return ButtonColors.blue;
    }
    return ButtonColors.white;
  }};
  font-size: 15;
  font-weight: ${props => (props.simple ? 400 : 600)};
`;

function CBButton({
  text,
  simple,
  textStyle,
  disabled,
  rounded,
  horizontalMargin,
  children,
  textColor,
  ...rest
}) {
  return (
    <ButtonContainer
      simple={simple}
      rounded={rounded}
      disabled={disabled}
      horizontalMargin={horizontalMargin}
      {...rest}
    >
      {children}
      {!children && (
        <ButtonText style={textStyle} disabled={disabled} simple={simple} textColor={textColor}>
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
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  linearGradient: PropTypes.bool,
  horizontalMargin: PropTypes.bool,
};

CBButton.defaultProps = {
  text: '',
  simple: false,
  textStyle: {},
  rounded: false,
  disabled: false,
  linearGradient: false,
  horizontalMargin: true,
};

export default CBButton;
