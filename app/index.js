import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../constants';
import Welcome from '../components/home/welcome/Welcome';
import Jelajah from '../components/home/jelajah/Jelajah';
import Terbaru from '../components/home/terbaru/Terbaru';
import Iklan from '../components/home/iklan/Iklan';

// Ini untuk non tab

// const Home = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//       />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View
//           style={{
//             flex: 1,
//           }}
//         >
//           <Welcome />
//           <Jelajah />
//           {/* <Iklan /> */}
//           <Terbaru />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Home;

// Untuk tabs nanti, hapus seluruh kode diatas

import { Redirect } from 'expo-router';

const Index = () => {
  return <Redirect href='/home' />;
};
export default Index;
