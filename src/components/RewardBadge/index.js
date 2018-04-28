import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import RewardBadgeTheme from './theme';
import { Container, ContentText } from './style';

function RewardBadge({ content, theme, style }) {
  return (
    <ThemeProvider theme={RewardBadgeTheme[theme] || RewardBadgeTheme.default}>
      <Container style={style}>
        <ContentText>{content}</ContentText>
      </Container>
    </ThemeProvider>
  );
}

RewardBadge.displayName = 'Reward Coin Badge';

RewardBadge.propTypes = {
  content: PropTypes.string.isRequired,
  theme: PropTypes.string,
  style: PropTypes.any,
};

RewardBadge.defaultProps = {
  theme: 'default',
  style: {},
};

export default RewardBadge;
