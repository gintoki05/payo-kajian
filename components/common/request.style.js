import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    rowGap: SIZES.medium,
  },
  title: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  button: {
    marginTop: SIZES.medium,
  },
});
