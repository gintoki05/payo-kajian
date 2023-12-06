import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './lokasicard.style';
import { Image } from 'expo-image';
import { images } from '../../../../constants';
import { useRouter } from 'expo-router';
import useFetch from '../../../../hook/useFetch';

const LokasiCard = () => {
  const router = useRouter();

  // const { data, isLoading, error } = useFetch('api/lokasis', {
  //   populate: {
  //     foto: {
  //       fields: ['url'],
  //     },
  //   },
  // });

  const { data, isLoading, error } = useFetch('lokasi');

  const Item = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push(`lokasi/${item.id}`);
      }}
    >
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            source={item.gambar}
            contentFit='cover'
            transition={1000}
            style={styles.image}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.nama}</Text>
          </View>
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
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};
export default LokasiCard;
