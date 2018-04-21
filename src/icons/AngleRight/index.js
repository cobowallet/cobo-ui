import React from 'react';
import { FontColors } from 'CBColors';
import { FontAwesome } from 'CBIcons';

function AngleRight({ style }) {
  return (
    <FontAwesome
      name="angle-right"
      color={FontColors.grayLight}
      size={28}
      style={[{ marginLeft: 10, color: FontColors.grayLight }, style]}
    />
  );
}

export default AngleRight;
