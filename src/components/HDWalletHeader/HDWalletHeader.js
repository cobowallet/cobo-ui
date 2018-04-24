import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { CBLabel } from '../Core/index';

const HDWalletHeader = ({
  headerValue,
  subHeaderValue,
  detail,
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
          <CBLabel size={34} color={'white'} onPress={headerOnPress}>
            {headerValue}
          </CBLabel>
          <View style={{ flexDirection: 'row' }}>
            <CBLabel size={24} color={'white'}>
              {subHeaderValue}
            </CBLabel>
            <CBLabel size={24} color={color}>
              {percent ? ` (${percent}) ` : null}
            </CBLabel>
          </View>
          {detail}
          <View style={{ position: 'absolute', top: 0, right: 10 }}>{icon}</View>
        </View>
        {children}
      </View>
    </LinearGradient>
  );
};

HDWalletHeader.propTypes = {
  headerValue: PropTypes.string.isRequired,
  subHeaderValue: PropTypes.string,
  detail: PropTypes.element,
  icon: PropTypes.element.isRequired,
  children: PropTypes.element,
  headerOnPress: PropTypes.func,
  percent: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

HDWalletHeader.defaultProps = {
  subHeaderValue: null,
  detail: null,
  children: null,
  headerOnPress: () => {},
  percent: null,
  color: 'white',
};

export default withTheme(HDWalletHeader);
