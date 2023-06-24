import { View, Text, TouchableOpacity } from 'react-native';

import styles from './welcome.style';
import WelcomeBanner from '../../common/banner/welcome/WelcomeBanner';
import HeaderTitle from '../../common/header/HeaderTitle';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';

const Welcome = () => {
  const router = useRouter();

  // const { data, isLoading, error } = useFetch('api/banners', { populate: '*' });
  const { data } = useFetch('info', {
    range: [0, 3],
  });

  return (
    <View>
      <View style={styles.container}>
        <HeaderTitle />
        <WelcomeBanner data={data} />

        <TouchableOpacity
          onPress={() => {
            router.push('/info');
          }}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnTitle}>Lihat Semua</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Welcome;
