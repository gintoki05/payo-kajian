import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';
import { styles } from './jadwalcard.style';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import useFetch from '../../../../hook/useFetch';

const JadwalCard = () => {
  const router = useRouter();

  // const { data, isLoading, error } = useFetch('api/jadwal-kajians', {
  //   populate: {
  //     poster: {
  //       fields: ['url'],
  //     },
  //   },
  // });

  const { data, isLoading, error } = useFetch('jadwal-kajian');

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
          <Text style={styles.judulKajian}>{item.judul}</Text>
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

export default JadwalCard;
