import React from 'react';
import { View, Button } from 'react-native';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SecretCodePanel from './SecretCodePanel';
import { CBText, CBLabel } from '../Core';

describe('SecretCodePanel', () => {
  it('should render the give component as the Secret Code panel', () => {
    const buttonSpy = sinon.spy();

    const wrapper = shallow(
      <SecretCodePanel
        header={'header'}
        descriptions={[1, 2, 3]}
        body={<View id={'body'} />}
        button={<Button onPress={buttonSpy} title={'test'} />}
      >
        <View id={'children'} />
      </SecretCodePanel>
    );

    expect(wrapper.find('#body').length).toBe(1);
    expect(wrapper.find('#children').length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(CBText).length).toBe(3);
    expect(wrapper.find(CBLabel).length).toBe(1);

    const buttonWrapper = wrapper.find(Button);
    buttonWrapper.props().onPress();

    expect(buttonSpy.called).toBe(true);
  });
});
