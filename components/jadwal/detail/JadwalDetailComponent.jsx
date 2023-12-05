import { Image } from 'expo-image';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { styles } from './jadwaldetailcomponent.style';
import { COLORS, SIZES, icons } from '../../../constants';
import { useRouter, useLocalSearchParams } from 'expo-router';
import IconComponent from '../../common/icon/IconComponent';
import { formatDate } from '../../../utils/date';
import useFetchById from '../../../hook/useFetchById';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const JadwalDetailComponent = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

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

  const handleShare = async () => {
    try {
      const imageUrl = data.gambar; // Dummy image URL
      const judul = data.judul.replace(/\s/g, '');
      const fileUri = FileSystem.cacheDirectory + `${judul}.jpg`; // Local file path where the image will be saved

      // Download the image from the URL
      await FileSystem.downloadAsync(imageUrl, fileUri);

      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

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
            contentFit='fill'
            transition={1000}
          />
          <View style={styles.iconLeftContainer}>
            <IconComponent
              iconUrl={icons.left}
              handlePress={() => router.back()}
              dimension='60%'
            />
          </View>
          <View style={styles.iconRightContainer}>
            <IconComponent
              iconUrl={icons.share}
              handlePress={handleShare}
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
