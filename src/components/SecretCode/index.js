import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';
import FontPage from './FontPage';

class SecretCode extends Component {
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
          style={[{}]}
          ref={pane1 => {
            this.pane1 = pane1;
          }}
        >
          <FontPage locale={'zh'} />
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
