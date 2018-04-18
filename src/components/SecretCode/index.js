import React, { Component } from 'react';
import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';
import FrontPage from './FrontPage';
import CodePage from './CodePage';
import ConfirmPage from './ConfirmPage';
import SecretModal from './SecretModal';
import { lang } from './lang';
import { transformSecretCodeFormat, generateQuestionWordsAndNoise } from './codeHelper';

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
    this.regenerateQuestionAndNoise = this.regenerateQuestionAndNoise.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const secretWords = transformSecretCodeFormat(nextProps.secretWords);
    this.setState({
      secretWords,
      questionWordsAndNoise: generateQuestionWordsAndNoise(secretWords),
    });
  }

  regenerateQuestionAndNoise() {
    this.setState({
      questionWordsAndNoise: generateQuestionWordsAndNoise(this.state.secretWords),
      activeIndex: 0,
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
    this.pane4.warpRight();
    this.slidingPaneWrapper.childPanes = [this.pane1, this.pane2, this.pane3, this.pane4];
  }

  render() {
    const modalSetting = lang[this.props.locale].modal;
    return (
      <SlidingPaneWrapper
        style={{}}
        ref={slidingPaneWrapper => {
          this.slidingPaneWrapper = slidingPaneWrapper;
        }}
      >
        <SlidingPane
          style={[]}
          ref={pane1 => {
            this.pane1 = pane1;
          }}
        >
          <FrontPage
            locale={this.props.locale}
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
            locale={this.props.locale}
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
              this.state.questionWordsAndNoise[0] ? this.state.questionWordsAndNoise[0].index : ''
            }
            onSuccess={() => this.goToConfirmPage(3)}
            regenerateQuestionAndNoise={this.regenerateQuestionAndNoise}
          />
        </SlidingPane>
        <SlidingPane
          style={[]}
          ref={pane4 => {
            this.pane4 = pane4;
          }}
        >
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
              this.state.questionWordsAndNoise[1] ? this.state.questionWordsAndNoise[1].index : ''
            }
            regenerateQuestionAndNoise={this.regenerateQuestionAndNoise}
            onSuccess={this.props.onSuccess}
          />
        </SlidingPane>
        <SecretModal
          isModalOpen={this.state.isModalOpen}
          header={modalSetting.header}
          description={modalSetting.description}
          button={modalSetting.button}
          onPress={this.closeModal}
        />
      </SlidingPaneWrapper>
    );
  }
}

export default SecretCode;
