import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Container, Right, Left } from './style';

const BaseBanner = ({ renderLeftContent, renderRightContent, onPress, theme, canPress, style }) => {
  return (
    <LinearGradient
      colors={[theme['bannerStartColor'], theme['bannerEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0 }}
      style={[{ opacity: theme['bannerOpacity'] }, style]}
    >
      <Container onPress={onPress} disabled={!canPress}>
        <Left>{renderLeftContent && renderLeftContent()}</Left>
        <Right>{renderRightContent && renderRightContent()}</Right>
      </Container>
    </LinearGradient>
  );
};

BaseBanner.propTypes = {
  renderLeftContent: PropTypes.func.isRequired,
  renderRightContent: PropTypes.func.isRequired,
  canPress: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

BaseBanner.defaultProps = {
  onPress: () => {},
  theme: 'default',
  style: {},
};

export default withTheme(BaseBanner);
