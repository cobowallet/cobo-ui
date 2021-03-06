import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { update, equals } from 'ramda';
import SecretCodePanel from '../SecretCode/SecretCodePanel';
import languages from '../../languages';
import CodeInputTable from './codeInputTable';
import { secretCodeTheme } from '../../theme';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 50;
`;

const getBody = (words, onInputChange, focusedId, onKeyPress) => (
  <Container>
    <CodeInputTable
      codes={words}
      onInputChange={onInputChange}
      focusedId={focusedId}
      onKeyPress={onKeyPress}
    />
  </Container>
);

class MnemonicImporter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: new Array(props.wordsNumber)
        .fill()
        .map((each, index) => ({ index: index + 1, value: undefined })),
      focusedId: props.initialFocusId || 1, // 键盘初始不希望弹起时，可设置initialFocusId=-1
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.words &&
      this.props.words.length > 0 &&
      !equals(prevProps.words, this.props.words)
    ) {
      this.updateWords();
    }
  }

  updateWords = () => {
    this.setState({
      words: this.props.words.map((each, index) => ({ index: index + 1, value: each })),
    });
  };

  onInputChange = (index, text) => {
    const newState = update(index - 1, { index, value: text.trim() }, this.state.words);
    this.setState({
      words: newState,
    });
  };

  setFocusedId = (index, event) => {
    if (event.key === ' ') {
      this.setState({
        focusedId: index + 1,
      });
    }
  };

  render() {
    const importPageSetting = languages(this.props.locale).MnemonicImporter.importPage;
    return (
      <ThemeProvider theme={secretCodeTheme[this.props.theme] || secretCodeTheme.default}>
        <SecretCodePanel
          header={importPageSetting.header}
          descriptions={importPageSetting.descriptions}
          body={getBody(
            this.state.words,
            this.onInputChange,
            this.state.focusedId,
            this.setFocusedId
          )}
          buttonTitle={importPageSetting.button}
          buttonOnPress={() => this.props.onNextPage(this.state.words)}
          style={this.props.style}
        >
          {this.props.children}
        </SecretCodePanel>
      </ThemeProvider>
    );
  }
}

MnemonicImporter.propTypes = {
  theme: PropTypes.string,
  locale: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired,
  wordsNumber: PropTypes.number.isRequired,
  style: PropTypes.object,
  onNextPage: PropTypes.func.isRequired,
};

MnemonicImporter.defaultProps = {
  theme: 'dark',
};

export default MnemonicImporter;
