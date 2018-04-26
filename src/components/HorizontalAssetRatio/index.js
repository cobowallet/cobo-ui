import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { zip } from 'ramda';
import { View } from 'react-native';
import { Entypo } from '../../icons';
import { CBText } from '../Core';

export const DEFAULT_COLORS = ['#FFFFFF', '#B5C5FF', '#00B191', '#4800F2', '#1F184F'];

const Dot = styled.View`
  width: 6;
  height: 6;
  border-radius: 3;
  margin-right: 4;
  background: ${props => props.color};
`;

const LabelContaienr = styled.View`
  width: 20%;
  flex-direction: row;
  align-items: center;
`;

const LabelList = styled.View`
  width: 100%;
  margin-top: 8;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
`;

const LabelView = ({ assets, colors }) => (
  <LabelList>
    {zip(assets, colors).map(([asset, color], index) => (
      <LabelContaienr key={index}>
        <Dot color={color} />
        <CBText style={{ fontSize: 12, marginRight: 5 }} color="white">{`${asset.label} ${
          asset.percentage
        }%`}</CBText>
      </LabelContaienr>
    ))}
  </LabelList>
);

const RatioContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Ratio = styled.View`
  flex: ${props => props.percentage};
  height: 5;
  background: ${props => props.color};
`;

const RatioView = ({ assets, colors }) => (
  <RatioContainer>
    {zip(assets, colors).map(([asset, color], index) => (
      <Ratio key={index} percentage={asset.percentage} color={color} />
    ))}
  </RatioContainer>
);

const HorizontalAssetRatio = ({ assets, colorScale, labelOfOthers }) => {
  if (assets.length == 0) {
    return <View />;
  }

  let sortedAssets = assets
    .map(asset => ({ ...asset, percentage: parseInt((asset.percentage * 100).toFixed(0)) }))
    .sort((first, second) => second.percentage - first.percentage);

  if (sortedAssets.length > 5) {
    const remain = sortedAssets
      .slice(4)
      .map(asset => asset.percentage)
      .reduce((sum, percentage) => sum + percentage);

    sortedAssets.splice(4, sortedAssets.length - 4, { label: labelOfOthers, percentage: remain });
  }

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <RatioView assets={sortedAssets} colors={colorScale} />
      <LabelView assets={sortedAssets} colors={colorScale} />
    </View>
  );
};

HorizontalAssetRatio.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  colorScale: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelOfOthers: PropTypes.string,
};

HorizontalAssetRatio.defaultProps = {
  colorScale: DEFAULT_COLORS,
  labelOfOthers: 'Others',
};

export default HorizontalAssetRatio;
