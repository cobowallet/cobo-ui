import React from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText, CBLabel } from '../Core';

const { width } = Dimensions.get('window');

const SecretCodePanel = ({ header, descriptions, body, button, children }) => {
  return (
    <LinearGradient colors={['#6163FF', '#8D04FF']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.9 }}>
      <ScrollView style={{ width }}>
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
    </LinearGradient>
  );
};

export default SecretCodePanel;
