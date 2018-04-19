import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ConfirmPage from './index';

describe('ConfirmPage', () => {
  it('should call success function if user choose the right word', () => {
    const successSpy = sinon.spy();
    const regenerateSpy = sinon.spy();
    const wrapper = shallow(
      <ConfirmPage
        locale={'zh'}
        words={['12', '23', '34']}
        answer={'12'}
        page={1}
        wordIndex={3}
        onSuccess={successSpy}
        regenerateQuestionAndNoise={regenerateSpy}
      />
    );
    // this is the set test case scenario
    wrapper.setState({ clicked: '12' });

    wrapper.instance().onPageClick();

    expect(successSpy.called).toBe(true);
    expect(regenerateSpy.called).toBe(false);
  });

  it('should call regenerate function if user choose the wrong word', () => {
    const successSpy = sinon.spy();
    const regenerateSpy = sinon.spy();
    const wrapper = shallow(
      <ConfirmPage
        locale={'zh'}
        words={['12', '23', '34']}
        answer={'12'}
        page={1}
        wordIndex={3}
        onSuccess={successSpy}
        regenerateQuestionAndNoise={regenerateSpy}
      />
    );

    wrapper.setState({ clicked: '34' });
    wrapper.instance().onPageClick();
    expect(successSpy.called).toBe(false);
    expect(regenerateSpy.called).toBe(true);
  });
});
