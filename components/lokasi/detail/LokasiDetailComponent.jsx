import { Text, View } from 'react-native';
import { styles } from './lokasidetailcomponent.style';
import { Image } from 'expo-image';
import { SIZES, images } from '../../../constants';

const LokasiDetailComponent = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={images.mosque}
          contentFit='cover'
          transition={1000}
          style={styles.image}
        />
        <View style={{ padding: SIZES.medium, rowGap: SIZES.xSmall }}>
          <Text style={styles.title}>Masjid Bakti</Text>
          <Text>Jl. SukaBakti, KM 6.5, Palembang</Text>
        </View>
      </View>
    </View>
  );
};
export default LokasiDetailComponent;
