import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT } from '../../constants';

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'feed') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let labelName;

          if (route.name === 'index') {
            labelName = 'Home';
          } else if (route.name === 'feed') {
            labelName = 'Feed';
          } else if (route.name === 'bookmark') {
            labelName = 'Saved';
          }
          return (
            <View style={styles.tabBarLabel}>
              <Text style={[styles.tabLabel, { color }]}>{labelName}</Text>
            </View>
          );
        },
        tabBarIconStyle: styles.tabBarIcon,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name='index' />
      <Tabs.Screen name='feed' />
      <Tabs.Screen name='bookmark' />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontFamily: FONT.medium,
  },
  tabBarLabel: {
    marginBottom: 5,
  },
  tabBarIcon: {
    marginTop: 3,
  },
});

export default AppLayout;
