import { SafeAreaView, View } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import { Stack, useRouter } from 'expo-router';
import Chip from '../../components/common/chip/Chip';
import LokasiCard from '../../components/common/cards/lokasi/LokasiCard';
import IconComponent from '../../components/common/icon/IconComponent';

const Lokasi = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: 'Lokasi Kajian',
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <IconComponent
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <View style={{ rowGap: 10 }}>
        <Chip />
        <View style={{ padding: SIZES.medium }}>
          <LokasiCard />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Lokasi;
