import React from 'react';
import { withTheme } from 'styled-components';
import { ScrollView, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText, CBLabel, CBButton } from '../../Core';
import Dot from './Dot';

const { width } = Dimensions.get('window');

const FrontPagePanel = ({
  header,
  subTitle,
  body,
  descriptions,
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
          {body}
          <CBLabel bold size={20} style={{ paddingBottom: 4 }}>
            {header}
          </CBLabel>
          <CBText
            small
            colorHex={'rgba(255, 255, 255, 0.7)'}
            style={{ paddingTop: 4, paddingBottom: 20 }}
          >
            {subTitle}
          </CBText>
          {descriptions.map((each, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              <Dot />
              <CBText
                small
                colorHex={'rgba(255, 255, 255, 0.7)'}
                style={{ paddingLeft: 6, marginBottom: 2 }}
                key={index}
              >
                {each}
              </CBText>
            </View>
          ))}
        </View>
        <CBButton
          style={{
            marginTop: 63,
            backgroundColor: theme['buttonBackgroundColor'],
          }}
          textColor={theme['buttonTextColor']}
          text={buttonTitle}
          onPress={buttonOnPress}
        />
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default withTheme(FrontPagePanel);
