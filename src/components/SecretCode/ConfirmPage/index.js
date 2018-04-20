import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import SecretCodePanel from '../SecretCodePanel';
import { lang } from '../lang';
import CBButton from '../../Core/CBButton/index';
import WordsBox from './WordsBox';
import { ButtonColors, FontColors } from '../../../theme/CBColor';

const Container = styled.View`
  margin-top: 50;
  margin-bottom: 200;
`;

class ConfirmPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clicked: '',
    };
  }

  onNext = () => {
    if (this.state.clicked === this.props.answer && this.props.onSuccess) {
      this.props.onSuccess();
    } else {
      this.setState({
        clicked: '',
      });
      this.props.regenerateQuestionAndNoise();
    }
  };

  onItemClick = item => {
    this.setState({
      clicked: item,
    });
  };

  renderBody(words, wordIndex, selectedWord, onItemPress) {
    return (
      <Container>
        <Text style={{ fontSize: 40, color: `${FontColors.white}` }}>{`#${wordIndex}`}</Text>
        <WordsBox words={words} selectedWord={selectedWord} onItemPress={onItemPress} />
      </Container>
    );
  }

  renderButton(title, onPress) {
    return (
      <CBButton
        style={{
          marginTop: 20,
          marginBottom: 40,
          backgroundColor: `${ButtonColors.white}`,
        }}
        textColor={ButtonColors.blue}
        text={title}
        onPress={onPress}
      />
    );
  }

  render() {
    const { locale, words, page, wordIndex } = this.props;
    const confirmPageSetting = lang[locale].confirmPage;
    return (
      <SecretCodePanel
        header={confirmPageSetting.header}
        descriptions={confirmPageSetting.descriptions}
        body={this.renderBody(words, wordIndex, this.state.clicked, this.onItemClick)}
        buttonTitle={confirmPageSetting[`button${page}`]}
        buttonOnPress={this.onNext}
      />
    );
  }
}

ConfirmPage.propTypes = {
  locale: PropTypes.string.isRequired,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  page: PropTypes.number.isRequired,
  wordIndex: PropTypes.number.isRequired,
};

export default ConfirmPage;
