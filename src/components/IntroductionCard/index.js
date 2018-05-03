import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Image, View, TouchableOpacity } from 'react-native';
import { zip } from 'ramda';
import { CBText } from '../Core';
import Cloud from './img/cloud.png';
import HD from './img/hd.png';

const TAB_IMAGES = [Cloud, HD];

const ShadowContainer = styled.View`
  shadow-color: #e5e7f5;
  shadow-offset: 0px 14px;
  shadow-radius: 22;
  elevation: 4;
  background: white;
  border-radius: 3;
  padding-left: 16;
  padding-right: 16;
  padding-top: 3;
  padding-bottom: 3;
  margin-top: 16;
`;

class IntroductionCard extends React.PureComponent {
  state = {
    tab: 'cloud',
  };

  switchTabs = tab => {
    this.props.switchTab(tab);
    this.setState({ tab });
  };

  renderTab = ({ icon, title, subTitle, id, selected }) => {
    const borderStyle = selected
      ? { borderBottomWidth: 3, borderBottomColor: '#5170EB', paddingBottom: 3 }
      : {};

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.switchTabs(id)}
          style={{ alignItems: 'center', ...borderStyle }}
        >
          <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={icon} />
          <CBText style={{ marginTop: 2, paddingLeft: 3, paddingRight: 3 }} color={'dark'} bold>
            {title}
          </CBText>
          <CBText color={'grayLight'} small>
            ({subTitle})
          </CBText>
        </TouchableOpacity>
      </View>
    );
  };

  renderTabs = ({ tabs, selected }) => (
    <View style={{ flexDirection: 'row' }}>
      {zip(TAB_IMAGES, tabs).map(([tabIcon, { title, subTitle, id }]) =>
        this.renderTab({
          icon: tabIcon,
          title,
          subTitle,
          id,
          selected: selected === id,
        })
      )}
    </View>
  );

  renderText = ({ text, index, showUnderline }) => {
    const borderStyle = showUnderline ? { borderBottomColor: '#EAEFFE', borderBottomWidth: 1 } : {};

    return (
      <CBText
        key={index}
        style={{ width: '100%', paddingTop: 18, paddingBottom: 18, ...borderStyle }}
        color={'grayLight'}
      >
        {text}
      </CBText>
    );
  };

  renderTexts = ({ texts }) => {
    return (
      <ShadowContainer>
        {texts.map((text, index, array) =>
          this.renderText({ text, index, showUnderline: index !== array.length - 1 })
        )}
      </ShadowContainer>
    );
  };

  render() {
    const { cloud, hd, selected } = this.props;

    const tab = selected || this.state.tab;

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
    const texts = tab === 'cloud' ? cloud.texts : hd.texts;

    return (
      <View style={{ width: '100%' }}>
        {this.renderTabs({ tabs, selected: tab })}
        {this.renderTexts({ texts })}
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
};

IntroductionCard.defaultProps = {
  switchTab: () => {},
};

export default IntroductionCard;
