import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 135,
    width: '100%',
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
  },
  imageDeskripsi: {
    height: 350,
    marginTop: SIZES.small,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    marginBottom: SIZES.xSmall,
    color: COLORS.chineseBlack,
  },
  date: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginBottom: SIZES.medium,
    color: COLORS.primary,
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: SIZES.medium,
  },
});
