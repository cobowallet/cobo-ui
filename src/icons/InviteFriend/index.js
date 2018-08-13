import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function InviteFriend({ style, type }) {
  return (
    <Image
      style={style}
      source={
        type === 'gray'
          ? require('./img/invite-friend.png')
          : require('./img/invite-friend-red.png')
      }
    />
  );
}

InviteFriend.propTypes = {
  type: PropTypes.oneOf(['red', 'gray']),
};

InviteFriend.defaultProps = {
  type: 'gray',
};

export default InviteFriend;
