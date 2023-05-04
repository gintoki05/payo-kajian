import { Pressable, ScrollView, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './info.style';
import { useRouter } from 'expo-router';

const Info = () => {
  const router = useRouter();

  return (
    <ScrollView>
      <Pressable
        onPress={() => {
          router.push('/info/1');
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source='https://picsum.photos/seed/696/3000/2000'
            contentFit='cover'
            transition={1000}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Info;
