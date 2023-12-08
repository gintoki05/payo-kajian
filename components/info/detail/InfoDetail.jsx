import { Image } from 'expo-image';
import {
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './infodetail.style';
import { useLocalSearchParams } from 'expo-router';
import { COLORS } from '../../../constants';
import { formatDate } from '../../../utils/date';
import useFetchById from '../../../hook/useFetchById';
import Carousel from 'react-native-reanimated-carousel';

const InfoDetail = () => {
  // const [isDownloading, setIsDownloading] = useState(false);

  const params = useLocalSearchParams();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  // Function to download an image
  // const downloadImages = async (imageUrls) => {
  //   setIsDownloading(true);
  //   const downloadedAssets = new Set();

  //   try {
  //     const { status } = await MediaLibrary.requestPermissionsAsync();

  //     if (status !== 'granted') {
  //       console.error('Permission to access media library denied');
  //       return;
  //     }

  //     await Promise.all(
  //       imageUrls.map(async (imageUrl) => {
  //         const fileUri =
  //           FileSystem.documentDirectory + imageUrl.split('/').pop();

  //         const assetInfo = await MediaLibrary.getAssetInfoAsync(fileUri);
  //         if (assetInfo) {
  //           downloadedAssets.add(fileUri);
  //         } else {
  //           const downloadResult = await FileSystem.downloadAsync(
  //             imageUrl,
  //             fileUri
  //           );

  //           if (downloadResult.status === 200) {
  //             const asset = await MediaLibrary.createAssetAsync(fileUri);
  //             if (asset) {
  //               downloadedAssets.add(fileUri);
  //             }
  //           }
  //         }
  //       })
  //     );

  //     console.log(...downloadedAssets);

  //     if (downloadedAssets.length > 0) {
  //       await MediaLibrary.saveToLibraryAsync(...downloadedAssets);
  //       Alert.alert('Success', 'All images saved to gallery!');
  //     } else {
  //       console.error('Failed to download any images');
  //     }
  //   } catch (error) {
  //     console.error('Error saving images to gallery:', error);
  //   } finally {
  //     setIsDownloading(false);
  //   }
  // };

  // const { data, isLoading, error } = useFetch(`api/banners/${params.id}`, {
  //   populate: '*',
  // });
  const { data, isLoading, error } = useFetchById('info', params.id);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          {data.gambar_deskripsi && data.gambar_deskripsi.length > 0 && (
            <Carousel
              loop
              width={width * 0.95}
              height={height}
              scrollAnimationDuration={1000}
              mode='parallax'
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
                parallaxAdjacentItemScale: 0.8,
              }}
              data={data.gambar_deskripsi}
              renderItem={({ item }) => (
                <Image
                  style={styles.imageDeskripsi}
                  source={item}
                  contentFit='fill'
                  transition={3000}
                />
              )}
            />
          )}
          {/* <Button
            title='Download Gambar'
            disabled={isDownloading}
            onPress={() => downloadImages(data.gambar_deskripsi)}
          /> */}
        </View>
      )}
    </ScrollView>
  );
};
export default InfoDetail;
