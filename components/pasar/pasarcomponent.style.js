import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    flex: 1,
  },
  searchContainer: {
    backgroundColor: 'grey',
  },
  title: {
    fontFamily: FONT.medium,
    color: COLORS.chineseBlack,
  },
});
