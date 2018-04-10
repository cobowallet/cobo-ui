import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const FontColors = {
  gray: '#343a40',
  grayLight: '#8F95AA',
  red: '#f03e3e',
  violet: '#7950f2',
  white: '#fff',
  primary: '#3A5ADB',
  dark: '#212529',
  blue: '#5170EB',
  disabledGray: '#8F95AA',
  orange: '#FFC22F',
  green: '#00B191',
};

const CBText = styled.Text`
  font-size: ${props => (props.small ? 13 : 15)};
  color: ${props => FontColors[props.color]};
  font-weight: ${props => {
    if (props.bold) {
      return 600;
    }
    if (props.superBold) {
      return 800;
    }
    return 400;
  }};
`;

CBText.propTypes = {
  color: PropTypes.oneOf(['dark', 'gray', 'grayLight', 'primary', 'white', 'red', 'blue']),
};

CBText.defaultProps = {
  color: 'gray',
};

export default CBText;
