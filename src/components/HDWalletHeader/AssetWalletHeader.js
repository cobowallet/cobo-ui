import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { HDWalletHeaderTheme } from '../../theme';
import HDWalletHeader from './index';
import { AddIcon } from '../Core/Icons';

class AssetWalletHeader extends React.PureComponent {
  state = {
    unitIndex: 0,
  };

  getValue = () => {
    if (this.state.unitIndex === 0) {
      return this.props.legalTenderValue;
    }

    if (this.state.unitIndex === 1) {
      return this.props.BTCValue;
    }

    if (this.state.unitIndex === 2) {
      return '********';
    }
    return this.props.legalTenderValue;
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
        <AddIcon />
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
        />
      </ThemeProvider>
    );
  }
}

export default AssetWalletHeader;
