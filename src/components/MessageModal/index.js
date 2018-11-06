import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { isNil } from 'ramda';
import { ThemeProvider } from 'styled-components/native';
import { messageModalTheme } from './theme';
import {
  BoxModal,
  MessageContent,
  ButtonsContainer,
  TitleText,
  MessageText,
  MAX_HEIGHT,
  renderBottomButtons,
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

  onTitleLayout = ({ nativeEvent: { layout: { height } } }) => {
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
    const {
      visible,
      title,
      content,
      buttons,
      renderContent,
      theme,
      titleStyle,
      contentStyle,
      borderRadius,
      ...otherProps // orther react-native-modal props
    } = this.props;
    const messageHeight = this.getMessageContentHeight();
    const hasTitle = !isNil(title) && title.length > 0;
    const hasMessage = !isNil(content) && content.length > 0;
    return (
      <ThemeProvider theme={messageModalTheme[theme] || messageModalTheme.default}>
        <BoxModal
          visible={visible}
          onModalShow={this.onModalShow}
          animationOutTiming={50}
          backdropTransitionOutTiming={50}
          borderRadius={borderRadius}
          {...otherProps}
        >
          {hasTitle && (
            <TitleText bold onLayout={this.onTitleLayout} style={titleStyle}>
              {title}
            </TitleText>
          )}

          {hasMessage && (
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
              <MessageText style={contentStyle}>{content}</MessageText>
            </MessageContent>
          )}

          {renderContent && renderContent()}

          <ButtonsContainer borderRadius={borderRadius}>
            {renderBottomButtons(buttons)}
          </ButtonsContainer>
        </BoxModal>
      </ThemeProvider>
    );
  }
}

MessageModal.displayName = 'Simple Message Modal';

MessageModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  content: PropTypes.string,
  contentStyle: PropTypes.object,
  renderContent: PropTypes.func,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      canPress: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      titleColor: PropTypes.oneOf(['dark', 'gray', 'grayLight', 'primary', 'white', 'red', 'blue']),
      titleBold: PropTypes.bool,
    })
  ).isRequired,
  theme: PropTypes.string,
  borderRadius: PropTypes.number,
};

MessageModal.defaultProps = {
  title: '',
  content: '',
  renderContent: null,
  theme: 'default',
  titleStyle: {},
  contentStyle: {},
  borderRadius: 12,
};

export default MessageModal;
