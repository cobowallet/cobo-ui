import React from 'react';
import PropTypes from 'prop-types'
import QRCode from 'react-native-qrcode'
import { Image } from 'react-native';
import styled from 'styled-components/native'

import WalletLogo from '../../icons/WalletLogo'
import { CBShadow } from '../Core'
import { FontColors } from '../../theme/CBColor';

const QRContainer = styled(CBShadow)`
  width: ${props => props.size}
  height: ${props => props.size}
  background-color: white;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.View`
  width: ${props => props.size}
  height: ${props => props.size}
  border-radius: ${props => props.size / 2};
  position: absolute;
  top: ${props => props.topLeft}
  left: ${props => props.topLeft}
  background-color: white;
  justify-content: center;
  align-items: center;
`

const Logo = ({ size, logo }) => {
  const styled = { width: size, height: size, borderRadius: size / 2 };

  return typeof logo === 'string' ?
    (<WalletLogo style={ styled } coin={ logo } />)
      : (<Image style={ styled } source={ logo }/>)
}

const DefaultSize = 200;

const CBQRCode = ({ size, code, logo }) => {
  const sizeOfContainer = Math.max(DefaultSize, size);
  const sizeOfQR = sizeOfContainer - 20;
  const sizeOfLogoContainer = sizeOfContainer * 0.2;
  const logoContainerTopLeft = (sizeOfContainer - sizeOfLogoContainer) / 2;
  const sizeOfLogo = sizeOfLogoContainer - 5;

  return (
    <QRContainer size={ sizeOfContainer } >
      <QRCode size={ sizeOfQR } value={ code } />

      {logo && (
        <LogoContainer size={ sizeOfLogoContainer } topLeft={ logoContainerTopLeft }>
          <Logo size={ sizeOfLogo } logo={ logo } />
        </LogoContainer>
      )}

    </QRContainer>
  )
}

CBQRCode.propTypes = {
  size: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([ PropTypes.string, PropTypes.object])
}

CBQRCode.defaultProps = {
  size: DefaultSize
}

export default CBQRCode
