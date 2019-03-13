import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import { ScrollView, Dimensions } from 'react-native';
import { equals } from 'ramda';
import FrontPage from './FrontPage';
import CodePage from './CodePage';
import BackupPage from './BackupPage';
import SecretModal from './SecretModal';
import languages from '../../languages';
import { transformSecretCodeFormat, generateQuestionWordsAndNoise } from './codeHelper';
import { secretCodeTheme } from '../../theme';

const { width } = Dimensions.get('window');

class SecretCode extends Component {
  constructor(props) {
    super(props);
    const secretWords = transformSecretCodeFormat(this.props.secretWords);
    this.state = {
      isModalOpen: false,
      activeIndex: 0,
      secretWords,
      questionWordsAndNoise: generateQuestionWordsAndNoise(secretWords, this.props.questionNumber),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex !== this.state.activeIndex) {
      const scrolledX = this.state.activeIndex * width;
      this.scrollView.scrollTo({ x: scrolledX, y: 0, animated: true });
    }
    if (!equals(prevProps.secretWords, this.props.secretWords)) {
      const secretWords = transformSecretCodeFormat(this.props.secretWords);
      this.setState({
        secretWords,
        questionWordsAndNoise: generateQuestionWordsAndNoise(
          secretWords,
          this.props.questionNumber
        ),
      });
    }
  }

  goToCodePage = () => {
    this.setState({
      isModalOpen: true,
      activeIndex: 1,
    });
    this.props.onTrackAction('HD_CREATE_BACKUP_NOW');
  };

  goToBackupPage = num => () => {
    this.setState({
      activeIndex: num,
    });
    this.props.onTrackAction('HD_CREATE_BACKUP_NEXTSTEP', { step: num });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const modalSetting = languages(this.props.locale).SecretCode.modal;
    return (
      <ThemeProvider theme={secretCodeTheme[this.props.theme] || secretCodeTheme.default}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
        >
          <FrontPage
            locale={this.props.locale}
            goToCodePage={this.goToCodePage}
            style={this.props.style}
            onCancel={this.props.onCancel}
          />
          <CodePage
            locale={this.props.locale}
            codes={this.state.secretWords}
            goToConfirmOne={this.goToBackupPage(2)}
            style={this.props.style}
          />
          <BackupPage
            locale={this.props.locale}
            codes={this.state.secretWords}
            style={this.props.style}
            onSuccess={this.props.onSuccess}
            onShowAlert={this.props.onShowAlert}
          />
          <SecretModal
            isModalOpen={this.state.isModalOpen}
            header={modalSetting.header}
            description={modalSetting.description}
            button={modalSetting.button}
            onPress={this.closeModal}
          />
        </ScrollView>
      </ThemeProvider>
    );
  }
}

SecretCode.propTypes = {
  locale: PropTypes.string,
  secretWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func,
  onFail: PropTypes.func,
  onTrackAction: PropTypes.func,
  theme: PropTypes.string,
  questionNumber: PropTypes.number,
  style: PropTypes.object,
  onShowAlert: PropTypes.func,
};

SecretCode.defaultProps = {
  locale: 'zh',
  onSuccess: () => {},
  onCancel: () => {},
  onFail: () => {},
  onTrackAction: () => {},
  theme: 'dark',
  questionNumber: 2,
  style: {},
  onShowAlert: () => null,
};

export default SecretCode;
