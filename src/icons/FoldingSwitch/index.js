import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function FoldingSwitch({ style, isCollapsed }) {
  return (
    <Image
      style={style}
      source={
        isCollapsed ? require('./img/arrow-up-fold.png') : require('./img/arrow-down-open.png')
      }
    />
  );
}

FoldingSwitch.propTypes = {
  style: PropTypes.object,
  isCollapsed: PropTypes.bool,
};

FoldingSwitch.defaultProps = {
  style: {},
  isCollapsed: false,
};

export default FoldingSwitch;
