import { ScrollView, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './info.style';

const Info = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source='https://picsum.photos/seed/696/3000/2000'
          contentFit='cover'
          transition={1000}
        />
      </View>
    </ScrollView>
  );
};

export default Info;
