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
  petunjukButton: {
    backgroundColor: COLORS.primary,
    flex: 1,
    width: 150,
    marginTop: SIZES.large,
    borderRadius: SIZES.medium,
  },
  petunjukTitle: {
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    padding: SIZES.medium,
    textAlign: 'center',
  },
});
