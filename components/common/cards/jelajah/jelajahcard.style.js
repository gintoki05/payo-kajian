import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.medium,
  },
  cardContainer: {
    backgroundColor: COLORS.gray2,
    height: 60,
    width: 60,
    borderRadius: 90,
  },
  title: {
    marginTop: SIZES.xSmall,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
  },
});
