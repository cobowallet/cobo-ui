import React from 'react';
import { Image, View } from 'react-native';

function ContactUsSms({ style }) {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <Image source={require('./img/sms.png')} />
      <Image style={{ marginLeft: 16 }} source={require('./img/sms-menu.png')} />
    </View>
  );
}

ContactUsSms.propTypes = {};

ContactUsSms.defaultProps = {};

export default ContactUsSms;
