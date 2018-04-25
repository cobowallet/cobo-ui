import React from 'react';
import { shallow } from 'enzyme';

// This will mutate `react-native`'s require cache with `react-native-mock`'s.
require('react-native-mock/mock');
const AssetCard = require('AssetCard');

describe('AssetCard', () => {
  jest.mock(
    'AssetCard',
    () => {
      return jest.fn(() => 1);
    },
    { virtual: true }
  );

  it('should render asset card on user firist click', () => {
    const walletInfo = {
      coinCode: 'ETH',
      amount: '4.800',
      fiatCurrencyAmount: '5220.96',
      fiatCurrencySymbol: '$',
      defaultOpen: false,
      onPress: () => {},
    };
    const wrapper = shallow(<AssetCard {...walletInfo} />);

    wrapper.instance().onFold();
    wrapper.update();
    expect(wrapper.state().open).toBe(true);
  });
});
