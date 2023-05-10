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
      <Pressable onPress={() => router.push('lokasi')}>
        <View style={styles.cardContainer}>
          <Image source={icons.place} contentFit='fill' style={styles.card} />
          <Text style={styles.title}>Lokasi</Text>
        </View>
      </Pressable>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <Text style={styles.title}>Umroh</Text>
      </View>
      <Pressable onPress={() => router.push('loker')}>
        <View style={styles.cardContainer}>
          <Image source={icons.hiring} contentFit='fill' style={styles.card} />
          <Text style={styles.title}>Loker</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => router.push('lainnya')}>
        <View style={styles.cardContainer}>
          <Image source={icons.menu} contentFit='fill' style={styles.card} />
          <Text style={styles.title}>Lainnya</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default JelajahIcon;
