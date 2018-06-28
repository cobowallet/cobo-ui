import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { CBShadow } from '../Core';
import { LINE_COLORS, FontColors } from '../../theme/CBColor';

export const Container = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 3;
  background-color: #fff;
  min-height: 135;
`;

export const ShadowContainer = styled(CBShadow)`
  shadow-color: #dfe2ea;
  elevation: 1;
`;

export const LeftSide = styled(LinearGradient)`
  height: 150;
  width: 4;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const Rules = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20;
  padding-vertical: 7;
`;

export const Cycle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ReadMore = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-vertical: 10;
`;

export const PaymentDay = styled.Text`
  font-size: 12;
  font-weight: 600;
  color: ${FontColors.grayLight};
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border-top-color: ${LINE_COLORS.LINE};
  border-top-width: 1;
  padding-horizontal: 20;
  padding-vertical: 12;
`;

export const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 23;
  padding-vertical: 8;
`;

export const TagDot = styled.View`
  width: 6;
  height: 6;
  background-color: #dbdde6;
  border-radius: 3;
  margin-right: 4;
`;

export const TagText = styled.Text`
  font-size: 11;
  color: ${props => (props.canPress ? FontColors.blue : FontColors.grayLight)};
  font-weight: ${props => (props.canPress ? 800 : 600)};
`;

export const RuleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 8;
`;
