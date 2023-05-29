import { Text, View } from 'react-native';
import { styles } from './soon.style';

const Soon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Fitur lagi dibangun, nantikan info update selanjutnya di banner atau
        pengumuman ya! 🙌
      </Text>
      <Request />
    </View>
  );
};
export default Soon;
