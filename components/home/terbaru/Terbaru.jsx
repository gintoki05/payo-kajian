import { Text, View } from 'react-native';
import { styles } from './terbaru.style';
import JadwalCard from '../../common/cards/jadwal/JadwalCard';

const Terbaru = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Terbaru</Text>
        <JadwalCard />
        <JadwalCard />
      </View>
    </View>
  );
};
export default Terbaru;
