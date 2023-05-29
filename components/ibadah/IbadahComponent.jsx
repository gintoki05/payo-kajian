import { Text, View } from 'react-native';
import { styles } from './ibadahcomponent.style';
import Request from '../common/Request';

const IbadahComponent = () => {
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
export default IbadahComponent;
