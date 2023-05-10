import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.small,
  },
  cardContainer: {
    backgroundColor: COLORS.gray,
    borderTopEndRadius: SIZES.medium,
    width: '100%',
    height: 100,
  },
  image: {
    height: 100,
    width: '100%',
    borderTopEndRadius: SIZES.medium,
  },
  titleContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    position: 'absolute',
    width: '100%',
    height: '50%',
    bottom: 0,
    padding: SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
});
