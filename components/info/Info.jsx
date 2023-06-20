import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Image } from 'expo-image';

import styles from './info.style';
import { useRouter } from 'expo-router';
import useFetch from '../../hook/useFetch';
import { BASE_URL } from '../../utils/http';

const Info = () => {
  const router = useRouter();

  // const { data, isLoading, error } = useFetch('api/banners', { populate: '*' });
  const { data, isLoading, error } = useFetch('info');

  const Item = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push(`info/${item.id}`);
      }}
    >
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={item.gambar}
            contentFit='cover'
            transition={1000}
          />
        </View>
      </View>
    </Pressable>
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : error ? (
        <Text>Ada masalah nih, coba lagi atau hubungi operator</Text>
      ) : data.length === 0 ? (
        <Text>Tidak ada data</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

export default Info;
