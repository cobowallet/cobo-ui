import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const Logo = ({ type, style }) => {
  const getSource = type => {
    switch (type) {
      case 'CLOUD':
        return require('./img/drawer_cloud.png');
      case 'HD':
        return require('./img/drawer_hd.png');
      case 'WATCH_ONLY':
        return require('./img/drawer_watch_only.png');
    }
  };

  return <Image source={getSource(type)} style={{ resizeMode: 'contain', ...style }} />;
};

Logo.propTypes = {
  type: PropTypes.oneOf(['CLOUD', 'HD', 'WATCH_ONLY']).isRequired,
};

export default Logo;
