import { Pressable, ScrollView, Text, View } from 'react-native';

import { styles } from './jelajahcard.style';

const JelajahCard = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('press')}>
        <View>
          <View style={styles.cardContainer}></View>
          <Text style={styles.title}>Jadwal</Text>
        </View>
      </Pressable>
      <View>
        <View style={styles.cardContainer}></View>
        <Text style={styles.title}>Lokasi</Text>
      </View>
      <View>
        <View style={styles.cardContainer}></View>
        <Text style={styles.title}>Jadwal</Text>
      </View>
      <View>
        <View style={styles.cardContainer}></View>
        <Text style={styles.title}>Jadwal</Text>
      </View>
    </View>
  );
};
export default JelajahCard;
