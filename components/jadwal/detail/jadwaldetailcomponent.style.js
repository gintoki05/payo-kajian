import { StatusBar, StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.small,
  },
  iconLeftContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  iconRightContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    height: 450,
    width: '100%',
    backgroundColor: COLORS.gray2,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    marginTop: SIZES.small,
    color: COLORS.chineseBlack,
  },
  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.small,
  },
  moderatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateModeratorLocationTitle: {
    fontFamily: FONT.regular,
    fontSize: 14,
    color: COLORS.chineseBlack,
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: SIZES.medium,
  },
});
