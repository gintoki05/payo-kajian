import { Image } from 'expo-image';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './infodetail.style';

const InfoDetail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Judul Berita</Text>
        <Text style={styles.date}>Palembang, 4 Mei 2023</Text>
        <Image
          style={styles.image}
          source='https://picsum.photos/seed/696/3000/2000'
          contentFit='cover'
          transition={1000}
        />
        <Text style={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, rerum
          quod sapiente velit aut pariatur ad minima quas maxime autem eaque
          expedita esse asperiores sunt rem repellendus explicabo nostrum ipsam.
        </Text>
      </View>
    </ScrollView>
  );
};
export default InfoDetail;
