import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText } from '../Core';
import coins from '../../icons/CoinLogos';

import { CoinContainer, CoinInfo, CoinLogo, Button, Balance, RewardMode } from './style';

export default function RewardCoinCard({
  isOpen,
  coinCode,
  displayCode,
  slogan,
  earned,
  earnedText,
  buttonText,
  onButtonPress,
}) {
  return (
    <CoinContainer>
      <CoinInfo>
        <CoinLogo source={coins[coinCode]} />
        <View>
          <CBText superBold style={{ marginBottom: 7 }}>
            {displayCode || coinCode}
          </CBText>
          <CBText small superBold color="blue">
            {slogan}
          </CBText>
        </View>
      </CoinInfo>
      {isOpen ? (
        <View>
          <Balance
            style={{
              textShadowOffset: { width: 0, height: 3 },
              textShadowRadius: 6,
              textShadowColor: 'rgba(75, 111, 255, 0.25)',
            }}
          >
            {earned}
          </Balance>
          <RewardMode>
            {displayCode || coinCode} {earnedText}
          </RewardMode>
        </View>
      ) : (
        <TouchableOpacity onPress={onButtonPress}>
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={['#5555FF', '#8702F1']}
            style={{ borderRadius: 16.5 }}
          >
            <Button>
              <CBText superBold small color="white">
                {buttonText}
              </CBText>
            </Button>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </CoinContainer>
  );
}

RewardCoinCard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  coinCode: PropTypes.string.isRequired,
  displayCode: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  earned: PropTypes.string.isRequired,
  earnedText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};
