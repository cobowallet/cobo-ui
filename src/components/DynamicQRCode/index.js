import React from 'react';
import CBQRCode from '../QRCode';

const MaxStringLength = 2;
const defaultSpeed = 300;

const regexString = `.{1,${MaxStringLength}}`;

const generateCodes = codes => {
  const codeList = codes.match(new RegExp(regexString, 'g'));
  const codeLength = codes.length;
  return codeList.map((code, index) => ({
    total: codeLength,
    index,
    value: code,
  }));
};

class DynamicQRCode extends React.PureComponent {
  state = {
    index: 0,
    codes: generateCodes(this.props.words),
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
    }, defaultSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return <CBQRCode size={220} code={JSON.stringify(this.state.codes[this.state.index])} />;
  }
}

export default DynamicQRCode;
