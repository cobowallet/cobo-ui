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
    Phabricator主要包括基于web的协同工具，
    以及命令行的工具Arcanist。
    如果你无法登陆 http://dev.bitpao.com/ ，可以找谭庆禄。
    下一步需要安装Arcanist命令行工具：（以下假设你用linux或者mac作为你的开发用的电脑）
    $ mkdir -p ~/bin
    $ cd ~/bin
    $ git clone git://github.com/facebook/libphutil.git
    $ git clone git://github.com/facebook/arcanist.git
    下一步把arcanist加入到你的PATH路径: (以下假设你用bash)
    $ export PATH=$PATH:~/bin/arcanist/bin
    你可以把这段代码加到你的.bashrc里面。然后你可以在命令行执行
    $ arc help
    确保该命令能够正确执行。
    配置git commit template
    WARNING: 如果Phabricator安装了中文翻译，同时在当前账号下设置了用中文显示，请跳过本步骤。因为Pharbicator会使用经过中文化的字段名检查commit message是否包含了必要信息。比如：Phabricator会提示没有“测试计划”。
    创建一个文件~/.git-commit-message, 内容如下：
    <<Enter Revision Title>>
    Summary:
    Test Plan:
    Reviewers:
    CC:
    Maniphest Tasks:
    #########################
    修改你的~/.gitconfig 文件确保你加入以下代码
    [commit]
        template = ~/.git-commit-message
    安装arc certificate
    下一步你需要安装一个certificate，直接运行
    $ arc install-certificate
    按照它的提示作就可以了。
    创建diff
    使用arc创建diff
    $ vim README
    <对文件做一些修改>
    $ git commit -a
    $ arc diff`;
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
