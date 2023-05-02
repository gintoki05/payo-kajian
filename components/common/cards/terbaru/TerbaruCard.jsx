import { Text, View } from 'react-native';
import { styles } from './terbarucard.style';
import { Image } from 'expo-image';

const TerbaruCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source='https://picsum.photos/seed/696/3000/2000'
          contentFit='cover'
          transition={1000}
        />

        <View style={styles.tanggalContainer}>
          <View>
            <Text style={styles.tanggal}>02</Text>
            <Text style={styles.bulan}>Mei 23</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.judulKajian}>Judul Kajian</Text>
          <Text style={styles.subTitle}>Ustadz Fulan • 10:00 WIB</Text>
          <Text style={styles.lokasi}>Masjid Bakti, Palembang</Text>
        </View>
      </View>
    </View>
  );
};

export default TerbaruCard;
