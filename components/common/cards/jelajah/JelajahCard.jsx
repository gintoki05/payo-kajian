import { ScrollView, Text, View } from 'react-native';

import { styles } from './jelajahcard.style';

const JelajahCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}></View>
      <View style={styles.cardContainer}></View>
      <View style={styles.cardContainer}></View>
      <View style={styles.cardContainer}></View>
    </View>
  );
};
export default JelajahCard;
