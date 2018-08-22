import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import ButtonGroupTheme from './theme';
import { Container, renderButtons } from './style';

function ButtonGroup({ buttons, theme, style }) {
  return (
    <ThemeProvider theme={ButtonGroupTheme[theme] || ButtonGroupTheme.default}>
      <Container style={style}>{renderButtons(buttons)}</Container>
    </ThemeProvider>
  );
}

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      canPress: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      titleColor: PropTypes.string,
      renderImage: PropTypes.func,
    })
  ).isRequired,
  theme: PropTypes.string,
  style: PropTypes.any,
};

ButtonGroup.defaultProps = {
  theme: 'default',
  style: {},
};

export default ButtonGroup;
