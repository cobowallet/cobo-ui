import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const Icon = ({ type, style }) => {
  const getSource = type => {
    switch (type) {
      case 'cloud':
        return require('./img/drawer_cloud.png');
      case 'hd':
        return require('./img/drawer_hd.png');
    }
  };

  return <Image source={getSource(type)} style={{ resizeMode: 'contain', ...style }} />;
};

Icon.propTypes = {
  type: PropTypes.oneOf(['cloud', 'hd']).isRequired,
};

export default Icon;
