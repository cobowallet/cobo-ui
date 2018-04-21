import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { CBText } from '../Core';
import { Ionicons } from '../../icons';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: auto;
  min-height: 80;
  margin-top: 8;
  margin-bottom: 8;
  padding-top: 16;
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
  border-left-color: ${props => colorMap[props.styleLevel]};
  border-left-width: 4;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-radius: 4;
  shadow-opacity: 0.15;
  border-radius: 4;
  elevation: 2;
`;

const Left = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Right = styled.View`
  justify-content: center;
  align-items: center;
`;

const colorMap = {
  passed: '#00B191',
  next: '#3A5ADB',
  future: '#BDC5DC',
};

const iconMap = {
  passed: <Ionicons name="ios-checkmark" size={24} color={'#00B191'} />,
  next: <Ionicons name="ios-arrow-forward" size={24} color={'#3A5ADB'} />,
  future: null,
};

const renderIcon = styleLevel => iconMap[styleLevel];

function AccountLevelBox({ canPress, onPress, text, selected, header, styleLevel }) {
  return (
    <Container selected={selected} disabled={!canPress} onPress={onPress} styleLevel={styleLevel}>
      <Left>
        <CBText color={'dark'} bold style={{ marginBottom: 5 }}>
          {header}
        </CBText>
        <CBText small color={'grayLight'}>
          {text.firstLine}
        </CBText>
        <CBText small color={'grayLight'}>
          {text.secondLine}
        </CBText>
      </Left>
      <Right>{renderIcon(styleLevel)}</Right>
    </Container>
  );
}

AccountLevelBox.displayName = 'Account Level Box';

AccountLevelBox.propTypes = {
  canPress: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.shape({
    firstLine: PropTypes.string.isRequired,
    secondLine: PropTypes.string.isRequired,
  }),
  selected: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  styleLevel: PropTypes.string.isRequired,
};

AccountLevelBox.defaultProps = {
  styleLevel: 'future',
};

export default AccountLevelBox;
