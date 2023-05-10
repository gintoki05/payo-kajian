import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.gray,
    width: '100%',
    height: 150,
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
