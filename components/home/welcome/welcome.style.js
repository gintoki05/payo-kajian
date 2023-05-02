import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  btnContainer: {
    marginTop: SIZES.small,
    alignItems: 'flex-end',
  },
  btnTitle: {
    color: COLORS.primary,
  },
});

export default styles;
