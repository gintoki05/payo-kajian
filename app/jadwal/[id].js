import { Stack } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import { COLORS } from '../../constants';
import JadwalDetailComponent from '../../components/jadwal/detail/JadwalDetailComponent';

const JadwalDetail = () => {
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
        <JadwalDetailComponent />
      </View>
    </SafeAreaView>
  );
};
export default JadwalDetail;
