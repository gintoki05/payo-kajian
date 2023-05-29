import { Pressable, ScrollView, Text, View } from 'react-native';

import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { SIZES, icons } from '../../../../constants';
import { styles } from './jelajahiconmodal.style';
import BadgeSoon from '../../badge/BadgeSoon';

const JelajahIconModal = () => {
  const router = useRouter();

  return (
    <View style={{ padding: SIZES.small }}>
      <View style={styles.container}>
        <Pressable onPress={() => router.push('/umroh')}>
          <View style={styles.cardContainer}>
            <Image source={icons.kaaba} contentFit='fill' style={styles.card} />
            <Text style={styles.title}>Umroh</Text>
            <BadgeSoon />
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('/loker')}>
          <View style={styles.cardContainer}>
            <Image
              source={icons.hiring}
              contentFit='fill'
              style={styles.card}
            />
            <Text style={styles.title}>Loker</Text>
            <BadgeSoon />
          </View>
        </Pressable>
      </View>
      {/* --------------------------------------------- */}
      {/* --------------------------------------------- */}
      {/* <View style={styles.container}>
        <Pressable onPress={() => router.push('jadwal')}>
          <View style={styles.cardContainer}>
            <Image
              source={icons.schedule}
              contentFit='fill'
              style={styles.card}
            />
            <Text style={styles.title}>Sekolah</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('lokasi')}>
          <View style={styles.cardContainer}>
            <Image source={icons.place} contentFit='fill' style={styles.card} />
            <Text style={styles.title}>Umroh</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('loker')}>
          <View style={styles.cardContainer}>
            <Image
              source={icons.hiring}
              contentFit='fill'
              style={styles.card}
            />
            <Text style={styles.title}>Loker</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('lainnya')}>
          <View style={styles.cardContainer}>
            <Image source={icons.menu} contentFit='fill' style={styles.card} />
            <Text style={styles.title}>Lainnya</Text>
          </View>
        </Pressable>
      </View> */}
    </View>
  );
};
export default JelajahIconModal;
