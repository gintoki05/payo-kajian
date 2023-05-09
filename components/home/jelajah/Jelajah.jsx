import { Text, View } from 'react-native';
import { styles } from './jelajah.style';
import JelajahIcon from '../../common/cards/jelajah/JelajahIcon';

const Jelajah = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Jelajahi</Text>
        <JelajahIcon />
      </View>
    </View>
  );
};
export default Jelajah;
