import React from 'react';
import { View, Platform } from 'react-native';
import { withTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const ValueLabel = styled.Text`
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size};
  font-family: 'DINNextLTPro-BoldCondensed';
`;

const Container = styled.View`
  flex-flow: row;
  margin-top: 30;
  padding-horizontal: 16;
  height: ${Platform.OS === 'ios' ? 64 : 75};
  align-items: flex-start;
  justify-content: space-between;
`;

const BaseWalletHeader = ({
  headerValue,
  subHeaderValue,
  icon,
  backupHd,
  children,
  headerOnPress,
  percent,
  color,
  style,
  type,
  theme,
  transparent,
}) => {
  const main = (
    <View style={[{ width: '100%' }, style]}>
      <Container>
        <View>
          <ValueLabel size={34} color={'white'} onPress={headerOnPress} disabled={!headerOnPress}>
            {headerValue}
          </ValueLabel>
          {backupHd}
          <View style={{ flexDirection: 'row' }}>
            <ValueLabel size={24}>{subHeaderValue}</ValueLabel>
            {/* <ValueLabel size={24} color={color}>
              {percent ? ` (${percent}) ` : null}
            </ValueLabel> */}
          </View>
        </View>
        <View style={{ paddingTop: 2 }}>{icon}</View>
      </Container>
      {children}
    </View>
  );
  return transparent ? (
    main
  ) : (
    <LinearGradient
      colors={[theme['backgroundStartColor'], theme['backgroundEndColor']]}
      start={{ x: 0, y: 0 }}
      end={type === 'coinWallet' ? { x: 1, y: 1 } : { x: 0, y: 0.9 }}
    >
      {main}
    </LinearGradient>
  );
};

BaseWalletHeader.propTypes = {
  headerValue: PropTypes.string.isRequired,
  subHeaderValue: PropTypes.string,
  backupHd: PropTypes.element,
  icon: PropTypes.element.isRequired,
  children: PropTypes.element,
  headerOnPress: PropTypes.func,
  percent: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object.isRequired,
  style: PropTypes.any,
  transparent: PropTypes.bool,
};

BaseWalletHeader.defaultProps = {
  subHeaderValue: null,
  detail: null,
  children: null,
  headerOnPress: null,
  percent: null,
  color: 'white',
  style: {},
  transparent: false,
};

export default withTheme(BaseWalletHeader);
