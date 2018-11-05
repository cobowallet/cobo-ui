import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import { ScrollView, Dimensions } from 'react-native';
import { range } from 'ramda';
import FrontPage from './FrontPage';
import CodePage from './CodePage';
import ConfirmPage from './ConfirmPage';
import SecretModal from './SecretModal';
import { lang } from './lang';
import { transformSecretCodeFormat, generateQuestionWordsAndNoise } from './codeHelper';
import { secretCodeTheme } from '../../theme';

const { width } = Dimensions.get('window');

class SecretCode extends Component {
  state = {
    isModalOpen: false,
    activeIndex: 0,
    secretWords: [],
    questionWordsAndNoise: [],
  };

  componentWillReceiveProps(nextProps) {
    const secretWords = transformSecretCodeFormat(nextProps.secretWords);
    this.setState({
      secretWords,
      questionWordsAndNoise: generateQuestionWordsAndNoise(secretWords, this.props.questionNumber),
    });
  }

  componentDidUpdate() {
    const scrolledX = this.state.activeIndex * width;
    this.scrollView.scrollTo({ x: scrolledX, y: 0, animated: true });
  }

  regenerateQuestionAndNoise = () => {
    this.setState({
      questionWordsAndNoise: generateQuestionWordsAndNoise(
        this.state.secretWords,
        this.props.questionNumber
      ),
      activeIndex: 0,
    });
  };

  goToCodePage = () => {
    this.setState({
      isModalOpen: true,
      activeIndex: 1,
    });
    this.props.onTrackAction('HD_CREATE_BACKUP_NOW');
  };

  goToConfirmPage = num => {
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
    const modalSetting = lang[this.props.locale].modal;
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
            isModalOpen={this.state.isModalOpen}
            goToCodePage={this.goToCodePage}
            closeModal={this.closeModal}
            style={this.props.style}
            onCancel={this.props.onCancel}
          />
          <CodePage
            locale={this.props.locale}
            codes={this.state.secretWords}
            goToConfirmOne={() => this.goToConfirmPage(2)}
            style={this.props.style}
          />
          {range(0, this.props.questionNumber).map(eachIndex => {
            const onSuccess =
              eachIndex !== this.props.questionNumber - 1
                ? () => this.goToConfirmPage(3 + eachIndex)
                : this.props.onSuccess;
            const pageType = eachIndex !== this.props.questionNumber - 1 ? 'Normal' : 'Last';
            return (
              <ConfirmPage
                key={eachIndex}
                locale={this.props.locale}
                words={
                  this.state.questionWordsAndNoise[eachIndex]
                    ? this.state.questionWordsAndNoise[eachIndex].noiseWithAnswer
                    : []
                }
                answer={
                  this.state.questionWordsAndNoise[eachIndex]
                    ? this.state.questionWordsAndNoise[eachIndex].value
                    : ''
                }
                page={pageType}
                wordIndex={
                  this.state.questionWordsAndNoise[eachIndex]
                    ? this.state.questionWordsAndNoise[eachIndex].index
                    : 0
                }
                onSuccess={onSuccess}
                onFail={this.props.onFail}
                regenerateQuestionAndNoise={this.regenerateQuestionAndNoise}
                style={this.props.style}
              />
            );
          })}
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
};

SecretCode.defaultProps = {
  locale: 'zh',
  onSuccess: () => {},
  onCancel: () => {},
  onFail: () => {},
  theme: 'dark',
  questionNumber: 2,
  style: {},
};

export default SecretCode;
