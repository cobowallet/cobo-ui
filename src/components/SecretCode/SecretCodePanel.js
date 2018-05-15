import React from 'react';
import { withTheme } from 'styled-components';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText, CBLabel, CBButton } from '../Core';

const { width } = Dimensions.get('window');

const SecretCodePanel = ({
  header,
  descriptions,
  body,
  buttonTitle,
  buttonOnPress,
  children,
  theme,
  style,
}) => {
  return (
    <LinearGradient
      colors={[theme['pageBackgroundStartColor'], theme['pageBackgroundEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <ScrollView style={[{ width }, style]}>
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
        {children ? (
          children
        ) : (
          <CBButton
            style={{
              marginTop: 20,
              marginBottom: 40,
              backgroundColor: theme['buttonBackgroundColor'],
            }}
            textColor={theme['buttonTextColor']}
            text={buttonTitle}
            onPress={buttonOnPress}
          />
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default withTheme(SecretCodePanel);
export { SecretCodePanel as PureSecretCodePanel };
