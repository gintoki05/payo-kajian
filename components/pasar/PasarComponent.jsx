import { FlatList, Text, View } from 'react-native';
import Request from '../common/Request';
import { styles } from './pasarcomponent.style';

const PasarComponent = () => {
  return (
    <FlatList>
      <View style={styles.container}>
        <Text style={styles.title}>
          Fitur lagi dibangun, nantikan info update selanjutnya di banner atau
          pengumuman ya! 🙌
        </Text>
        <Request />
      </View>
    </FlatList>
  );
};
export default PasarComponent;
