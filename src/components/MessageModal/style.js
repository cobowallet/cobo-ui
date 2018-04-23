import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LINE_COLORS } from '../../theme/CBColor';
import { CBModal, CBText } from '../Core';

export const { width, height } = Dimensions.get('window');
export const BORDER_RADIUS = 12;
export const MAX_WIDTH = width - 2 * width * 0.05;
export const MAX_HEIGHT = height - 2 * height * 0.1;

export const BoxModal = styled(CBModal)`
  width: ${MAX_WIDTH};
  max-height: ${MAX_HEIGHT};
  padding-bottom: 0;
  background-color: white;
  align-items: center;
  flex-direction: column;
  border-radius: ${BORDER_RADIUS};
  padding-top: 16;
`;

export const TitleText = styled(CBText)`
  padding-horizontal: 16;
  line-height: 28;
`;

export const MessageContent = styled.ScrollView`
  width: 100%;
  padding-horizontal: 16;
  margin-top: 12;
`;

export const MessageText = styled(CBText)`
  line-height: 22;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  height: 50;
  border-top-color: ${LINE_COLORS.LINE};
  border-top-width: 1;
  width: 100%;
  background-color: transparent;
`;

export const Touchable = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const Line = styled.View`
  background-color: ${LINE_COLORS.LINE};
  height: 100%;
  width: 1;
`;
