import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';
import { styles } from './terbaru.style';
import { useCallback, useState } from 'react';

const Terbaru = () => {
  const [refreshing, setRefreshing] = useState(false);

  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch('jadwal-kajian', {
    range: [0, 4],
  });
  // const { data, isLoading, error } = useFetch('api/jadwal-kajians', {
  //   populate: {
  //     poster: {
  //       fields: ['url'],
  //     },
  //   },
  //   pagination: {
  //     page: 1,
  //     pageSize: 5,
  //   },
  // });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const Item = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push(`jadwal/${item.id}`);
      }}
    >
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={item.gambar}
          contentFit='cover'
          transition={1000}
        />

        <View style={styles.tanggalContainer}>
          <View>
            <Text style={styles.tanggal}>
              {new Date(item.tanggal).getDate()}
            </Text>
            <Text style={styles.bulan}>
              {new Date(item.tanggal).toLocaleString('id-ID', {
                month: 'short',
                year: '2-digit',
              })}
            </Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text
            style={styles.judulKajian}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item.judul}
          </Text>
          <Text style={styles.subTitle}>
            {item.pemateri} •{' '}
            {new Date(item.tanggal).toLocaleTimeString('id-ID', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })}{' '}
            WIB
          </Text>
          <Text style={styles.lokasi}>{item.lokasi}</Text>
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
        <View>
          <Text style={styles.headerTitle}>Terbaru</Text>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
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
