import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import IconComponent from '../../components/common/icon/IconComponent';
import { COLORS, icons } from '../../constants';
import PasarComponent from '../../components/pasar/PasarComponent';

const Pasar = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: 'Pasar',
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
        <PasarComponent />
      </View>
    </SafeAreaView>
  );
};
export default Pasar;
