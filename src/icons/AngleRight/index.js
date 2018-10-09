import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AngleRight({ style }) {
  return (
    <FontAwesome
      name="angle-right"
      size={28}
      style={[{ marginLeft: 10, color: '#8F95AA' }, style]}
    />
  );
}

export default AngleRight;
