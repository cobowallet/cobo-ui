import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import inactiveReward from './img/inactive-reward.png';
import activeReward from './img/active-reward.png';

const REWARD_IMG_PATHS = {
  inactiveReward,
  activeReward,
};

function Reward({ style, type }) {
  return <Image style={style} source={REWARD_IMG_PATHS[type]} />;
}

Reward.propTypes = {
  style: PropTypes.any,
  type: PropTypes.oneOf(['activeReward', 'inactiveReward']),
};

Reward.defaultProps = {
  style: {},
  type: 'activeReward',
};

export default Reward;
