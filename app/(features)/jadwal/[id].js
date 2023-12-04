import { Stack } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import { COLORS } from '../../../constants';
import JadwalDetailComponent from '../../../components/jadwal/detail/JadwalDetailComponent';

const JadwalDetail = () => {
  return (
    <>
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
    </>
  );
};
export default JadwalDetail;
