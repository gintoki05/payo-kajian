import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { router } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    GilroyRegular: require('../assets/fonts/Gilroy-Regular.ttf'),
    GilroyMedium: require('../assets/fonts/Gilroy-Medium.ttf'),
    GilroySemiBold: require('../assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyBold: require('../assets/fonts/Gilroy-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Slot />;
};
export default Layout;
