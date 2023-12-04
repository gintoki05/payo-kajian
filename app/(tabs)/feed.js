import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import FeedComponent from '../../components/feed/FeedComponent';

const Feed = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <FeedComponent />
      {/* </ScrollView> */}
    </>
  );
};
export default Feed;
