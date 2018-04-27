import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Image, View, TouchableOpacity } from 'react-native';
import { CBText } from '../Core';
import Cloud from './img/cloud.png';
import HD from './img/hd.png';
import { zip } from 'ramda';

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
    tabIndex: 0,
  };

  switchTabs = index => {
    this.setState({ tabIndex: index });
  };

  renderTab = ({ icon, title, index, selected }) => {
    const borderStyle = selected ? { borderBottomWidth: 3, borderBottomColor: '#5170EB' } : {};

    return (
      <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.switchTabs(index)}
          style={{ alignItems: 'center', ...borderStyle }}
        >
          <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={icon} />
          <CBText style={{ marginTop: 2, paddingLeft: 3, paddingRight: 3 }} color={'dark'} bold>
            {title}
          </CBText>
        </TouchableOpacity>
      </View>
    );
  };

  renderTabs = ({ titles, selectedIndex }) => (
    <View style={{ flexDirection: 'row' }}>
      {zip(TAB_IMAGES, titles).map(([tabIcon, title], index) =>
        this.renderTab({
          icon: tabIcon,
          title: title,
          index: index,
          selected: selectedIndex == index,
        })
      )}
    </View>
  );

  renderText = ({ text, index, showUnderline }) => {
    const borderStyle = showUnderline ? { borderBottomColor: '#EAEFFE', borderBottomWidth: 1 } : {};
    const textColor = index == 0 ? 'dark' : 'grayLight';

    return (
      <CBText
        key={index}
        style={{ width: '100%', paddingTop: 18, paddingBottom: 18, ...borderStyle }}
        color={textColor}
      >
        {text}
      </CBText>
    );
  };

  renderTexts = ({ texts }) => {
    const shadowStyle = {};

    return (
      <ShadowContainer>
        {texts.map((text, index, array) =>
          this.renderText({ text: text, index: index, showUnderline: index != array.length - 1 })
        )}
      </ShadowContainer>
    );
  };

  render() {
    const { cloud, hd } = this.props;
    const { tabIndex } = this.state;

    const titles = [cloud.title, hd.title];
    const texts = tabIndex == 0 ? cloud.texts : hd.texts;

    return (
      <View style={{ width: '100%' }}>
        {this.renderTabs({ titles: titles, selectedIndex: tabIndex })}
        {this.renderTexts({ texts: texts })}
      </View>
    );
  }
}

IntroductionCard.propTypes = {
  cloud: PropTypes.shape({
    title: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,

  hd: PropTypes.shape({
    title: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default IntroductionCard;
