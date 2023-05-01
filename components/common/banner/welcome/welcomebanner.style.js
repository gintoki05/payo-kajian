import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    height: 135,
    marginTop: SIZES.xLarge,
    borderRadius: SIZES.large,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.large,
  },
});

export default styles;
