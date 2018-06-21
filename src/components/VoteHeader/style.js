import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { VoteDetailHeader, WalletLogo } from '../../icons';
import { CBText } from '../Core';

export const Container = styled.View`
  background-color: transparent;
  padding-top: 64;
  width: 100%;
  padding-bottom: 36;
  padding-left: 16;
  padding-right: 16;
  align-items: stretch;
`;

export const HeaderContent = styled.View`
  margin-top: 25;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
`;

export const NameText = styled(CBText)`
  color: white;
  font-weight: 800;
  font-size: 28;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro_bold'};
  margin-left: 12;
  margin-bottom: -10;
`;

export const ContactText = styled(CBText)`
  margin-top: 16;
  font-family: ${Platform.OS === 'ios' ? 'DIN Next LT Pro' : 'dinpro_bold'};
  color: rgba(255, 255, 255, 0.8);
  font-size: 20;
  font-weight: 600;
  line-height: 24;
`;

export const DescText = styled(CBText)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 13;
  font-weight: 400;
  margin-top: 4;
  line-height: 18;
`;

const LogoContent = styled.View`
  background-color: white;
  width: 52;
  height: 52;
  border-radius: 26;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(WalletLogo)`
  width: 46;
  height: 46;
  border-radius: 23;
  background-color: white;
`;

const BackgroundContent = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: stretch;
`;

const VoteDetailHeaderImage = styled(VoteDetailHeader)`
  width: 100%;
  height: 100%;
`;

export const renderLogo = (logoUrl, coin) => {
  const hasUrl = logoUrl && logoUrl.length > 0;
  return (
    <LogoContent>
      <Logo
        {...(hasUrl
          ? {
              uri: logoUrl,
            }
          : { coin })}
      />
    </LogoContent>
  );
};

export const renderBackground = url => {
  return (
    <BackgroundContent>
      <VoteDetailHeaderImage uri={url} />
    </BackgroundContent>
  );
};
