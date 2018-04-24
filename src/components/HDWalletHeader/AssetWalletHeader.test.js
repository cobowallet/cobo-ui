import React from 'react';
import { shallow } from 'enzyme';
import AssetWalletHeader from './AssetWalletHeader';
import HDWalletHeader from './HDWalletHeader';

describe('AssetWalletHeader', () => {
  it('should render btc value on user first click ', () => {
    const wrapper = shallow(
      <AssetWalletHeader legalTenderValue={'valueOne'} BTCValue={'valueTwo'} />
    );

    wrapper.instance().onHeaderClick();
    wrapper.update();
    const HDwrapper = wrapper.find(HDWalletHeader);
    expect(HDwrapper.props().headerValue).toBe('valueTwo');
  });

  it('should render **** on user second click ', () => {
    const wrapper = shallow(
      <AssetWalletHeader legalTenderValue={'valueOne'} BTCValue={'valueTwo'} />
    );

    wrapper.instance().onHeaderClick();
    wrapper.instance().onHeaderClick();
    wrapper.update();
    const HDwrapper = wrapper.find(HDWalletHeader);
    expect(HDwrapper.props().headerValue).toBe('********');
  });

  it('should render render value on user third click ', () => {
    const wrapper = shallow(
      <AssetWalletHeader legalTenderValue={'valueOne'} BTCValue={'valueTwo'} />
    );

    wrapper.instance().onHeaderClick();
    wrapper.instance().onHeaderClick();
    wrapper.instance().onHeaderClick();
    wrapper.update();
    const HDwrapper = wrapper.find(HDWalletHeader);
    expect(HDwrapper.props().headerValue).toBe('valueOne');
  });
});
