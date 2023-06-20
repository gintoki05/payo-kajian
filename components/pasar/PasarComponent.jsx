import { FlatList, ScrollView, Text, View } from 'react-native';
import Request from '../common/Request';
import { styles } from './pasarcomponent.style';

const PasarComponent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
          Fitur lagi dibangun, nantikan info update selanjutnya di banner atau
          pengumuman ya! 🙌
        </Text>
        <Request />
      </View>
    </ScrollView>
  );
};
export default PasarComponent;
