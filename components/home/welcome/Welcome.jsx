import { View, Text, TouchableOpacity } from 'react-native';

import styles from './welcome.style';
import WelcomeBanner from '../../common/banner/welcome/WelcomeBanner';
import HeaderTitle from '../../common/header/HeaderTitle';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <HeaderTitle />
        <WelcomeBanner />

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