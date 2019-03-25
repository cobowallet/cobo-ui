import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, ContentText } from './style';

function LNBadge({ content, style }) {
  return (
    <View style={style}>
      <ImageBackground
        style={{ width: 77, height: 16 }}
        source={require('./img/asset-ln-badge.png')}
      >
        <ContentText>{content}</ContentText>
      </ImageBackground>
    </View>
  );
}

LNBadge.displayName = 'Lightning Badge';

LNBadge.propTypes = {
  style: PropTypes.any,
};

LNBadge.defaultProps = {
  style: {},
};

export default LNBadge;
