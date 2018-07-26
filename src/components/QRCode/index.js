import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import { WalletLogo } from '../../icons';
import { CBShadow } from '../Core';

const QRContainer = styled(CBShadow)`
  width: ${props => props.size};
  aspect-ratio: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const CircleLogo = styled.View`
  width: ${props => props.size};
  aspect-ratio: 1;
  border-radius: ${props => props.size / 2};
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const LogoLayer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const Logo = ({ size, logo }) => {
  const styled = { width: size, height: size, borderRadius: size / 2 };

  return typeof logo === 'string' ? (
    <WalletLogo style={styled} coin={logo} />
  ) : (
    <Image style={styled} source={logo} />
  );
};

const CBQRCode = ({ size, spaceWidth, logoSize, logoSpaceWidth, code, logo, style }) => {
  return (
    <QRContainer size={size} style={style}>
      <QRCode size={Math.max(0, size - spaceWidth)} value={code} />

      {logo && (
        <LogoLayer>
          <CircleLogo size={logoSize}>
            <Logo size={Math.max(0, logoSize - logoSpaceWidth)} logo={logo} />
          </CircleLogo>
        </LogoLayer>
      )}
    </QRContainer>
  );
};

CBQRCode.propTypes = {
  size: PropTypes.number.isRequired,
  spaceWidth: PropTypes.number.isRequired,
  logoSize: PropTypes.number.isRequired,
  logoSpaceWidth: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([PropTypes.string, Image.propTypes.source]),
};

CBQRCode.defaultProps = {
  size: 200,
  logoSize: 40,
  spaceWidth: 20,
  logoSpaceWidth: 5,
};

export default CBQRCode;
