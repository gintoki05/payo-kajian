import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { COLORS, icons } from '../../constants';
import { View } from 'react-native';
import LokasiDetailComponent from '../../components/lokasi/detail/LokasiDetailComponent';
import IconComponent from '../../components/common/icon/IconComponent';

const LokasiDetail = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: 'Detail Lokasi',
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

      <View
        style={{
          flex: 1,
        }}
      >
        <LokasiDetailComponent />
      </View>
    </SafeAreaView>
  );
};

export default LokasiDetail;
