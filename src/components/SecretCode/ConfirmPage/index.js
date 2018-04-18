import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import SecretCodePanel from '../SecretCodePanel';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';
import WordsBox from './WordsBox';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 200;
`;

const getBody = (words, wordIndex, selectedWord, onItemPress) => (
  <Container>
    <Text style={{ fontSize: 40, color: 'white' }}>{`#${wordIndex}`}</Text>
    <WordsBox words={words} selectedWord={selectedWord} onItemPress={onItemPress} />
  </Container>
);

const generateBtn = (title, onPress) => (
  <CBButton
    style={{
      marginTop: 20,
      marginBottom: 40,
      backgroundColor: 'white',
    }}
    textColor={'#5170EB'}
    text={title}
    onPress={onPress}
  />
);

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: '',
    };
    this.onPageClick = this.onPageClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onPageClick() {
    if (this.state.clicked === this.props.answer) {
      this.props.onSuccess();
    }
    this.props.regenerateQuestionAndNoise();
  }

  onItemClick(item) {
    this.setState({
      clicked: item,
    });
  }

  render() {
    const { locale, words, page, wordIndex } = this.props;
    const confirmPageSetting = lang[locale].confirmPage;
    return (
      <SecretCodePanel
        header={confirmPageSetting.header}
        descriptions={confirmPageSetting.descriptions}
        body={getBody(words, wordIndex, this.state.clicked, this.onItemClick)}
        button={generateBtn(confirmPageSetting[`button${page}`], this.onPageClick)}
      />
    );
  }
}

export default ConfirmPage;
