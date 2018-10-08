import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText } from '../Core';

import { CoinContainer, CoinInfo, Button, Balance, RewardMode, renderLogo } from './style';

export default function RewardCoinCard({
  isOpen,
  coinCode,
  logoUrl,
  name,
  displayCode,
  savingsRewardCoin,
  slogan,
  earned,
  earnedText,
  buttonText,
  buttonDisabled,
  onButtonPress,
}) {
  return (
    <CoinContainer>
      {renderLogo(coinCode, logoUrl)}
      {isOpen ? (
        <View style={{ flex: 1 }}>
          <CoinInfo>
            <CBText superBold style={{ marginBottom: 7 }}>
              {name || displayCode || coinCode}
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
              {savingsRewardCoin || displayCode || coinCode} {earnedText}
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
          <TouchableOpacity
            onPress={() => {
              return buttonDisabled ? null : onButtonPress();
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={buttonDisabled ? ['#EEF0F3', '#EEF0F3'] : ['#5555FF', '#8702F1']}
              style={{ borderRadius: 16.5 }}
            >
              <Button>
                <CBText superBold small color={buttonDisabled ? 'grayLight' : 'white'}>
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
  logoUrl: PropTypes.string,
  name: PropTypes.string,
  displayCode: PropTypes.string.isRequired,
  savingsRewardCoin: PropTypes.string,
  slogan: PropTypes.string.isRequired,
  earned: PropTypes.string.isRequired,
  earnedText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool,
  onButtonPress: PropTypes.func.isRequired,
};
