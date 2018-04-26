import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { Container, Right, Left, ArrowContainer } from './style';
import CBText from '../Core/CBText/index';
import DoubleArrow from '../../icons/DoubleArrow';
import { BannerTheme } from '../../theme';

const Banner = ({ description, onPress, theme }) => {
  const bannerTheme = BannerTheme[theme];
  return (
    <LinearGradient
      colors={[bannerTheme['bannerStartColor'], bannerTheme['bannerEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0 }}
      style={{ opacity: bannerTheme['bannerOpacity'] }}
    >
      <Container onPress={onPress}>
        <Left>
          <CBText small color={'white'}>
            {description}
          </CBText>
        </Left>
        <Right>
          <DoubleArrow />
        </Right>
      </Container>
    </LinearGradient>
  );
};

Banner.propTypes = {
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

Banner.defaultProps = {
  theme: 'default',
};

export default Banner;
