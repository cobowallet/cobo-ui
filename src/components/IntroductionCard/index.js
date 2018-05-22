import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Tabs from './Tabs';
import Arrow from './Arrow';
import Texts from './Texts';

class IntroductionCard extends React.PureComponent {
  render() {
    const { cloud, hd, selected } = this.props;
    const texts = selected === 'cloud' ? cloud.texts : hd.texts;
    const left = selected === 'cloud' ? 0 : 0.5;
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
      <View style={{ width: '100%' }}>
        <Tabs tabs={tabs} selected={selected} switchTab={this.props.switchTab} />
        <Arrow left={left} />
        <Texts texts={texts} />
      </View>
    );
  }
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
  switchTab: PropTypes.func.isRequired,
};

IntroductionCard.defaultProps = {
  switchTab: () => {},
};

export default IntroductionCard;
