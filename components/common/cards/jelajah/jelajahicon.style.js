import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.medium,
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    height: 50,
    width: 50,
  },
  title: {
    marginTop: SIZES.xSmall,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    justifyContent: 'space-between',
  },
});
