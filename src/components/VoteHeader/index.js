import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  HeaderContent,
  NameText,
  ContactText,
  DescText,
  renderLogo,
  renderBackground,
} from './style';

function VoteHeader({ backgroundImageUrl, logoUrl, name, contact, desc, style, coin }) {
  return (
    <Container style={style}>
      {renderBackground(backgroundImageUrl)}
      <HeaderContent>
        {renderLogo(logoUrl, coin)}
        <NameText numberOfLines={1}>{name}</NameText>
      </HeaderContent>
      <ContactText numberOfLines={1}>{contact}</ContactText>
      <DescText>{desc}</DescText>
    </Container>
  );
}

VoteHeader.propTypes = {
  backgroundImageUrl: PropTypes.string,
  logoUrl: PropTypes.string,
  name: PropTypes.string,
  contact: PropTypes.string,
  desc: PropTypes.string,
  style: PropTypes.any,
  coin: PropTypes.string,
};

VoteHeader.defaultProps = {
  backgroundImageUrl: '',
  logoUrl: '',
  name: '',
  contact: '',
  desc: '',
  coin: 'EOS',
  style: {},
};

export default VoteHeader;
