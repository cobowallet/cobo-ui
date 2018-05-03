import React from 'react';
import { View, Text, Platform } from 'react-native';
import { withTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const ValueLabel = styled.Text`
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size};
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro'};
  font-style: normal;
`;

const BaseWalletHeader = ({
  headerValue,
  subHeaderValue,
  icon,
  children,
  headerOnPress,
  percent,
  color,
  style,
  theme,
}) => {
  return (
    <LinearGradient
      colors={[theme['backgroundStartColor'], theme['backgroundEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <View style={[{ width: '100%' }, style]}>
        <View style={{ marginTop: 30, marginLeft: 16 }}>
          <ValueLabel size={34} color={'white'} onPress={headerOnPress} disabled={!headerOnPress}>
            {headerValue}
          </ValueLabel>
          <View style={{ flexDirection: 'row' }}>
            <ValueLabel size={24}>{subHeaderValue}</ValueLabel>
            <ValueLabel size={24} color={color}>
              {percent ? ` (${percent}) ` : null}
            </ValueLabel>
          </View>
          <View style={{ position: 'absolute', top: 0, right: 16 }}>{icon}</View>
        </View>
        {children}
      </View>
    </LinearGradient>
  );
};

BaseWalletHeader.propTypes = {
  headerValue: PropTypes.string.isRequired,
  subHeaderValue: PropTypes.string,
  icon: PropTypes.element.isRequired,
  children: PropTypes.element,
  headerOnPress: PropTypes.func,
  percent: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object.isRequired,
  style: PropTypes.any,
};

BaseWalletHeader.defaultProps = {
  subHeaderValue: null,
  detail: null,
  children: null,
  headerOnPress: null,
  percent: null,
  color: 'white',
  style: {},
};

export default withTheme(BaseWalletHeader);
