import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { COLORS } from '../../constants';

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.paleOrange }}>
      <StatusBar style='auto' />
      <Slot />
    </SafeAreaView>
  );
};
export default Layout;
