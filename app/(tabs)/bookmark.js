import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import BookmarkComponent from '../../components/bookmark/BookmarkComponent';

const Bookmark = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <BookmarkComponent />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default Bookmark;
