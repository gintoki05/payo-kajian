import { Button, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { styles } from './request.style';

const Request = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Kamu punya request atau masukkan untuk aplikasi PayoNgaji?
      </Text>
      <Button
        title='Request Disini'
        onPress={() =>
          WebBrowser.openBrowserAsync(
            'https://bit.ly/requestfiturpayongaji2023'
          )
        }
      />
      <Text style={styles.title}>
        Ssst, untuk fitur alquran dan jadwal sholat jangan direquest ya, soalnya
        saya belum ada open API resmi dari kemenag
      </Text>
    </View>
  );
};
export default Request;
