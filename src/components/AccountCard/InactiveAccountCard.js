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
  let bottomButtons = [
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
  if (buttons && buttons.length > 0) {
    bottomButtons = buttons;
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
                <SloganText style={{ width: '100%' }}>{slogan}</SloganText>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
  /**
   * [{onPress, canPress, title}]
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      canPress: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

InactiveAccountCard.defaultProps = {
  viewRuleTitle: 'View Rule',
  openTitle: 'Open Now',
  buttons: [],
};

export default InactiveAccountCard;
