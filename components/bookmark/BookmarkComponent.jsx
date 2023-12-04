import { Text, View } from 'react-native';
import Request from '../common/Request';
import { styles } from './bookmarkcomponent.style';

const BookmarkComponent = () => {
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
export default BookmarkComponent;
