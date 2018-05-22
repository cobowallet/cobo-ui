import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  padding-left: 16;
  background-color: #fff;
  border-radius: 3;
`;

const TextContanier = styled.View`
  border-bottom-width: 1;
  border-bottom-color: ${props => (props.last ? 'transparent' : 'rgba(137, 148, 198, 0.1)')};
`;

const TextItem = styled.Text`
  height: 62;
  line-height: 62;
  font-size: 14;
  color: #8f95aa;
`;

export default function Texts(props) {
  return (
    <Container>
      {props.texts.map((text, index) => (
        <TextContanier key={index} last={index === props.texts.length}>
          <TextItem>{text}</TextItem>
        </TextContanier>
      ))}
    </Container>
  );
}

Texts.propTypes = {
  texts: PropTypes.array.isRequired,
};
