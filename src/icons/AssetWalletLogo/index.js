import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const Icon = ({ type }) => {
  const getSource = type => {
    switch (type) {
      case 'cloud':
        return require('./img/drawer_cloud.png');
      case 'hd':
        return require('./img/drawer_hd.png');
    }
  };

  return (
    <Image source={getSource(type)} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
  );
};

Icon.propTypes = {
  type: PropTypes.arrayOf(['cloud', 'hd']).isRequired,
};

export default Icon;
