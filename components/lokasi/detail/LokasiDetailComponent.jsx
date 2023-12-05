import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './lokasidetailcomponent.style';
import { Image } from 'expo-image';
import { COLORS, SIZES, images } from '../../../constants';
import { useRouter, useLocalSearchParams } from 'expo-router';
import useFetchById from '../../../hook/useFetchById';
import * as Linking from 'expo-linking';

const LokasiDetailComponent = () => {
  const params = useLocalSearchParams();

  // const { data, isLoading, error } = useFetch(`api/lokasis/${params.id}`, {
  //   populate: {
  //     foto: {
  //       fields: ['url'],
  //     },
  //   },
  // });

  const { data, isLoading, error } = useFetchById('lokasi', params.id);

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
            source={data.gambar}
            contentFit='cover'
            transition={1000}
            style={styles.image}
          />
          <View style={{ padding: SIZES.medium, rowGap: SIZES.xSmall }}>
            <Text style={styles.title}>{data.nama}</Text>
            <Text>{data.alamat}</Text>
            {data.lainnya === '' || null ? (
              ''
            ) : (
              <View style={styles.petunjukButton}>
                <Pressable onPress={() => Linking.openURL(data.lainnya)}>
                  <Text style={styles.petunjukTitle}>Petunjuk Arah</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default LokasiDetailComponent;
