import { Text, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './welcomebanner.style';

const WelcomeBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source='https://picsum.photos/seed/696/3000/2000'
        contentFit='cover'
        transition={1000}
      />
    </View>
  );
};

export default WelcomeBanner;
