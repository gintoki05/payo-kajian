import { SafeAreaView, View } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import { Stack, useRouter } from 'expo-router';
import Info from '../../components/info/Info';
import Icon from '../../components/common/icon/Icon';
import JadwalCard from '../../components/common/cards/jadwal/JadwalCard';

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
            <Icon
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <JadwalCard />
      </View>
    </SafeAreaView>
  );
};
export default Jadwal;
