import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { update } from 'ramda';
import SecretCodePanel from '../SecretCode/SecretCodePanel';
import { lang } from './lang';
import CodeTable from './codeInputTable';
import { secretCodeTheme } from '../../theme';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 50;
`;

const getBody = (words, onInputChange) => (
  <Container>
    <CodeTable codes={words} onInputChange={onInputChange} />
  </Container>
);

class MnemonicImporter extends PureComponent {
  state = {
    words: new Array(this.props.wordsNumber)
      .fill()
      .map((each, index) => ({ index: index + 1, value: undefined })),
  };

  onInputChange = (index, text) => {
    const newState = update(index - 1, { index, value: text }, this.state.words);
    this.setState({
      words: newState,
    });
    console.log(this.state.words);
  };

  render() {
    const importPageSetting = lang[this.props.locale].importPage;
    return (
      <ThemeProvider theme={secretCodeTheme[this.props.theme] || secretCodeTheme.default}>
        <SecretCodePanel
          header={importPageSetting.header}
          descriptions={importPageSetting.descriptions}
          body={getBody(this.state.words, this.onInputChange)}
          buttonTitle={importPageSetting.button}
          buttonOnPress={() => {}}
          style={this.props.style}
        />
      </ThemeProvider>
    );
  }
}

MnemonicImporter.propTypes = {
  locale: PropTypes.string.isRequired,
  codes: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default MnemonicImporter;
