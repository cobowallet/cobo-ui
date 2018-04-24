import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { HDWalletHeaderTheme } from '../../theme';
import HDWalletHeader from './HDWalletHeader';
import { AddWallet } from '../../icons';

class AssetWalletHeader extends React.PureComponent {
  state = {
    unitIndex: 0,
  };

  getValue = () => {
    const valueMap = {
      0: this.props.legalTenderValue,
      1: this.props.BTCValue,
      2: '********',
    };

    return valueMap[this.state.unitIndex] || this.props.legalTenderValue;
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
      <TouchableOpacity onPress={this.props.IconPress}>
        <AddWallet />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ThemeProvider theme={HDWalletHeaderTheme[this.props.theme]}>
        <HDWalletHeader
          headerValue={this.getValue()}
          icon={this.renderIcon()}
          headerOnPress={this.onHeaderClick}
          children={this.props.children}
        />
      </ThemeProvider>
    );
  }
}

AssetWalletHeader.propTypes = {
  legalTenderValue: PropTypes.string.isRequired,
  BTCValue: PropTypes.string.isRequired,
  children: PropTypes.element,
  theme: PropTypes.string,
};

AssetWalletHeader.defaultProps = {
  children: null,
  theme: 'default',
};

export default AssetWalletHeader;
