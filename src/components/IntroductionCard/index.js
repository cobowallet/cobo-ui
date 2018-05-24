import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Tabs from './Tabs';
import Arrow from './Arrow';
import Texts from './Texts';

export default function IntroductionCard(props) {
  const { cloud, hd, selected, switchTab } = props;
  const textObj = {
    cloudTexts: cloud.texts,
    hdTexts: hd.texts,
  };
  const tabs = [
    {
      title: cloud.title,
      subTitle: cloud.subTitle,
      id: cloud.id,
    },
    {
      title: hd.title,
      subTitle: hd.subTitle,
      id: hd.id,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Tabs tabs={tabs} selected={selected} switchTab={switchTab} />
      <Arrow index={selected} />
      <Texts index={selected} textObj={textObj} onScroll={switchTab} />
    </View>
  );
}

IntroductionCard.propTypes = {
  cloud: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,

  hd: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired,
};

IntroductionCard.defaultProps = {
  switchTab: () => {},
};
