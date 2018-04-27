import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import CBText from '../Core/CBText/index';
import BannerTheme from './theme';
import BaseBanner from './BaseBanner';
import { Button, Content } from './style';

const RewardBanner = ({
  balanceValue,
  totalRevenueValue,
  dateValue,
  transferTitle,
  onTransferPress,
  theme,
  style,
}) => {
  return (
    <ThemeProvider theme={BannerTheme[theme]}>
      <BaseBanner
        renderLeftContent={() => (
          <Content>
            <CBText small color={'white'}>
              {balanceValue}
            </CBText>
            <CBText small color={'white'} style={{ marginTop: 4 }}>
              {totalRevenueValue}
            </CBText>
            <CBText small style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: 4 }}>
              {dateValue}
            </CBText>
          </Content>
        )}
        renderRightContent={() => (
          <Button onPress={onTransferPress}>
            <CBText small color={'white'}>
              {transferTitle}
            </CBText>
          </Button>
        )}
        canPress={false}
        style={style}
      />
    </ThemeProvider>
  );
};

RewardBanner.propTypes = {
  balanceValue: PropTypes.string.isRequired,
  totalRevenueValue: PropTypes.string.isRequired,
  dateValue: PropTypes.string.isRequired,
  transferTitle: PropTypes.string.isRequired,
  onTransferPress: PropTypes.func.isRequired,
  theme: PropTypes.string,
  style: PropTypes.any,
};

RewardBanner.defaultProps = {
  theme: 'default',
  style: {},
};

export default RewardBanner;
