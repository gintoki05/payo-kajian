import { Pressable, Text, View } from 'react-native';

import { styles } from './jelajahicon.style';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { SIZES, icons } from '../../../../constants';
import { useState } from 'react';
import ModalJelajah from '../../modals/jelajah/ModalJelajah';
import BadgeSoon from '../../badge/BadgeSoon';

const JelajahIcon = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ padding: SIZES.xSmall }}>
      <ModalJelajah
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <View style={styles.container}>
        <Pressable onPress={() => router.push('/jadwal')}>
          <View style={styles.cardContainer}>
            <Image
              source={icons.schedule}
              contentFit='fill'
              style={styles.card}
            />
            <Text style={styles.title}>Jadwal</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('/lokasi')}>
          <View style={styles.cardContainer}>
            <Image source={icons.place} contentFit='fill' style={styles.card} />
            <Text style={styles.title}>Lokasi</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('/ibadah')}>
          <View style={styles.cardContainer}>
            <Image source={icons.kitab} contentFit='fill' style={styles.card} />
            <Text style={styles.title}>Ibadah</Text>
            <BadgeSoon />
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('/pasar')}>
          <View style={styles.cardContainer}>
            <Image
              source={icons.shopping}
              contentFit='fill'
              style={styles.card}
            />
            <Text style={styles.title}>Pasar</Text>
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
        {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.cardContainer}>
            <Image source={icons.menu} contentFit='fill' style={styles.card} />
            <Text style={styles.title}>Lainnya</Text>
          </View>
        </Pressable> */}
      </View>
    </View>
  );
};
export default JelajahIcon;
