import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../../constants';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View } from 'react-native';

const Layout = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      {/* <StatusBar style='auto' /> */}
      <Slot />
    </View>
  );
};
export default Layout;
