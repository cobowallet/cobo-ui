import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { TouchableOpacity, Image, Platform } from 'react-native';

const Container = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  padding-bottom: 7;
  margin-bottom: 5;
  border-bottom-width: 3;
  border-bottom-color: ${props => (props.selected ? '#5170eb' : 'transparent')};
`;

const IconContainer = styled.View`
  width: 40;
  height: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4;
`;

const Title = styled.Text`
  font-size: 14;
  color: #000;
  margin-bottom: 2;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
`;

const SubTitle = styled.Text`
  font-size: 12;
  color: #8f95aa;
`;

function onPress(props) {
  if (props.selected !== props.index) {
    props.switchTab(props.index);
  }
}

function TabItem(props) {
  return (
    <Container selected={props.selected} onPress={() => onPress(props)}>
      <IconContainer>
        <Image source={props.icon} />
      </IconContainer>
      <Title>{props.title}</Title>
      <SubTitle>({props.subTitle})</SubTitle>
    </Container>
  );
}

TabItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  switchTab: PropTypes.func.isRequired,
};

export default TabItem;
