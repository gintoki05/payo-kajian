import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import KajianDetail from '../../components/kajian/detail/KajianDetail';
import Icon from '../../components/common/icon/Icon';

const KajianDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View
        style={{
          flex: 1,
        }}
      >
        <KajianDetail />
      </View>
    </SafeAreaView>
  );
};
export default KajianDetails;
