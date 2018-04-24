import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { CBContainer } from '../Core';
import MessageModal from './index';

class MessageModalTest extends PureComponent {
  state = {
    display: false,
    displayNoTitle: false,
  };

  getButtons = () => {
    return [
      {
        title: '取消',
        titleColor: 'grayLight',
        canPress: true,
        onPress: () => {
          this.setState({
            display: false,
            displayNoTitle: false,
          });
        },
      },
      {
        title: '确定',
        titleColor: 'primary',
        titleBold: true,
        canPress: true,
        onPress: () => {
          this.setState({
            display: false,
            displayNoTitle: false,
          });
        },
      },
    ];
  };

  getMessageContent = () => {
    return `使用Phabricator
    Phabricator是facebook开发的一套多人协作软件开发和项目管理的工具。
    具有代码审核（code review），项目管理（task management）、代码浏览以及wiki等功能。
    我们已经在dev.bitpao.com服务器上安装设置好了phabricator系列工具，
    我们以后尽可能通过phabricator来协调、讨论、项目管理。
    安装和设置
    Phabricator主要包括基于web的协同工具，`;
  };

  render() {
    const buttons = this.getButtons();
    return (
      <CBContainer alignCenter style={{ justifyContent: 'center' }}>
        <MessageModal
          title={'测试信息弹框'}
          buttons={buttons}
          content={this.getMessageContent()}
          visible={this.state.display}
        />
        <MessageModal
          buttons={buttons}
          title={'简单信息通知'}
          visible={this.state.displayNoTitle}
        />
        <Button title={'show message modal'} onPress={() => this.setState({ display: true })} />
        <Button
          title={'show no title message modal'}
          onPress={() => this.setState({ displayNoTitle: true })}
        />
      </CBContainer>
    );
  }
}

storiesOf('MessageModal', module).add('default', () => <MessageModalTest />);
