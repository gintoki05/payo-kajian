import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
