import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { zip } from 'ramda';
import Cloud from './img/cloud.png';
import HD from './img/hd.png';
import TabItem from './TabItem';

const TAB_IMAGES = [Cloud, HD];

const TabsContainer = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
`;

function Tabs(props) {
  return (
    <TabsContainer>
      {zip(TAB_IMAGES, props.tabs).map(([tabIcon, { title, subTitle, id }], index) => (
        <TabItem
          key={id}
          index={index}
          icon={tabIcon}
          title={title}
          subTitle={subTitle}
          selected={props.selected === index}
          switchTab={props.switchTab}
        />
      ))}
    </TabsContainer>
  );
}

Tabs.propTypes = {
  selected: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  switchTab: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  switchTab: () => {},
};

export default Tabs;
