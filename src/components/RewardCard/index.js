import React from 'react';
import PropTypes from 'prop-types';
import { LayoutAnimation, UIManager, Platform, TouchableOpacity } from 'react-native';
import { CBText } from '../Core';
import { Clock, FoldingSwitch, ArrowRightBlue } from '../../icons';
import RewardCionCard from '../RewardCoinCard';

import {
  Container,
  ShadowContainer,
  LeftSide,
  Rules,
  Cycle,
  ReadMore,
  PaymentInfo,
  TagsContainer,
  Tag,
  TagDot,
  TagText,
  RuleButton,
} from './style';

class RewardCard extends React.PureComponent {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      unfolded: props.defaultOpen,
    };
  }

  onFold = () => {
    const { unfolded } = this.state;
    this.props.onMorePress(!unfolded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      unfolded: !unfolded,
    });
  };

  render() {
    const {
      disabled,
      isOpen,
      coinCode,
      logoUrl,
      name,
      displayCode,
      savingsRewardCoin,
      slogan,
      earned,
      earnedText,
      joinText,
      paidInfo,
      readmoreText,
      rulesText,
      viewRulesText,
      tags,
      onJoinPress,
      onRulesButtonPress,
      onCardPress,
    } = this.props;
    const { unfolded } = this.state;
    return (
      <ShadowContainer isOpen={isOpen} style={{ shadowOffset: { width: 0, height: 2 } }}>
        <Container
          onPress={() => {
            return disabled ? null : onCardPress();
          }}
        >
          {isOpen && (
            <LeftSide
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              locations={[0, 0.65, 1]}
              colors={['#00D3ED', '#0042F0', '#8A00EC']}
            />
          )}
          <RewardCionCard
            isOpen={isOpen}
            coinCode={coinCode}
            logoUrl={logoUrl}
            name={name}
            displayCode={displayCode}
            savingsRewardCoin={savingsRewardCoin}
            slogan={slogan}
            earned={earned}
            earnedText={earnedText}
            buttonText={joinText}
            buttonDisabled={disabled}
            onButtonPress={onJoinPress}
          />
          {isOpen ? (
            <Rules>
              <PaymentInfo>{paidInfo}</PaymentInfo>
              <TouchableOpacity style={{ paddingVertical: 10 }} onPress={onRulesButtonPress}>
                <CBText small bold color="primary">
                  {rulesText}
                </CBText>
              </TouchableOpacity>
            </Rules>
          ) : (
            <Rules>
              <Cycle>
                <Clock style={{ marginRight: 6 }} />
                <PaymentInfo>{paidInfo}</PaymentInfo>
              </Cycle>
              <ReadMore onPress={this.onFold}>
                <CBText bold small color="grayLight">
                  {readmoreText}
                </CBText>
                <FoldingSwitch isCollapsed={!unfolded} style={{ marginLeft: 6 }} />
              </ReadMore>
            </Rules>
          )}
          {!isOpen &&
            unfolded && (
              <TagsContainer>
                {tags.map((tag, i) => {
                  return (
                    <Tag key={i}>
                      <TagDot />
                      <TagText>{tag}</TagText>
                    </Tag>
                  );
                })}
                <RuleButton onPress={onRulesButtonPress}>
                  <TagText canPress>{viewRulesText}</TagText>
                  <ArrowRightBlue style={{ marginLeft: 4 }} />
                </RuleButton>
              </TagsContainer>
            )}
        </Container>
      </ShadowContainer>
    );
  }
}

RewardCard.propTypes = {
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  coinCode: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
  name: PropTypes.string,
  displayCode: PropTypes.string.isRequired,
  savingsRewardCoin: PropTypes.string,
  slogan: PropTypes.string.isRequired,
  earned: PropTypes.string.isRequired,
  earnedText: PropTypes.string.isRequired,
  joinText: PropTypes.string.isRequired,
  paidInfo: PropTypes.string.isRequired,
  readmoreText: PropTypes.string.isRequired,
  rulesText: PropTypes.string.isRequired,
  viewRulesText: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  defaultOpen: PropTypes.bool,
  onMorePress: PropTypes.func.isRequired,
  onJoinPress: PropTypes.func.isRequired,
  onRulesButtonPress: PropTypes.func.isRequired,
  onCardPress: PropTypes.func.isRequired,
};

RewardCard.defaultProps = {
  isOpen: true,
  defaultOpen: false,
};

export default RewardCard;
