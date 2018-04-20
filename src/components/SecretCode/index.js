import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions } from 'react-native';
import FrontPage from './FrontPage';
import CodePage from './CodePage';
import ConfirmPage from './ConfirmPage';
import SecretModal from './SecretModal';
import { lang } from './lang';
import { transformSecretCodeFormat, generateQuestionWordsAndNoise } from './codeHelper';

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
      questionWordsAndNoise: generateQuestionWordsAndNoise(secretWords),
    });
  }

  componentDidUpdate() {
    const scrolledX = this.state.activeIndex * width;
    this.scrollView.scrollTo({ x: scrolledX, y: 0, animated: true });
  }

  regenerateQuestionAndNoise = () => {
    this.setState({
      questionWordsAndNoise: generateQuestionWordsAndNoise(this.state.secretWords),
      activeIndex: 0,
    });
  };

  goToCodePage = () => {
    this.setState({
      isModalOpen: true,
      activeIndex: 1,
    });
  };

  goToConfirmPage = num => {
    this.setState({
      activeIndex: num,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const modalSetting = lang[this.props.locale].modal;
    return (
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
        />
        <CodePage
          locale={this.props.locale}
          codes={this.state.secretWords}
          goToConfirmOne={() => this.goToConfirmPage(2)}
        />
        <ConfirmPage
          locale={this.props.locale}
          words={
            this.state.questionWordsAndNoise[0]
              ? this.state.questionWordsAndNoise[0].noiseWithAnswer
              : []
          }
          answer={
            this.state.questionWordsAndNoise[0] ? this.state.questionWordsAndNoise[0].value : ''
          }
          page={1}
          wordIndex={
            this.state.questionWordsAndNoise[0] ? this.state.questionWordsAndNoise[0].index : 0
          }
          onSuccess={() => this.goToConfirmPage(3)}
          regenerateQuestionAndNoise={this.regenerateQuestionAndNoise}
        />
        <ConfirmPage
          locale={this.props.locale}
          words={
            this.state.questionWordsAndNoise[1]
              ? this.state.questionWordsAndNoise[1].noiseWithAnswer
              : []
          }
          answer={
            this.state.questionWordsAndNoise[1] ? this.state.questionWordsAndNoise[1].value : ''
          }
          page={2}
          wordIndex={
            this.state.questionWordsAndNoise[1] ? this.state.questionWordsAndNoise[1].index : 0
          }
          regenerateQuestionAndNoise={this.regenerateQuestionAndNoise}
          onSuccess={this.props.onSuccess}
        />
        <SecretModal
          isModalOpen={this.state.isModalOpen}
          header={modalSetting.header}
          description={modalSetting.description}
          button={modalSetting.button}
          onPress={this.closeModal}
        />
      </ScrollView>
    );
  }
}

SecretCode.propTypes = {
  locale: PropTypes.string,
  secretWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSuccess: PropTypes.func,
};

SecretCode.defaultProps = {
  locale: 'zh',
  onSuccess: () => {},
};

export default SecretCode;
