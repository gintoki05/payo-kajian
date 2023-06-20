import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from './lokasidetailcomponent.style';
import { Image } from 'expo-image';
import { COLORS, SIZES, images } from '../../../constants';
import { useRouter, useSearchParams } from 'expo-router';
import useFetch from '../../../hook/useFetch';
import { BASE_URL } from '../../../utils/http';

const LokasiDetailComponent = () => {
  const params = useSearchParams();

  const { data, isLoading, error } = useFetch(`api/lokasis/${params.id}`, {
    populate: {
      foto: {
        fields: ['url'],
      },
    },
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
        <View style={styles.cardContainer}>
          <Image
            source={BASE_URL + data.attributes.foto.data.attributes.url}
            contentFit='cover'
            transition={1000}
            style={styles.image}
          />
          <View style={{ padding: SIZES.medium, rowGap: SIZES.xSmall }}>
            <Text style={styles.title}>{data.attributes.nama}</Text>
            <Text>{data.attributes.alamat}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default LokasiDetailComponent;
