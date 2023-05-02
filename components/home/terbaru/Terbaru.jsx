import { Text, View } from 'react-native';
import { styles } from './terbaru.style';
import TerbaruCard from '../../common/cards/terbaru/TerbaruCard';

const Terbaru = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Terbaru</Text>
        <TerbaruCard />
        <TerbaruCard />
        <TerbaruCard />
        <TerbaruCard />
      </View>
    </View>
  );
};
export default Terbaru;
