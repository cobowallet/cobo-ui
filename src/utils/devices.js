import { Platform, DeviceInfo, Dimensions } from 'react-native';
import { equals } from 'ramda';

/**
 * 分辨率
 * CGSize iPhoneXScreenSize = CGSizeMake(1125, 2436);
 * CGSize iPhoneXMaxScreenSize = CGSizeMake(1242, 2688);
 * CGSize iPhoneXRScreenSize = CGSizeMake(828, 1792);
 * 尺寸
 * const iPhoneXScreenSize = { width: 375, height: 812 };
 * const iPhoneXMaxScreenSize = { width: 414, height: 896 };
 * const iPhoneXRScreenSize = { width: 414, height: 896 };
 */
const judgeIsIPhoneX = () => {
  if (Platform.OS === 'ios') {
    const { height, width } = Dimensions.get('window');
    const currentScreenSize = { width, height };
    const iPhoneXScreenSize = { width: 375, height: 812 };
    const iPhoneXMaxScreenSize = { width: 414, height: 896 };
    const iPhoneXRScreenSize = { width: 414, height: 896 };
    const isIPhoneXs =
      equals(currentScreenSize, iPhoneXScreenSize) ||
      equals(currentScreenSize, iPhoneXMaxScreenSize) ||
      equals(currentScreenSize, iPhoneXRScreenSize);
    const iphoneX = DeviceInfo.isIPhoneX_deprecated;
    return iphoneX || isIPhoneXs;
  }
  return false;
};

const isIPhoneX = judgeIsIPhoneX();

export default isIPhoneX;
