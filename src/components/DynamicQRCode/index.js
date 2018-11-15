import React from 'react';
import PropTypes from 'prop-types';
import { qrCode } from 'cobo-wallet-utils';
import CBQRCode from '../QRCode';

const { splitData } = qrCode;

class DynamicQRCode extends React.PureComponent {
  state = {
    index: 0,
    codes: splitData(this.props.words, this.props.codeCapacity),
  };

  componentDidMount() {
    this.clock = setInterval(() => {
      if (this.state.index >= this.state.codes.length - 1) {
        this.setState({
          index: 0,
        });
      } else {
        this.setState({
          index: this.state.index + 1,
        });
      }
    }, this.props.refreshSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <CBQRCode
        size={this.props.size}
        code={JSON.stringify(this.state.codes[this.state.index])}
        style={this.props.style}
      />
    );
  }
}

DynamicQRCode.propTypes = {
  words: PropTypes.string.isRequired,
  refreshSpeed: PropTypes.number,
  size: PropTypes.number,
  codeCapacity: PropTypes.number,
};

DynamicQRCode.defaultProps = {
  refreshSpeed: 800,
  size: 220,
  codeCapacity: 100,
};

export default DynamicQRCode;
