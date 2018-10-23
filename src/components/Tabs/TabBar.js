import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { CBText } from '../../index';
import { default as Colors } from '../../theme/CBColor';

const TabBar = ({ title, isActive, onPress, style }) => (
  <TouchableOpacity activeOpacity={1} onPress={onPress} style={style}>
    <View
      style={{
        minWidth: 80,
        alignItems: 'center',
        paddingBottom: 8,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor: isActive ? Colors.primary : 'transparent',
        borderBottomWidth: 2,
      }}
    >
      <CBText bold color={isActive ? 'dark' : 'grayLight'}>
        {title}
      </CBText>
    </View>
  </TouchableOpacity>
);

TabBar.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

TabBar.defaultProps = {
  isActive: false,
};

export default TabBar;
