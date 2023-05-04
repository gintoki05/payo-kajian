import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  btnContainer: {
    marginTop: SIZES.small,
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.large,
  },
  btnTitle: {
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});

export default styles;
