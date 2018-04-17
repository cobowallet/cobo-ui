import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';
import FrontPage from './FrontPage';
import CodePage from './CodePage';
import ConfirmPage from './ConfirmPage';
import { transformSecretCodeFormat, pickQuestionWords, getNoiseWord, shuffle } from './codeHelper';

class SecretCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      activeIndex: 0,
      secretWords: [],
      questionWordsAndNoise: [],
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.goToCodePage = this.goToCodePage.bind(this);
    this.goToConfirmPage = this.goToConfirmPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const secretWords = transformSecretCodeFormat(nextProps.secretWords);
    let questionWords = pickQuestionWords(secretWords);
    const questionWordsAndNoise = questionWords.map(each => ({
      ...each,
      ...{ noiseWithAnswer: shuffle([...getNoiseWord(each), each.value]) },
    }));
    this.setState({
      secretWords,
      questionWordsAndNoise,
    });
  }

  regenerateQuestionAndNoise() {
    let questionWords = pickQuestionWords(this.state.secretWords);
    const questionWordsAndNoise = questionWords.map(each => ({
      ...each,
      ...{ noise: getNoiseWord(each) },
    }));
    this.setState({
      questionWordsAndNoise,
    });
  }

  goToCodePage() {
    this.setState({
      isModalOpen: true,
      activeIndex: 1,
    });
  }

  goToConfirmPage(num) {
    this.setState({
      activeIndex: num,
    });
  }

  componentDidUpdate() {
    this.slidingPaneWrapper.setActive(this.state.activeIndex);
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  componentDidMount() {
    this.pane1.warpCenter();
    this.pane2.warpRight();
    this.pane3.warpRight();
    this.slidingPaneWrapper.childPanes = [this.pane1, this.pane2, this.pane3];
  }

  render() {
    return (
      <SlidingPaneWrapper
        style={{ flex: 1 }}
        ref={slidingPaneWrapper => {
          this.slidingPaneWrapper = slidingPaneWrapper;
        }}
      >
        <SlidingPane
          style={[{ flex: 1 }]}
          ref={pane1 => {
            this.pane1 = pane1;
          }}
        >
          <FrontPage
            locale={'zh'}
            isModalOpen={this.state.isModalOpen}
            goToCodePage={this.goToCodePage}
            closeModal={this.closeModal}
          />
        </SlidingPane>
        <SlidingPane
          style={[]}
          ref={pane2 => {
            this.pane2 = pane2;
          }}
        >
          <CodePage
            locale={'zh'}
            codes={this.state.secretWords}
            goToConfirmOne={() => this.goToConfirmPage(2)}
          />
        </SlidingPane>
        <SlidingPane
          style={[]}
          ref={pane3 => {
            this.pane3 = pane3;
          }}
        >
          <ConfirmPage
            locale={'zh'}
            words={
              this.state.questionWordsAndNoise[0]
                ? this.state.questionWordsAndNoise[0].noiseWithAnswer
                : []
            }
            answer={
              this.state.questionWordsAndNoise[0] ? this.state.questionWordsAndNoise[0].value : ''
            }
            goToConfirmTwo={() => this.goToConfirmPage(3)}
            regenrateQuestionAndNoise={this.regenerateQuestionAndNoise}
          />
        </SlidingPane>
      </SlidingPaneWrapper>
    );
  }
}

export default SecretCode;
