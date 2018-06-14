// example from https://github.com/ethantran/react-native-examples/blob/master/src/screens/SvgPathDrawing.js
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { svgPathProperties } from 'svg-path-properties';
import { Animated, View } from 'react-native';
import { CBContainer } from '../Core';

const PATH_CHECK = 'M6.173 16.252l5.722 4.228 9.22-12.69';
const AnimatePath = Animated.createAnimatedComponent(Path);
const AnimateCircle = Animated.createAnimatedComponent(Circle);
const propertiesInner = svgPathProperties(PATH_CHECK);

class SuccessAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.lengthInner = propertiesInner.getTotalLength();
    this.state = {
      strokeDashoffsetInner: new Animated.Value(this.lengthInner + 1),
      strokeDashoffsetOuter: new Animated.Value(100),
      spinValue: new Animated.Value(0),
      success: false,
    };
  }

  componentDidMount() {
    this.startLoadingAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.success && nextProps.success) {
      this.setState({
        success: true,
      });
    }
  }

  restart = () => {
    this.setState(
      {
        strokeDashoffsetInner: new Animated.Value(this.lengthInner),
        strokeDashoffsetOuter: new Animated.Value(100),
        spinValue: new Animated.Value(0),
        success: false,
      },
      () => {
        this.startLoadingAnimation();
      }
    );
  };

  startLoadingAnimation = () => {
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 800,
      isInteraction: false,
      useNativeDriver: true,
    }).start(() => {
      if (!this.state.success) {
        this.state.spinValue.setValue(0);
        this.startLoadingAnimation();
      } else {
        this.startSuccessAnimation();
      }
    });
  };

  startSuccessAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.strokeDashoffsetOuter, {
        toValue: 0,
        duration: 500,
        isInteraction: false,
      }),
      Animated.timing(this.state.strokeDashoffsetInner, {
        toValue: 0,
        duration: 500,
        isInteraction: false,
      }),
    ]).start(this.successAnimationFinished);
  };

  successAnimationFinished = () => {
    if (this.props.onAnimationSuccess) {
      setTimeout(this.props.onAnimationSuccess, 500);
    }
  };

  render() {
    return (
      <CBContainer style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: 120,
            height: 120,
          }}
        >
          <Animated.View
            style={{
              width: 120,
              height: 120,
              transform: [
                {
                  rotate: this.state.spinValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          >
            <Svg width="120" height="120">
              <AnimateCircle
                cx="60"
                cy="60"
                r="36"
                fill="none"
                rotate={180}
                stroke={'#5170EB'}
                origin="60, 60"
                strokeWidth="4"
                strokeDasharray={[251.32, 251.32]}
                strokeDashoffset={this.state.strokeDashoffsetOuter}
              />
            </Svg>
          </Animated.View>
          <View
            style={{
              position: 'absolute',
              width: 120,
              height: 120,
            }}
          >
            <Svg width="120" height="120">
              <AnimatePath
                d={PATH_CHECK}
                x={35}
                y={35}
                scale={1.8}
                fill="none"
                stroke={'#5170EB'}
                strokeWidth="3"
                strokeLinecap={'round'}
                strokeDasharray={[this.lengthInner, this.lengthInner + 2]}
                strokeDashoffset={this.state.strokeDashoffsetInner}
              />
            </Svg>
          </View>
        </View>
      </CBContainer>
    );
  }
}

export default SuccessAnimation;
