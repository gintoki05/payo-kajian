import { StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    rowGap: SIZES.large,
  },
  cardContainer: {
    backgroundColor: COLORS.gray,
    width: '100%',
    height: 100,
    borderRadius: SIZES.small,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
  },
});

export default styles;
