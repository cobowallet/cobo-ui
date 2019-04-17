import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { ChooseWalletArrow } from '../../icons';

const Container = styled.View`
  width: 100%;
  height: 20;
`;

const ArrowContainer = styled(Animated.View)`
  width: 50%;
  display: flex;
  align-items: center;
  position: absolute;
`;

export default class Arrow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      leftAnim: new Animated.Value(props.index ? 1 / (props.index + 1) : 0),
    };
  }

  componentDidUpdate(prevProps) {
    this.updateAnimated();
  }

  updateAnimated = () => {
    Animated.timing(this.state.leftAnim, {
      toValue: this.props.index ? 1 / (this.props.index + 1) : 0,
      duration: 300,
    }).start();
  };

  render() {
    return (
      <Container>
        <ArrowContainer
          index={this.props.index}
          style={{
            left: this.state.leftAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          }}
        >
          <ChooseWalletArrow />
        </ArrowContainer>
      </Container>
    );
  }
}

Arrow.propTypes = {
  index: PropTypes.number.isRequired,
};
