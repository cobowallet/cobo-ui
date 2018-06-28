import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText } from '../Core';

import { CoinContainer, CoinInfo, Button, Balance, RewardMode, renderLogo } from './style';

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
      {renderLogo(coinCode)}
      {isOpen ? (
        <View style={{ flex: 1 }}>
          <CoinInfo>
            <CBText superBold style={{ marginBottom: 7 }}>
              {displayCode || coinCode}
            </CBText>
            <Balance
              style={{
                textShadowOffset: { width: 0, height: 3 },
                textShadowRadius: 6,
                textShadowColor: 'rgba(75, 111, 255, 0.25)',
              }}
            >
              {earned}
            </Balance>
          </CoinInfo>
          <CoinInfo style={{ marginTop: -3 }}>
            <CBText small superBold color="blue">
              {slogan}
            </CBText>
            <RewardMode>
              {displayCode || coinCode} {earnedText}
            </RewardMode>
          </CoinInfo>
        </View>
      ) : (
        <CoinInfo style={{ flex: 1 }}>
          <View>
            <CBText superBold style={{ marginBottom: 7 }}>
              {displayCode || coinCode}
            </CBText>
            <CBText small superBold color="blue">
              {slogan}
            </CBText>
          </View>
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
        </CoinInfo>
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
