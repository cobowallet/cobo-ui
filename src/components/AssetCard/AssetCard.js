import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LayoutAnimation, UIManager, Platform } from 'react-native';
import { CBText } from '../Core';
import { FoldingSwitch } from '../../icons';
import {
  Container,
  Row,
  IconContent,
  CoinIcon,
  AmountContainer,
  AmountText,
  ToggleArea,
} from './style';

class AssetCard extends PureComponent {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      open: props.defaultOpen || false,
    };
  }

  onFold = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { amount, fiatCurrencyAmount, fiatCurrencySymbol, coinCode, onPress } = this.props;
    return (
      <Container>
        <Row onPress={onPress}>
          <IconContent>
            <CoinIcon coin={coinCode} />
          </IconContent>
          <CBText bold>{coinCode}</CBText>
          <AmountContainer>
            <AmountText numberOfLines={1}>{amount}</AmountText>
            <CBText
              small
              bold
              color={'grayLight'}
              numberOfLines={1}
            >{`${fiatCurrencySymbol} ${fiatCurrencyAmount}`}</CBText>
          </AmountContainer>
          <ToggleArea onPress={this.onFold}>
            <FoldingSwitch isCollapsed={!this.state.open} />
          </ToggleArea>
        </Row>
        {this.state.open && this.props.children}
      </Container>
    );
  }
}

AssetCard.propTypes = {
  amount: PropTypes.string.isRequired,
  fiatCurrencyAmount: PropTypes.string.isRequired,
  fiatCurrencySymbol: PropTypes.string,
  coinCode: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool,
  onPress: PropTypes.func,
};

AssetCard.defaultProps = {
  symbol: '$',
  defaultOpen: false,
  onPress: null,
};

export default AssetCard;
