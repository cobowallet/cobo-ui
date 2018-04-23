import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#6E93E9',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    elevation: 15,
  },
});

export default function Shadow({ children, style }) {
  return <View style={[styles.shadow, style]}>{children}</View>;
}
