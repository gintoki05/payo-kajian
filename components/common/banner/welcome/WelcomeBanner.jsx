import { Pressable, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './welcomebanner.style';

const WelcomeBanner = () => {
  return (
    <Pressable onPress={() => {}}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source='https://picsum.photos/seed/696/3000/2000'
          contentFit='cover'
          transition={1000}
        />
      </View>
    </Pressable>
  );
};

export default WelcomeBanner;
