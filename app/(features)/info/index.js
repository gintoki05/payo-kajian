import { SafeAreaView, View } from 'react-native';
import { COLORS, SIZES, icons } from '../../../constants';
import { Stack, useRouter } from 'expo-router';
import Info from '../../../components/info/Info';
import IconComponent from '../../../components/common/icon/IconComponent';

const InfoAll = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Info',
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
        <Info />
      </View>
    </>
  );
};
export default InfoAll;
