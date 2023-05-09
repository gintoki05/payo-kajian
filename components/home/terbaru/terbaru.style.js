import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    paddingBottom: SIZES.large,
    paddingHorizontal: SIZES.large,
    rowGap: SIZES.large,
  },
  headerTitle: {
    color: COLORS.chineseBlack,
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
});
