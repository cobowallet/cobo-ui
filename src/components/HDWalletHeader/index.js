import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { CBLabel } from '../Core/index';
import CBText from '../Core/CBText/index';

const HDWalletHeader = ({
  HeaderValue,
  SubHeaderValue,
  detail,
  icon,
  children,
  HeaderOnPress,
  percent,
  color,
  theme,
}) => {
  return (
    <LinearGradient
      colors={[theme['backgroundStartColor'], theme['backgroundEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <View style={{ width: '100%', minHeight: '25%' }}>
        <View style={{ marginTop: 40, marginLeft: 10, marginBottom: 5 }}>
          <CBLabel size={34} color={'white'} onPress={HeaderOnPress}>
            {HeaderValue}
          </CBLabel>
          <CBLabel size={24} color={'grayLight'}>
            {SubHeaderValue}
            <CBText size={24} color={color}>{`(${percent})`}</CBText>
          </CBLabel>
          {detail}
          <View style={{ position: 'absolute', top: 0, right: 10 }}>{icon}</View>
        </View>
        {children}
      </View>
    </LinearGradient>
  );
};

export default withTheme(HDWalletHeader);
