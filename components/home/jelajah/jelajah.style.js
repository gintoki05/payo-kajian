import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  headerTitle: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});
