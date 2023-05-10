import { Stack } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import { COLORS } from '../../constants';
import KajianDetailComponent from '../../components/kajian/detail/KajianDetailComponent';

const KajianDetails = () => {
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
        <KajianDetailComponent />
      </View>
    </SafeAreaView>
  );
};
export default KajianDetails;
