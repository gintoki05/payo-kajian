import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  salam: {
    fontWeight: 'bold',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  tanggal: {
    marginTop: SIZES.xSmall,
  },
  btnContainer: {
    marginTop: SIZES.small,
    alignItems: 'flex-end',
  },
  btnTitle: {
    color: COLORS.primary,
  },
});

export default styles;
