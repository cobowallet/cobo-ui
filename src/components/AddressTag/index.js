import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { CBText } from '../Core';

const Container = styled(LinearGradient)`
  height: 18;
  padding-horizontal: 6;
  border-radius: 9;
  justify-content: center;
  background-color: ${props => (props.background ? props.background : '#2766F8')};
`;

const TagText = styled(CBText)`
  font-size: 11;
`;

const AddressTag = ({ text, textColor, backgroundStartColor, backgroundEndColor, style }) => (
  <Container
    colors={[backgroundStartColor, backgroundEndColor]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={style}
  >
    <TagText superBold colorHex={textColor}>
      {text}
    </TagText>
  </Container>
);

AddressTag.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  backgroundStartColor: PropTypes.string,
  backgroundEndColor: PropTypes.string,
  style: PropTypes.any,
};

AddressTag.defaultProps = {
  textColor: '#ffffff',
  backgroundStartColor: '#2766F8',
  backgroundEndColor: '#2766F8',
  style: {},
};

export default AddressTag;
