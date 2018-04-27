import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import { Content } from './style';
import CBText from '../Core/CBText/index';
import DoubleArrow from '../../icons/DoubleArrow';
import BannerTheme from './theme';
import BaseBanner from './BaseBanner';

const NoticeBanner = ({ description, onPress, theme, canPress, style }) => {
  return (
    <ThemeProvider theme={BannerTheme[theme]}>
      <BaseBanner
        renderLeftContent={() => (
          <Content>
            <CBText small color={'white'}>
              {description}
            </CBText>
          </Content>
        )}
        renderRightContent={() => <DoubleArrow />}
        canPress={canPress}
        style={style}
        onPress={onPress}
      />
    </ThemeProvider>
  );
};

NoticeBanner.propTypes = {
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  canPress: PropTypes.bool,
  theme: PropTypes.string,
  style: PropTypes.any,
};

NoticeBanner.defaultProps = {
  canPress: true,
  theme: 'default',
  style: {},
};

export default NoticeBanner;
