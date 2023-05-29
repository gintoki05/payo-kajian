import { Tabs } from 'expo-router';

const AppLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='home' />
      <Tabs.Screen name='feed' />
    </Tabs>
  );
};
export default AppLayout;
