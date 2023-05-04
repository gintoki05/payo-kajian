import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLORS.chineseBlack,
    fontSize: SIZES.xLarge,
    textAlign: 'left',
    fontFamily: FONT.bold,
  },
  date: {
    marginTop: 5,
    color: COLORS.primary,
    fontFamily: FONT.semiBold,
  },
});
