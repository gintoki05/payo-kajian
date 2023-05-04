import { Platform, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';
import { StatusBar } from 'expo-status-bar';

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderRadius: SIZES.small,
  },
  image: {
    flex: 1,
    height: 135,
    width: '100%',
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
