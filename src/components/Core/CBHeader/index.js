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

const CBHeader = styled.Text`
  font-size: ${props => props.size || 24};
  color: ${props => FontColors[props.color] || props.colorHex};
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

CBHeader.propTypes = {
  color: PropTypes.oneOf(['dark', 'gray', 'grayLight', 'primary', 'white', 'red', 'blue']),
  size: PropTypes.number,
};

CBHeader.defaultProps = {
  color: 'white',
  size: 24,
};

export default CBHeader;
