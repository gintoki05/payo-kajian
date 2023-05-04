import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 135,
    marginTop: SIZES.large,
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
