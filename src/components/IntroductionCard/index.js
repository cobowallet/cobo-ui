import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Image, View, TouchableOpacity } from 'react-native';
import { CBText } from '../Core';
import Cloud from './img/cloud.png';
import HD from './img/hd.png';
import { zip } from 'ramda';

class IntroductionCard extends React.Component {
  tabs = [Cloud, HD];

  state = {
    tabIndex: 0,
  };

  switchTabs = index => {
    if (this.state.tabIndex === index) {
      return;
    }

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
      {zip(this.tabs, titles).map(([tabIcon, title], index) =>
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
    const shadowStyle = {
      shadowColor: '#E5E7F5',
      shadowOffset: { width: 0, height: 14 },
      shadowRadius: 22,
      elevation: 4,
    };

    return (
      <View
        style={{
          ...shadowStyle,
          backgroundColor: 'white',
          borderRadius: 3,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 3,
          paddingBottom: 3,
          marginTop: 16,
        }}
      >
        {texts.map((text, index, array) =>
          this.renderText({ text: text, index: index, showUnderline: index != array.length - 1 })
        )}
      </View>
    );
  };

  render() {
    const { cloud, hd } = this.props;

    const Tabs = this.renderTabs;
    const Texts = this.renderTexts;

    return (
      <View style={{ width: '100%' }}>
        <Tabs titles={[cloud.title, hd.title]} selectedIndex={this.state.tabIndex} />
        <Texts texts={this.state.tabIndex == 0 ? cloud.texts : hd.texts} />
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
