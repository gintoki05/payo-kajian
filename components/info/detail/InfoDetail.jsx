import { Image } from 'expo-image';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from './infodetail.style';
import useFetch from '../../../hook/useFetch';
import { useSearchParams } from 'expo-router';
import { COLORS } from '../../../constants';
import { BASE_URL } from '../../../utils/http';
import { formatDate } from '../../../utils/date';

const InfoDetail = () => {
  const params = useSearchParams();

  const { data, isLoading, error } = useFetch(`api/banners/${params.id}`, {
    populate: '*',
  });

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
          <Text style={styles.title}>{data.attributes.judul}</Text>
          <Text style={styles.date}>
            {data.attributes.daerah} | {formatDate(data.attributes.tanggal)}
          </Text>
          <Image
            style={styles.image}
            source={BASE_URL + data.attributes.gambar.data.attributes.url}
            contentFit='cover'
            transition={1000}
          />
          <Text style={styles.description}>{data.attributes.deskripsi}</Text>
        </View>
      )}
    </ScrollView>
  );
};
export default InfoDetail;
