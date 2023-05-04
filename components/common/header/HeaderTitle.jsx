import { Text, View } from 'react-native';
import { styles } from './headertitle.style';

import { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/date';
import { COLORS } from '../../../constants';

const HeaderTitle = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    // Ambil tanggal sekarang
    const now = formatDate(new Date().toISOString());
    setDate(now);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assalamualaikum</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};
export default HeaderTitle;
