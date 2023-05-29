import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    padding: 4,
    borderRadius: SIZES.small,
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: 10,
    color: 'white',
  },
});
