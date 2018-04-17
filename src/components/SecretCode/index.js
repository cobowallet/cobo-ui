import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';
import FrontPage from './FrontPage';

class SecretCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        </SlidingPane>
        <SlidingPane
          style={[{ borderColor: '#FF9999', borderWidth: 2 }]}
          ref={pane2 => {
            this.pane2 = pane2;
          }}
        >
          <View>
            <Text>Pane 2</Text>
          </View>
        </SlidingPane>
        <SlidingPane
          style={[{ borderColor: '#FF9999', borderWidth: 2 }]}
          ref={pane3 => {
            this.pane3 = pane3;
          }}
        >
          <View>
            <Text>Pane 3</Text>
          </View>
        </SlidingPane>
      </SlidingPaneWrapper>
    );
  }
}

export default SecretCode;
