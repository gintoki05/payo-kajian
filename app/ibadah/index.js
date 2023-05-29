import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import IconComponent from '../../components/common/icon/IconComponent';
import { COLORS, icons } from '../../constants';
import IbadahComponent from '../../components/ibadah/IbadahComponent';

const Ibadah = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: 'Ibadah',
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
        <IbadahComponent />
      </View>
    </SafeAreaView>
  );
};
export default Ibadah;
