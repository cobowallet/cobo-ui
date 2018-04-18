import React from 'react';
import { shallow } from 'enzyme';
import SecretCode from './index';

describe('SecretCode', () => {
  it('should set state based on props', () => {
    const wrapper = shallow(<SecretCode locale={'zh'} secretWords={['hello', 'world']} />, {
      disableLifecycleMethods: true,
    });

    wrapper.setProps({ secretWords: ['hello', 'world'] });
    expect(wrapper.state().secretWords).toEqual([
      { index: 1, value: 'hello' },
      { index: 2, value: 'world' },
    ]);
    expect(wrapper.state().questionWordsAndNoise.length).toBe(2);
  });

  it('should reset question words', () => {
    const wrapper = shallow(<SecretCode locale={'zh'} secretWords={['hello', 'world']} />, {
      disableLifecycleMethods: true,
    });
    wrapper.setProps({ secretWords: ['hello', 'world'] });
    wrapper.setState({ activeIndex: 3 });
    wrapper.instance().regenerateQuestionAndNoise();
    expect(wrapper.state().activeIndex).toBe(0);
  });
});
