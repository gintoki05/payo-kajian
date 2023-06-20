import { Image } from 'expo-image';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from './jadwaldetailcomponent.style';
import { COLORS, SIZES, icons } from '../../../constants';
import { useRouter, useSearchParams } from 'expo-router';
import IconComponent from '../../common/icon/IconComponent';
import useFetch from '../../../hook/useFetch';
import { BASE_URL } from '../../../utils/http';
import { formatDate } from '../../../utils/date';
import useFetchById from '../../../hook/useFetchById';

const JadwalDetailComponent = () => {
  const router = useRouter();
  const params = useSearchParams();

  // const { data, isLoading, error } = useFetch(
  //   `api/jadwal-kajians/${params.id}`,
  //   {
  //     populate: {
  //       poster: {
  //         fields: ['url'],
  //       },
  //     },
  //   }
  // );

  const { data, isLoading, error } = useFetchById('jadwal-kajian', params.id);

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
          <Image
            style={styles.image}
            source={data.gambar}
            contentFit='cover'
            transition={1000}
          />
          <View style={styles.iconContainer}>
            <IconComponent
              iconUrl={icons.left}
              handlePress={() => router.back()}
              dimension='60%'
            />
          </View>
          <View style={{ padding: SIZES.small }}>
            <Text style={styles.title}>{data.judul}</Text>
            <View style={styles.dateContainer}>
              <IconComponent iconUrl={icons.calendar} dimension='60%' />
              <View style={{ rowGap: 4 }}>
                <Text style={styles.dateModeratorLocationTitle}>
                  {formatDate(data.tanggal)}
                </Text>
                <Text style={styles.dateModeratorLocationTitle}>
                  {new Date(data.tanggal).toLocaleTimeString('id-ID', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                  })}{' '}
                  WIB
                </Text>
              </View>
            </View>
            <View style={styles.moderatorContainer}>
              <IconComponent iconUrl={icons.muslim} dimension='60%' />
              <Text style={styles.dateModeratorLocationTitle}>
                {data.pemateri}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <IconComponent iconUrl={icons.compass} dimension='60%' />
              <Text style={styles.dateModeratorLocationTitle}>
                {data.lokasi}
              </Text>
            </View>
            <Text style={styles.description}>{data.deskripsi}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default JadwalDetailComponent;
