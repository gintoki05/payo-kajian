import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import InfoDetail from '../../components/info/detail/InfoDetail';
import { View } from 'react-native';
import Icon from '../../components/common/icon/Icon';
import LokasiDetailComponent from '../../components/lokasi/detail/LokasiDetailComponent';

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
        }}
      >
        <LokasiDetailComponent />
      </View>
    </SafeAreaView>
  );
};

export default LokasiDetail;
