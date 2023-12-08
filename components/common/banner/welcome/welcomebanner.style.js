import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
  },
});

export default styles;
