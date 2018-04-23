import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { CBText } from '../Core';
import {
  Touchable,
  BoxModal,
  MessageContent,
  ButtonsContainer,
  Line,
  TitleText,
  MessageText,
  MAX_HEIGHT,
} from './style';

class MessageModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 22,
      titleHeight: 30,
    };
  }

  onModalShow = () => {
    Keyboard.dismiss();
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({
      contentHeight,
    });
  };

  onTitleLayout = ({ nativeEvent: { layout: { x, y, width, height } } }) => {
    this.setState({
      titleHeight: height,
    });
  };

  getMessageContentHeight = () => {
    const { contentHeight, titleHeight } = this.state;
    const maxMessageHeight = MAX_HEIGHT - titleHeight - 100;
    return contentHeight > maxMessageHeight ? maxMessageHeight : contentHeight;
  };

  render() {
    const { visible, title, content, buttons } = this.props;
    const messageHeight = this.getMessageContentHeight();
    return (
      <BoxModal
        visible={visible}
        onModalShow={this.onModalShow}
        animationOutTiming={50}
        backdropTransitionOutTiming={50}
      >
        <TitleText bold color={'dark'} onLayout={this.onTitleLayout}>
          {title}
        </TitleText>
        <MessageContent
          onContentSizeChange={this.onContentSizeChange}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={messageHeight < this.state.contentHeight}
          alwaysBounceHorizontal={false}
          bounces={false}
          style={{
            height: messageHeight,
          }}
        >
          <MessageText color={'dark'}>{content}</MessageText>
        </MessageContent>

        <ButtonsContainer>
          {buttons &&
            buttons.length > 0 &&
            buttons.map((item, index) => {
              const { titleBold, titleColor, title, onPress, canPress } = item;
              const dividerLine = <Line key={(index + buttons.length).toString()} />;
              const button = (
                <Touchable onPress={onPress} disabled={!canPress} key={index.toString()}>
                  <CBText color={titleColor} bold={titleBold}>
                    {title}
                  </CBText>
                </Touchable>
              );
              return index === 0 ? button : [dividerLine, button];
            })}
        </ButtonsContainer>
      </BoxModal>
    );
  }
}

MessageModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      canPress: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      titleColor: PropTypes.oneOf(['dark', 'gray', 'grayLight', 'primary', 'white', 'red', 'blue']),
      titleBold: PropTypes.bool,
    })
  ).isRequired,
};

MessageModal.defaultProps = {
  visible: false,
  title: '',
  content: '',
  buttons: null,
};

export default MessageModal;
