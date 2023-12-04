import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import FeedComponent from '../../components/feed/FeedComponent';

const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <FeedComponent />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default Feed;
