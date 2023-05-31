import { FlatList, Pressable, ScrollView, View } from 'react-native';
import { Image } from 'expo-image';

import styles from './info.style';
import { useRouter } from 'expo-router';
import useFetch from '../../hook/useFetch';
import { BASE_URL } from '../../utils/http';

const Info = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('api/banners', { populate: '*' });

  const Item = ({ image }) => (
    <Pressable
      onPress={() => {
        router.push('/info/1');
      }}
    >
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={BASE_URL + image}
            contentFit='cover'
            transition={1000}
          />
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item image={item.attributes.gambar.data.attributes.url} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Info;
