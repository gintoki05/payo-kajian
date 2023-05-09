import { Pressable, ScrollView, Text, View } from 'react-native';

import { styles } from './jelajahicon.style';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { icons } from '../../../../constants';

const JelajahIcon = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('jadwal')}>
        <View style={styles.cardContainer}>
          <Image
            source={icons.schedule}
            contentFit='fill'
            style={styles.card}
          />
          <Text style={styles.title}>Jadwal</Text>
        </View>
      </Pressable>
      <View style={styles.cardContainer}>
        <Image source={icons.place} contentFit='fill' style={styles.card} />
        <Text style={styles.title}>Lokasi</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <Text style={styles.title}>Loker</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <Text style={styles.title}>Jadwal</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <Text style={styles.title}>Jadwal</Text>
      </View>
    </View>
  );
};
export default JelajahIcon;
