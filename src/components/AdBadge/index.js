import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import AdBadgeTheme from './theme';
import { Container, ContentText } from './style';

function AdBadge({ content, theme, style }) {
  const adTheme = AdBadgeTheme[theme] || AdBadgeTheme.default;
  return (
    <ThemeProvider theme={adTheme}>
      <Container
        style={style}
        colors={adTheme.gradientColors}
        start={adTheme.gradientStart}
        end={adTheme.gradientEnd}
      >
        <ContentText>{content}</ContentText>
      </Container>
    </ThemeProvider>
  );
}

AdBadge.displayName = 'Reward Coin Badge';

AdBadge.propTypes = {
  content: PropTypes.string.isRequired,
  theme: PropTypes.string,
  style: PropTypes.any,
};

AdBadge.defaultProps = {
  theme: 'default',
  style: {},
};

export default AdBadge;
