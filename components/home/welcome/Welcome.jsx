import { View, Text, TouchableOpacity } from 'react-native';

import styles from './welcome.style';
import WelcomeBanner from '../../common/banner/welcome/WelcomeBanner';
import { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/date';

const Welcome = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    // Ambil tanggal sekarang
    const now = formatDate(new Date().toISOString());
    setDate(now);
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.salam}>Assalamualaikum!</Text>
        <Text style={styles.tanggal}>{date}</Text>

        <WelcomeBanner />

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnTitle}>Lihat Semua</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Welcome;
