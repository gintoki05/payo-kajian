import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import InfoDetail from '../../components/info/detail/InfoDetail';
import { View } from 'react-native';
import IconComponent from '../../components/common/icon/IconComponent';

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
          padding: SIZES.small,
        }}
      >
        <InfoDetail />
      </View>
    </SafeAreaView>
  );
};

export default InfoDetails;
