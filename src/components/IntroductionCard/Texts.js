import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { ScrollView, Dimensions, InteractionManager } from 'react-native';

const { width } = Dimensions.get('window');

const ScrollViewContainer = styled(ScrollView)`
  flex: 1;
  border-radius: 3;
  background-color: #fff;
`;

const TextsContainer = styled.View`
  width: ${width - 32};
  padding-left: 16;
`;

const TextContanier = styled.View`
  border-bottom-width: 1;
  border-bottom-color: ${props => (props.last ? 'transparent' : 'rgba(137, 148, 198, 0.1)')};
`;

const TextItem = styled.Text`
  height: 62;
  line-height: 62;
  font-size: 14;
  color: #8f95aa;
`;

function renderTexts(texts) {
  return (
    <TextsContainer>
      {texts.map((text, index) => (
        <TextContanier key={index} last={index === texts.length}>
          <TextItem>{text}</TextItem>
        </TextContanier>
      ))}
    </TextsContainer>
  );
}

export default class Texts extends React.PureComponent {
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const x = this.props.index * (width - 32);
      if (this._scrollView) {
        this._scrollView.scrollTo({ x, animated: false });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.props.index) {
      const x = nextProps.index * (width - 32);
      this._scrollView.scrollTo({ x });
    }
  }

  onMomentumScrollEnd = e => {
    let offsetX = e.nativeEvent.contentOffset.x;
    const textIndex = Math.floor(parseFloat(offsetX / width).toFixed(0));
    this.props.onScroll(textIndex);
  };

  render() {
    const { textObj } = this.props;
    return (
      <ScrollViewContainer
        innerRef={scrollView => {
          this._scrollView = scrollView;
        }}
        horizontal
        pagingEnabled
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={this.onMomentumScrollEnd}
        contentContainerStyle={{
          backgroundColor: 'white',
        }}
      >
        {renderTexts(textObj.cloudTexts)}
        {renderTexts(textObj.hdTexts)}
      </ScrollViewContainer>
    );
  }
}

Texts.propTypes = {
  index: PropTypes.number.isRequired,
  onScroll: PropTypes.func.isRequired,
  textObj: PropTypes.shape({
    cloudTexts: PropTypes.array.isRequired,
    hdTexts: PropTypes.array.isRequired,
  }).isRequired,
};
