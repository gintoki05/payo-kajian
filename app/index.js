import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../constants';
import Welcome from '../components/home/welcome/Welcome';
import Jelajah from '../components/home/jelajah/Jelajah';
import Terbaru from '../components/home/terbaru/Terbaru';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Welcome />
          <Jelajah />
          <Terbaru />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
