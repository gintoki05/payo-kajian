import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import { COLORS, SIZES, icons } from '../../constants';
import InfoDetail from '../../components/info/detail/InfoDetail';
import { View } from 'react-native';

const InfoDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
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
          padding: SIZES.small,
        }}
      >
        <InfoDetail />
      </View>
    </SafeAreaView>
  );
};

export default InfoDetails;
