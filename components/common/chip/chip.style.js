import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    columnGap: 10,
    marginLeft: SIZES.medium,
  },
  chip: {
    backgroundColor: COLORS.paleOrange,
    borderRadius: SIZES.large,
    height: 30,
    justifyContent: 'center',
  },
  cityTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
    textAlign: 'center',
    marginHorizontal: SIZES.small,
  },
});
