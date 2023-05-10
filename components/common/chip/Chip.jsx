import { ScrollView, Text, View } from 'react-native';
import { styles } from './chip.style';

const Chip = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.chipContainer}>
        <View style={styles.chip}>
          <Text style={styles.cityTitle}>Palembang</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Chip;
