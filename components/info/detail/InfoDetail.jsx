import { Image } from 'expo-image';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from './infodetail.style';
import { useSearchParams } from 'expo-router';
import { COLORS } from '../../../constants';
import { formatDate } from '../../../utils/date';
import useFetchById from '../../../hook/useFetchById';

const InfoDetail = () => {
  const params = useSearchParams();

  // const { data, isLoading, error } = useFetch(`api/banners/${params.id}`, {
  //   populate: '*',
  // });
  const { data, isLoading, error } = useFetchById('info', params.id);

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : error ? (
        <Text>Something Went Wrong</Text>
      ) : data.length === 0 ? (
        <Text>Tidak Ada Data</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{data.judul}</Text>
          <Text style={styles.date}>
            {data.daerah} | {formatDate(data.tanggal)}
          </Text>
          <Image
            style={styles.image}
            source={data.gambar}
            contentFit='cover'
            transition={1000}
          />
          <Text style={styles.description}>{data.deskripsi}</Text>
        </View>
      )}
    </ScrollView>
  );
};
export default InfoDetail;
