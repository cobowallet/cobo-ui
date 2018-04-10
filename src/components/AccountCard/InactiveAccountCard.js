import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CBGradientCard } from '../Core';
import { TopContainer, Header, SloganText, BottomContainer, renderButtons } from './style';

/**
 * Reword account that not activated.
 */
const InactiveAccountCard = ({ onViewRule, onOpen, title, slogan, colors }) => {
  return (
    <CBGradientCard
      colors={colors}
      renderChild={() => {
        return (
          <View>
            <TopContainer>
              <Header title={title} />
              <SloganText>{slogan}</SloganText>
            </TopContainer>
            <BottomContainer>
              {renderButtons([
                {
                  onPress: onViewRule,
                  canPress: true,
                  title: 'View Rule',
                },
                {
                  onPress: onOpen,
                  canPress: true,
                  title: 'Open Now',
                },
              ])}
            </BottomContainer>
          </View>
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
};

export default InactiveAccountCard;
