import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.medium,
  },
  cardContainer: {
    backgroundColor: COLORS.gray2,
    marginHorizontal: SIZES.small,
    height: 60,
    width: 60,
  },
});
