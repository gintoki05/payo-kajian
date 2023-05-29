import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './iconcomponent.style';
import { Image } from 'expo-image';

const IconComponent = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        contentFit='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default IconComponent;
