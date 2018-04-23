import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import QRCode from 'react-native-qrcode'
import { FontColors } from '../../theme/CBColor';
import WalletLogo from '../../icons/WalletLogo'
import CoinLogos from '../../icons/CoinLogos';
import { Image } from 'react-native';

const QRContainer = styled.View`
  width: ${prop => prop.size}
  height: ${prop => prop.size}
  background-color: white;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.View`
  width: ${prop => prop.size}
  height: ${prop => prop.size}
  border-radius: ${prop => prop.size / 2};
  top: ${prop => prop.marginOf}
  left: ${prop => prop.marginOf}
  background-color: white;
  position: absolute;
  justify-content: center;
  align-items: center;
`

const Logo = ({ size, logo }) => {
  return typeof logo === 'string' && CoinLogos[logo] ?
    (<WalletLogo style={{ width: size, height: size }} coin={ logo } />)
      : (<Image style={{ width: size, height: size, borderRadius: size / 2 }} source={ logo }/>)
}

const ShadowStyle = {
  shadowColor: FontColors.grayLight,
  shadowOffset: { width: 3, height: 3 },
  shadowRadius: 5,
  shadowOpacity: 0.3,
  elevation: 15,
};

const DefaultSize = 200;

const CBQRCode = ({ size, code, logo }) => {
  const sizeOfContainer = Math.max(DefaultSize, size);
  const sizeOfQR = sizeOfContainer - 20;
  const sizeOfLogoContainer = sizeOfContainer * 0.2;
  const logoContainerMargin = (sizeOfContainer - sizeOfLogoContainer) / 2;
  const sizeOfLogo = sizeOfLogoContainer - 5;

  return (
    <QRContainer style={{ ...ShadowStyle }} size={ sizeOfContainer }>
      <QRCode size={ sizeOfQR } value={ code } />

      {logo && (
        <LogoContainer size={ sizeOfLogoContainer } marginOf={ logoContainerMargin }>
          <Logo size={ sizeOfLogo } logo={ logo } />
        </LogoContainer>
      )}

    </QRContainer>
  )
}

CBQRCode.propTypes = {
  size: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  logo: PropTypes.object
}

CBQRCode.defaultProps = {
  size: DefaultSize
}

export default CBQRCode
