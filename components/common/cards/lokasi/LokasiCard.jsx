import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './lokasicard.style';
import { Image } from 'expo-image';
import { images } from '../../../../constants';
import { useRouter } from 'expo-router';

const LokasiCard = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.push('lokasi/1 ');
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={images.mosque}
              contentFit='cover'
              transition={1000}
              style={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Masjid Bakti</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={images.mosque}
              contentFit='cover'
              transition={1000}
              style={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Masjid Bakti</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Pressable>
  );
};
export default LokasiCard;
