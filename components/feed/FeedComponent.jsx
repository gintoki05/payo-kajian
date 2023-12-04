import { Text, View } from 'react-native';
import { styles } from './feedcomponent.style';
import Request from '../common/Request';

const FeedComponent = () => {
  return (
    <View style={styles.container}>
      <Text>
        Fitur lagi dibangun, nantikan info update selanjutnya di banner atau
        pengumuman ya! 🙌
      </Text>
      <Request />
    </View>
  );
};
export default FeedComponent;
