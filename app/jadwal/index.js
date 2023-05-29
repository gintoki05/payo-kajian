import { SafeAreaView, View } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import { Stack, useRouter } from 'expo-router';
import JadwalCard from '../../components/common/cards/jadwal/JadwalCard';
import IconComponent from '../../components/common/icon/IconComponent';
import Chip from '../../components/common/chip/Chip';

const Jadwal = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: 'Jadwal Kajian',
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
        <View
          style={{
            padding: SIZES.medium,
          }}
        >
          <JadwalCard />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Jadwal;
