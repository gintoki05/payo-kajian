import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  headerTitle: {
    fontFamily: FONT.bold,
    color: COLORS.chineseBlack,
    fontSize: SIZES.large,
  },
});
