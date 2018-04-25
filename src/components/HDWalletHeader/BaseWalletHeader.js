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
          <ValueLabel size={34} color={'white'} onPress={headerOnPress}>
            {headerValue}
          </ValueLabel>
          <View style={{ flexDirection: 'row' }}>
            <ValueLabel size={24}>{subHeaderValue}</ValueLabel>
            <ValueLabel size={24} color={color}>
              {percent ? ` (${percent}) ` : null}
            </ValueLabel>
          </View>
          <View style={{ position: 'absolute', top: 0, right: 10 }}>{icon}</View>
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
};

BaseWalletHeader.defaultProps = {
  subHeaderValue: null,
  detail: null,
  children: null,
  headerOnPress: () => {},
  percent: null,
  color: 'white',
};

export default withTheme(BaseWalletHeader);
