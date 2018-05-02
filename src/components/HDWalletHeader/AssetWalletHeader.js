import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { HDWalletHeaderTheme } from '../../theme';
import BaseWalletHeader from './BaseWalletHeader';
import { AddWallet } from '../../icons';

class AssetWalletHeader extends React.PureComponent {
  state = {
    unitIndex: 0,
  };

  getValue = () => {
    const valueMap = {
      0: this.props.fiatCurrencyValue,
      1: this.props.BTCValue,
      2: '********',
    };

    return valueMap[this.state.unitIndex] || this.props.fiatCurrencyValue;
  };

  onHeaderClick = () => {
    if (this.state.unitIndex === 2) {
      this.setState({
        unitIndex: 0,
      });
    } else {
      this.setState({
        unitIndex: this.state.unitIndex + 1,
      });
    }
  };

  renderIcon() {
    return (
      <TouchableOpacity onPress={this.props.addWalletPress}>
        <AddWallet />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ThemeProvider theme={HDWalletHeaderTheme[this.props.theme]}>
        <BaseWalletHeader
          headerValue={this.getValue()}
          icon={this.renderIcon()}
          headerOnPress={this.onHeaderClick}
          children={this.props.children}
          style={this.props.style}
        />
      </ThemeProvider>
    );
  }
}

AssetWalletHeader.propTypes = {
  fiatCurrencyValue: PropTypes.string.isRequired,
  BTCValue: PropTypes.string.isRequired,
  addWalletPress: PropTypes.func.isRequired,
  children: PropTypes.element,
  theme: PropTypes.string,
  style: PropTypes.any,
};

AssetWalletHeader.defaultProps = {
  children: null,
  theme: 'default',
  style: {},
};

export default AssetWalletHeader;
