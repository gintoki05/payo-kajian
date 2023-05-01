import { Text, View } from 'react-native';
import { styles } from './jelajah.style';
import JelajahCard from '../../common/cards/jelajah/JelajahCard';

const Jelajah = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Jelajahi</Text>
        <JelajahCard />
      </View>
    </View>
  );
};
export default Jelajah;
