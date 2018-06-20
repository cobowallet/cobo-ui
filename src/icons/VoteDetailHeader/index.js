import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function VoteDetailHeader({ style, uri }) {
  if (uri && uri.length > 0) {
    return <Image style={style} source={{ uri }} />;
  }
  return <Image style={style} source={require('./img/default-vote-header.png')} />;
}

VoteDetailHeader.propTypes = {
  uri: PropTypes.string,
};

VoteDetailHeader.defaultProps = {
  uri: '',
};

export default VoteDetailHeader;
