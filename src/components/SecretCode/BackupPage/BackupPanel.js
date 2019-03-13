import React from 'react';
import { withTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {
  BaseScrollView,
  ScrollViewContent,
  HeaderContainer,
  HeaderTitle,
  HeaderDesc,
  FinishButton,
  SelectedWord,
  UnSelectedWord,
} from './style';

const BackupPanel = ({
  header,
  descriptions,
  buttonTitle,
  buttonOnPress,
  theme,
  style,
  selectedWords,
  onUnSelectedWord,
  unSelectedWords,
  onSelectedWord,
  disabled,
}) => {
  return (
    <LinearGradient
      colors={[theme['pageBackgroundStartColor'], theme['pageBackgroundEndColor']]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <BaseScrollView contentContainerStyle={style}>
        <ScrollViewContent>
          <HeaderContainer>
            <HeaderTitle bold>{header}</HeaderTitle>
            {descriptions &&
              descriptions.map((each, index) => (
                <HeaderDesc small colorHex={'rgba(255, 255, 255, 0.8)'} key={index}>
                  {each}
                </HeaderDesc>
              ))}
          </HeaderContainer>

          <SelectedWord words={selectedWords} onHigherOrderPress={onUnSelectedWord} />

          <UnSelectedWord words={unSelectedWords} onHigherOrderPress={onSelectedWord} />
        </ScrollViewContent>
      </BaseScrollView>

      <FinishButton
        textColor={theme['buttonTextColor']}
        text={buttonTitle}
        onPress={buttonOnPress}
        disabled={disabled}
      />
    </LinearGradient>
  );
};

BackupPanel.propTypes = {
  header: PropTypes.string,
  descriptions: PropTypes.array,
  buttonTitle: PropTypes.string,
  buttonOnPress: PropTypes.func,
  style: PropTypes.any,
  selectedWords: PropTypes.array,
  onUnSelectedWord: PropTypes.func,
  unSelectedWords: PropTypes.array,
  onSelectedWord: PropTypes.func,
  disabled: PropTypes.bool,
};
export default withTheme(BackupPanel);
