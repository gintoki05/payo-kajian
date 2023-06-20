import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';
import { BASE_URL } from '../../../utils/http';
import { styles } from './terbaru.style';

const Terbaru = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('api/jadwal-kajians', {
    populate: {
      poster: {
        fields: ['url'],
      },
    },
    pagination: {
      page: 1,
      pageSize: 5,
    },
  });

  const Item = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push(`jadwal/${item.id}`);
      }}
    >
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={BASE_URL + item.attributes.poster.data.attributes.url}
          contentFit='cover'
          transition={1000}
        />

        <View style={styles.tanggalContainer}>
          <View>
            <Text style={styles.tanggal}>
              {new Date(item.attributes.tanggal).getDate()}
            </Text>
            <Text style={styles.bulan}>
              {new Date(item.attributes.tanggal).toLocaleString('id-ID', {
                month: 'short',
                year: '2-digit',
              })}
            </Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.judulKajian}>{item.attributes.judul}</Text>
          <Text style={styles.subTitle}>
            {item.attributes.pemateri} •{' '}
            {new Date(item.attributes.tanggal).toLocaleTimeString('id-ID', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })}{' '}
            WIB
          </Text>
          <Text style={styles.lokasi}>{item.attributes.lokasi}</Text>
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
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Terbaru</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default Terbaru;
