import React from 'react';
import { withTheme } from 'styled-components';
import { ScrollView, View, Dimensions } from 'react-native';
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
      <ScrollView style={[{ width, height: '100%' }]} contentContainerStyle={style}>
        <View style={{ paddingHorizontal: 16 }}>
          <CBLabel bold style={{ paddingTop: 26, paddingBottom: 20 }}>
            {header}
          </CBLabel>
          {descriptions.map((each, index) => (
            <CBText
              small
              colorHex={'rgba(255, 255, 255, 0.8)'}
              style={{ lineHeight: 20, marginBottom: 12 }}
              key={index}
            >
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
