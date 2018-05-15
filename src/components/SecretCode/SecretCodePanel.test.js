import React from 'react';
import { View, Button } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { PureSecretCodePanel } from './SecretCodePanel';
import { CBText, CBLabel, CBButton } from '../Core';

describe('SecretCodePanel', () => {
  it('should render the child component as the Secret Code panel', () => {
    const buttonSpy = sinon.spy();

    const wrapper = shallow(
      <PureSecretCodePanel
        header={'header'}
        descriptions={[1, 2, 3]}
        body={<View id={'body'} />}
        text={'test'}
        onPress={() => {}}
        theme={{}}
      >
        <View id={'children'} />
      </PureSecretCodePanel>
    );
    expect(wrapper.find('#body').length).toBe(1);
    expect(wrapper.find('#children').length).toBe(1);
    expect(wrapper.find(CBText).length).toBe(3);
    expect(wrapper.find(CBLabel).length).toBe(1);
  });

  it('should render the button component as the default child in the Secret Code panel', () => {
    const buttonSpy = sinon.spy();

    const wrapper = shallow(
      <PureSecretCodePanel
        header={'header'}
        descriptions={[1, 2, 3]}
        body={<View id={'body'} />}
        text={'test'}
        onPress={() => {}}
        theme={{}}
      />
    );
    expect(wrapper.find('#body').length).toBe(1);
    expect(wrapper.find(CBButton).length).toBe(1);
    expect(wrapper.find(CBText).length).toBe(3);
    expect(wrapper.find(CBLabel).length).toBe(1);
  });
});
