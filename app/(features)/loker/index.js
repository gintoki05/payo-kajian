import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import IconComponent from '../../../components/common/icon/IconComponent';
import { COLORS, icons } from '../../../constants';
import Soon from '../../../components/common/soon/Soon';
import Request from '../../../components/common/Request';

const Loker = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Loker',
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
          padding: 10,
        }}
      >
        <Request />
      </View>
    </>
  );
};
export default Loker;
