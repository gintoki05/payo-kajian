import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    GilroyRegular: require('../assets/fonts/Gilroy-Regular.ttf'),
    GilroyMedium: require('../assets/fonts/Gilroy-Medium.ttf'),
    GilroySemiBold: require('../assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyBold: require('../assets/fonts/Gilroy-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack onLayout={onLayoutRootView}>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
