import React from 'react';
import PropTypes from 'prop-types';
import { remove, equals, insert } from 'ramda';
import BackupPanel from './BackupPanel';
import languages from '../../../languages';
import { shuffle } from '../codeHelper';

class BackupPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedWords: [],
      unSelectedWords: shuffle(props.codes).map(code => code.value),
    };
  }

  onUnSelectedWord = (word, index) => () => {
    const { unSelectedWords, selectedWords } = this.state;
    this.setState({
      unSelectedWords: insert(unSelectedWords.length, word, unSelectedWords),
      selectedWords: remove(index, 1, selectedWords),
    });
  };

  onSelectedWord = (word, index) => () => {
    const { unSelectedWords, selectedWords } = this.state;
    this.setState({
      unSelectedWords: remove(index, 1, unSelectedWords),
      selectedWords: insert(selectedWords.length, word, selectedWords),
    });
  };

  onFinish = () => {
    const { codes, onShowAlert, onSuccess } = this.props;
    const { selectedWords } = this.state;
    if (equals(selectedWords, codes.map(code => code.value))) {
      onSuccess();
    } else {
      const backupPageInfo = this.getHintInfo();
      if (onShowAlert) {
        onShowAlert('error', backupPageInfo.error);
      }
      this.setState({
        selectedWords: [],
        unSelectedWords: shuffle(codes).map(code => code.value),
      });
    }
  };

  getHintInfo = () => {
    return languages(this.props.locale).SecretCode.backupPage;
  };

  render() {
    const backupPageInfo = this.getHintInfo();
    return (
      <BackupPanel
        style={this.props.style}
        buttonOnPress={this.onFinish}
        buttonTitle={backupPageInfo.finish}
        descriptions={backupPageInfo.descriptions}
        header={backupPageInfo.header}
        selectedWords={this.state.selectedWords}
        onUnSelectedWord={this.onUnSelectedWord}
        unSelectedWords={this.state.unSelectedWords}
        onSelectedWord={this.onSelectedWord}
        disabled={this.state.selectedWords.length !== this.props.codes.length}
      />
    );
  }
}

BackupPage.propTypes = {
  locale: PropTypes.string.isRequired,
  codes: PropTypes.array.isRequired,
  style: PropTypes.any,
  onSuccess: PropTypes.func,
  onShowAlert: PropTypes.func,
};
export default BackupPage;
