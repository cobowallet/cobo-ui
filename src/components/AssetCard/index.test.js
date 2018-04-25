import React from 'react';
import { LayoutAnimation, View } from 'react-native';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import AssetCard from './index';

describe('AssetCard', () => {
  let layStub;
  beforeAll(() => {
    layStub = sinon.stub(LayoutAnimation, 'configureNext');
  });

  afterAll(() => {
    layStub.restore();
  });

  it('should render asset card on user first click', () => {
    const walletInfo = {
      coinCode: 'ETH',
      amount: '4.800',
      fiatCurrencyAmount: '5220.96',
      fiatCurrencySymbol: '$',
      defaultOpen: false,
      onPress: () => {},
    };
    const wrapper = shallow(
      <AssetCard {...walletInfo}>
        <View id={'test'} />
      </AssetCard>
    );

    wrapper.instance().onFold();
    wrapper.update();
    expect(wrapper.find('#test').length).toBe(1);
  });
});
