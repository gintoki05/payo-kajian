import { StyleSheet } from 'react-native';
import { FONT, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: SIZES.small,
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
    fontFamily: FONT.regular,
    justifyContent: 'space-between',
  },
});
