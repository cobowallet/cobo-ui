import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function VoteDetailHeader({ style, uri, ...otherProps }) {
  if (uri && uri.length > 0) {
    return <Image style={style} source={{ uri }} resizeMode={'stretch'} {...otherProps} />;
  }
  return (
    <Image
      style={style}
      source={require('./img/default-vote-header.png')}
      resizeMode={'stretch'}
      {...otherProps}
    />
  );
}

VoteDetailHeader.propTypes = {
  uri: PropTypes.string,
};

VoteDetailHeader.defaultProps = {
  uri: '',
};

export default VoteDetailHeader;
