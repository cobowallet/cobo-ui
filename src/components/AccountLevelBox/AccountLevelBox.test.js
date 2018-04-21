import React from 'react';
import { shallow } from 'enzyme';
import AccountLevelBox from './index';
import { Ionicons } from '../../icons';

describe('AccountLevelBox', () => {
  it('should render AccountLevel Box with check mark', () => {
    const wrapper = shallow(
      <AccountLevelBox
        canPress={false}
        onPress={() => {}}
        selected={false}
        header={'header'}
        styleLevel={'passed'}
        text={{ firstLine: 'first', secondLine: 'second' }}
      />
    );
    expect(wrapper.find(Ionicons).prop('color')).toBe('#00B191');
  });

  it('should render AccountLevel Box with arrow box', () => {
    const wrapper = shallow(
      <AccountLevelBox
        canPress={false}
        onPress={() => {}}
        selected={false}
        header={'header'}
        styleLevel={'next'}
        text={{ firstLine: 'first', secondLine: 'second' }}
      />
    );
    expect(wrapper.find(Ionicons).prop('color')).toBe('#3A5ADB');
  });

  it('should render AccountLevel Box without and icon', () => {
    const wrapper = shallow(
      <AccountLevelBox
        canPress={false}
        onPress={() => {}}
        selected={false}
        header={'header'}
        styleLevel={'future'}
        text={{ firstLine: 'first', secondLine: 'second' }}
      />
    );
    expect(wrapper.find(Ionicons).length).toBe(0);
  });
});
