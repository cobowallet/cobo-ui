import React from 'react';
import PropTypes from 'prop-types';
import CBQRCode from '../QRCode';

const generateCodes = (codes, codeCapacity) => {
  const codeList = codes.match(new RegExp(regexString(codeCapacity), 'g'));
  const codeLength = codeList.length;
  return codeList.map((code, index) => ({
    total: codeLength,
    index,
    value: code,
  }));
};

const regexString = MaxStringLength => `.{1,${MaxStringLength}}`;

class DynamicQRCode extends React.PureComponent {
  state = {
    index: 0,
    codes: generateCodes(this.props.words, this.props.codeCapacity),
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
      <CBQRCode size={this.props.size} code={JSON.stringify(this.state.codes[this.state.index])} />
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
  refreshSpeed: 500,
  size: 220,
  codeCapacity: 100,
};

export default DynamicQRCode;
