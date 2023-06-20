import { Dimensions, FlatList, Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './welcomebanner.style';
import { useRouter } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';
import { BASE_URL } from '../../../../utils/http';

const WelcomeBanner = ({ data }) => {
  const router = useRouter();
  const width = Dimensions.get('window').width;

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push(`info/${item.id}`);
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={item.gambar}
          contentFit='cover'
          transition={2000}
        />
      </View>
    </Pressable>
  );

  return (
    <Carousel
      loop
      width={width}
      height={150}
      autoPlay={true}
      mode='parallax'
      data={data}
      scrollAnimationDuration={1500}
      renderItem={renderItem}
    />
  );
};

export default WelcomeBanner;
