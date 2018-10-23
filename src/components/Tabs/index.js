import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TabBar from './TabBar';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.defaultIndex || 0,
    };
  }

  onPress = index => {
    this.setState({
      index,
    });
    if (this.props.onSelectTab) {
      this.props.onSelectTab(index);
    }
  };

  render() {
    const { borderBottom, style, tabs } = this.props;
    const selectTab = this.props.tabs.find(each => each.index === this.state.index);
    return (
      <View>
        <View
          style={[
            {
              width: '100%',
              height: 50,
              paddingLeft: 16,
              paddingRight: 16,
              flexDirection: 'row',
              alignItems: 'flex-end',
              borderBottomColor: '#f1f3f5',
              borderBottomWidth: borderBottom ? 1 : 0,
            },
            style,
          ]}
        >
          {tabs.map(tab => (
            <TabBar
              key={tab.index}
              title={tab.title}
              onPress={() => this.onPress(tab.index)}
              isActive={tab.index === this.state.index}
              style={{ marginStart: tab.index === 0 ? 0 : 36 }}
            />
          ))}
        </View>
        {selectTab.renderTabView()}
      </View>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      renderTabView: PropTypes.func.isRequired,
    })
  ).isRequired,
  style: PropTypes.any,
  borderBottom: PropTypes.bool,
  defaultIndex: PropTypes.number,
  onSelectTab: PropTypes.func,
};

Tabs.defaultProps = {
  borderBottom: true,
  defaultIndex: 0,
  onSelectTab: () => {},
};

export default Tabs;
