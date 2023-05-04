import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    height: 135,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderRadius: SIZES.small,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
  },
});

export default styles;
