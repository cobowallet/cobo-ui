import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LayoutAnimation, UIManager, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { FoldingSwitch } from '../../icons';
import RewardBadge from '../RewardBadge';
import AdBadge from '../AdBadge';
import LNBadge from '../LNBadge';
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
  CoinLineContainer,
  FiatCurrencyAmountText,
  CoinDescContainer,
  DescText,
  ParentLogo,
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

  onFold = coinCode => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.props.onFold && this.props.onFold(coinCode, !this.state.open);
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
      adBadge,
      lnBadge,
      desc,
      coinParent,
      coinParentIconUrl,
    } = this.props;
    const showBadge = !!slogan || !!adBadge;
    const showDesc = !!desc && !showBadge;
    return (
      <ThemeProvider theme={assetCardTheme[theme] || assetCardTheme.default}>
        <Container style={{ shadowOffset: { width: 0, height: 2 } }}>
          <Row onPress={onPress} onLayout={onAssetCardLayout}>
            <IconContent>
              <CoinIcon coin={coinCode} uri={iconUrl} />
              {!!coinParent && <ParentLogo coin={coinParent} uri={coinParentIconUrl} />}
            </IconContent>
            <CoinContainer>
              <CoinLineContainer>
                <CoinCodeText> {displayCode || coinCode} </CoinCodeText>
                {!!lnBadge && <LNBadge content={lnBadge} style={{ marginLeft: 5 }} />}
              </CoinLineContainer>
              {(showBadge || showDesc) && (
                <CoinDescContainer>
                  {showBadge && (
                    <CoinDescContainer style={{ marginTop: 0 }}>
                      {!!slogan && <RewardBadge content={slogan} theme={theme} />}
                      {!!adBadge && <AdBadge content={adBadge} style={{ marginLeft: 5 }} />}
                    </CoinDescContainer>
                  )}
                  {showDesc && (
                    <DescText small numberOfLines={1}>
                      {desc}
                    </DescText>
                  )}
                </CoinDescContainer>
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
            <ToggleArea onPress={() => this.onFold(coinCode)}>
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
  adBadge: PropTypes.string,
  desc: PropTypes.string,
  onAssetCardLayout: PropTypes.func,
  onFold: PropTypes.func,
  coinParent: PropTypes.string,
  coinParentIconUrl: PropTypes.string,
};

AssetCard.defaultProps = {
  fiatCurrencySymbol: '$',
  defaultOpen: false,
  onPress: null,
  theme: 'default',
  slogan: '',
  adBadge: '',
  desc: '',
  iconUrl: '',
  onAssetCardLayout: e => null,
  coinParent: '',
  coinParentIconUrl: '',
};

export default AssetCard;
