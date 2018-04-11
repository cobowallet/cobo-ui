import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View } from 'react-native';
import { CBGradientCard } from '../Core';
import { TopContainer, Header, SloganText, BottomContainer, renderButtons } from './style';

/**
 * Reword account that not activated.
 */
const InactiveAccountCard = ({
  viewRuleTitle,
  onViewRule,
  openTitle,
  onOpen,
  title,
  slogan,
  colors,
  onEnter,
  buttons,
}) => {
  let bottomButtons = buttons;
  if (buttons === null) {
    bottomButtons = [
      {
        onPress: onViewRule,
        canPress: true,
        title: viewRuleTitle,
      },
      {
        onPress: onOpen,
        canPress: true,
        title: openTitle,
      },
    ];
  }
  return (
    <CBGradientCard
      colors={colors}
      renderChild={() => {
        return (
          <TouchableOpacity onPress={onEnter} activeOpacity={0.6}>
            <TopContainer style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Header title={title} />
                <SloganText>{slogan}</SloganText>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16 }}>
                <Image style={{ width: 25, height: 25 }} source={require('./img/add.png')} />
              </View>
            </TopContainer>
            <BottomContainer>{renderButtons(bottomButtons)}</BottomContainer>
          </TouchableOpacity>
        );
      }}
    />
  );
};

InactiveAccountCard.displayName = 'Inactive Account Card';

InactiveAccountCard.propTypes = {
  /**
   * Callback when 'on view' pressed
   */
  onViewRule: PropTypes.func.isRequired,
  /**
   * Callback when user active the account
   */
  onOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  onEnter: PropTypes.func.isRequired,
  viewRuleTitle: PropTypes.string,
  openTitle: PropTypes.string,
  buttons: PropTypes.array,
};

InactiveAccountCard.defaultProps = {
  viewRuleTitle: 'View Rule',
  openTitle: 'Open Now',
  buttons: null,
};

export default InactiveAccountCard;
