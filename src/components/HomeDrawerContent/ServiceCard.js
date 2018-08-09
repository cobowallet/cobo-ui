import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CBText } from '../Core';

const Container = styled(TouchableOpacity)`
  padding-left: 16;
  background-color: ${props => (props.selected ? '#f6f9ff' : '#fff')};
`;

const Card = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 12;
  padding-right: 16;
  border-bottom-width: ${props => (props.selected ? '0' : '1')};
  border-bottom-color: rgba(137, 148, 198, 0.1);
`;

const CardContent = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const CardInfo = styled.View`
  margin-left: 12;
`;

const Title = styled(CBText)`
  margin-top: 5;
  margin-bottom: 4;
`;

const SubTitle = styled.Text`
  font-size: 12;
  color: #adb3c9;
  font-weight: 600;
`;

export default function ServiceCard(props) {
  const { title, subTitle, renderIcon, onPress } = props;
  return (
    <Container onPress={onPress}>
      <Card>
        <CardContent>
          {renderIcon()}
          <CardInfo>
            <Title bold color={'dark'}>
              {title}
            </Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </CardInfo>
        </CardContent>
      </Card>
    </Container>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  renderIcon: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};
