import React from 'react';
import { shallow } from 'enzyme';
import SecretCode from './index';
import ConfirmPage from './ConfirmPage';

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

  it('should render right number of confirm page', () => {
    const mockSuccess = () => {};
    const wrapper = shallow(
      <SecretCode
        locale={'zh'}
        secretWords={['hello', 'world']}
        questionNumber={3}
        onSuccess={mockSuccess}
      />
    );

    expect(wrapper.find(ConfirmPage).length).toBe(3);
    expect(
      wrapper
        .find(ConfirmPage)
        .last()
        .props().page
    ).toBe('Last');
    expect(
      wrapper
        .find(ConfirmPage)
        .last()
        .props().onSuccess
    ).toBe(mockSuccess);
  });

  it('should render default number (2) of confirm page if not given', () => {
    const mockSuccess = () => {};
    const wrapper = shallow(
      <SecretCode locale={'zh'} secretWords={['hello', 'world']} onSuccess={mockSuccess} />
    );

    expect(wrapper.find(ConfirmPage).length).toBe(2);
  });
});
