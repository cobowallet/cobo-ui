import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { configure, getStorybookUI, addDecorator } from '@storybook/react-native';
import doc from 'storybook-addon-docgen';
import { loadStories } from './storybook/storyLoader';

global.STORYBOOK_REACT_CLASSES = {};

// center all storeis
addDecorator(doc );

//https://github.com/facebook/react-native/issues/18175
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

// import stories
configure(() => {
  loadStories();
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('ui', () => StorybookUIHMRRoot);
