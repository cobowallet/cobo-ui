import React from 'react';
import { FontAwesome } from '../index';

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
