import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText, CBLabel } from '../Core';

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SecretCodePanel = ({ header, descriptions, body, button, children }) => {
  return (
    <Gradient colors={['#6163FF', '#8D04FF']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.9 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <CBLabel bold style={{ paddingTop: 10, paddingBottom: 20 }}>
            {header}
          </CBLabel>
          {descriptions.map((each, index) => (
            <CBText small color={'white'} style={{ paddingTop: 10, paddingBottom: 10 }} key={index}>
              {each}
            </CBText>
          ))}
          {body}
        </View>
        {button}
        {children}
      </ScrollView>
    </Gradient>
  );
};

export default SecretCodePanel;
