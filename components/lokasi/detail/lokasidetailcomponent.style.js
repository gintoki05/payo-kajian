import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flex: 1,
  },
  image: {
    height: 150,
    width: '100%',
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.chineseBlack,
  },
});
