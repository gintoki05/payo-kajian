import { Image } from 'expo-image';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './kajiandetailcomponent.style';
import { SIZES, icons } from '../../../constants';
import { useRouter } from 'expo-router';
import IconComponent from '../../common/icon/IconComponent';

const KajianDetailComponent = () => {
  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source='https://picsum.photos/seed/696/3000/2000'
          contentFit='cover'
          transition={1000}
        />
        <View style={styles.iconContainer}>
          <IconComponent
            iconUrl={icons.left}
            handlePress={() => router.back()}
            dimension='60%'
          />
        </View>
        <View style={{ padding: SIZES.small }}>
          <Text style={styles.title}>Fikih Rumah Tangga</Text>
          <View style={styles.dateContainer}>
            <IconComponent iconUrl={icons.calendar} dimension='60%' />
            <View style={{ rowGap: 4 }}>
              <Text style={styles.dateModeratorLocationTitle}>4 Mei 2023</Text>
              <Text style={styles.dateModeratorLocationTitle}>10.00 WIB</Text>
            </View>
          </View>
          <View style={styles.moderatorContainer}>
            <IconComponent iconUrl={icons.muslim} dimension='60%' />
            <Text style={styles.dateModeratorLocationTitle}>Ustadz Fulan</Text>
          </View>
          <View style={styles.locationContainer}>
            <IconComponent iconUrl={icons.compass} dimension='60%' />
            <Text style={styles.dateModeratorLocationTitle}>
              Masjid Bakti, Jl Sukabakti, Palembang
            </Text>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, rerum
            quod sapiente velit aut pariatur ad minima quas maxime autem eaque
            expedita esse asperiores sunt rem repellendus explicabo nostrum
            ipsam.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default KajianDetailComponent;
