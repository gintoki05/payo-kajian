import { Dimensions, FlatList, Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './welcomebanner.style';
import { useRouter } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';

const dummy = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/696/3000/2000',
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/693/3000/2000',
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/666/3000/2000',
  },
];

const WelcomeBanner = () => {
  const router = useRouter();
  const width = Dimensions.get('window').width;

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push('info/1');
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={item.image}
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
      data={dummy}
      scrollAnimationDuration={1500}
      renderItem={renderItem}
    />
  );
};

export default WelcomeBanner;
