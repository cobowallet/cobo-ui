import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LayoutAnimation, UIManager, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { isNil } from 'ramda';
import { FoldingSwitch } from '../../icons';
import RewardBadge from '../RewardBadge';
import {
  Container,
  Row,
  IconContent,
  CoinIcon,
  AmountContainer,
  AmountText,
  ToggleArea,
  CoinContainer,
  CoinCodeText,
  FiatCurrencyAmountText,
} from './style';
import { assetCardTheme } from './theme';

class AssetCard extends PureComponent {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      open: props.defaultOpen,
    };
  }

  onFold = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const {
      amount,
      fiatCurrencyAmount,
      fiatCurrencySymbol,
      coinCode,
      displayCode,
      onPress,
      theme,
      slogan,
      iconUrl,
      onAssetCardLayout,
    } = this.props;
    return (
      <ThemeProvider theme={assetCardTheme[theme] || assetCardTheme.default}>
        <Container style={{ shadowOffset: { width: 0, height: 2 } }}>
          <Row onPress={onPress} onLayout={onAssetCardLayout}>
            <IconContent>
              <CoinIcon coin={coinCode} uri={iconUrl} />
            </IconContent>
            <CoinContainer>
              <CoinCodeText>{displayCode || coinCode}</CoinCodeText>
              {!isNil(slogan) &&
                slogan.length > 0 && (
                  <RewardBadge content={slogan} theme={theme} style={{ marginTop: 5 }} />
                )}
            </CoinContainer>

            <AmountContainer>
              <AmountText numberOfLines={1}>{amount}</AmountText>
              <FiatCurrencyAmountText
                small
                bold
                numberOfLines={1}
              >{`${fiatCurrencySymbol} ${fiatCurrencyAmount}`}</FiatCurrencyAmountText>
            </AmountContainer>
            <ToggleArea onPress={this.onFold}>
              <FoldingSwitch isCollapsed={!this.state.open} />
            </ToggleArea>
          </Row>
          {this.state.open && this.props.children}
        </Container>
      </ThemeProvider>
    );
  }
}

AssetCard.displayName = 'Asset Card';

AssetCard.propTypes = {
  coinCode: PropTypes.string.isRequired,
  displayCode: PropTypes.string,
  iconUrl: PropTypes.string,
  amount: PropTypes.string.isRequired,
  fiatCurrencyAmount: PropTypes.string.isRequired,
  fiatCurrencySymbol: PropTypes.string,
  defaultOpen: PropTypes.bool,
  onPress: PropTypes.func,
  theme: PropTypes.string,
  slogan: PropTypes.string,
  onAssetCardLayout: PropTypes.func,
};

AssetCard.defaultProps = {
  fiatCurrencySymbol: '$',
  defaultOpen: false,
  onPress: null,
  theme: 'default',
  slogan: '',
  iconUrl: '',
  onAssetCardLayout: e => null,
};

export default AssetCard;
