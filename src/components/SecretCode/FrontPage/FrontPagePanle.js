import React from 'react';
import { withTheme } from 'styled-components';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from '../../../icons';
import { CBText, CBLabel, CBButton } from '../../Core';

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
}) => {
  return (
    <LinearGradient
      colors={[theme['pageBackgroundStartColor'], theme['pageBackgroundEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <ScrollView style={{ width }}>
        <View style={{ padding: 10 }}>
          {body}
          <CBLabel bold size={20} style={{ paddingBottom: 4 }}>
            {header}
          </CBLabel>
          <CBText
            small
            colorHex={'rgba(255,255,255,0.7)'}
            style={{ paddingTop: 4, paddingBottom: 20 }}
          >
            {subTitle}
          </CBText>
          {descriptions.map((each, index) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              <Entypo name={'dot-single'} size={16} color={'rgba(255, 255,255, 0.7)'} />
              <CBText small color={'white'} style={{ paddingLeft: 6 }} key={index}>
                {each}
              </CBText>
            </View>
          ))}
        </View>
        <CBButton
          style={{
            marginTop: 60,
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
