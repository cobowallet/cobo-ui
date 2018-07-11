import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { CBShadow, CBText } from '../Core';

const MainArea = styled.View`
  flex-direction: column;
  margin-left: 12;
  flex-wrap: wrap;
  flex: 1;
`;

const ShadowContainer = styled(CBShadow)`
  flex-direction: row;
  padding-horizontal: 16;
  padding-vertical: 16;
  background-color: white;
  border-radius: 3;
`;

function WalletAddonItem({ renderIcon, title, subTitle, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[{ marginTop: 20 }, style]}>
      <ShadowContainer style={{ shadowColor: '#e5e7f5', shadowOffset: { width: 1, height: 1 } }}>
        {renderIcon()}
        <MainArea>
          <CBText superBold color={'dark'} style={{ marginBottom: 5 }}>
            {title}
          </CBText>
          <CBText>{subTitle}</CBText>
        </MainArea>
      </ShadowContainer>
    </TouchableOpacity>
  );
}

export default WalletAddonItem;
