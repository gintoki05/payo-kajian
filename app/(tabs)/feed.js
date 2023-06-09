import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../constants/theme';

const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Feed</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Feed;
