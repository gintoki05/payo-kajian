import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONT.bold,
    color: COLORS.chineseBlack,
    fontSize: SIZES.large,
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.medium,
  },
  cardContainer: {
    backgroundColor: 'white',
    height: 250,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
  },
  image: {
    borderTopStartRadius: SIZES.small,
    borderTopEndRadius: SIZES.small,
    height: 150,
  },
  tanggalContainer: {
    justifyContent: 'center',
    height: 55,
    width: 55,
    backgroundColor: 'white',
    position: 'absolute',
    top: 120,
    left: 15,
    borderRadius: SIZES.small,
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tanggal: {
    textAlign: 'center',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  bulan: {
    textAlign: 'center',
    fontFamily: FONT.regular,
  },
  infoContainer: {
    marginVertical: SIZES.xxLarge,
    marginHorizontal: SIZES.medium,
    rowGap: 4,
  },
  judulKajian: {
    color: COLORS.chineseBlack,
    textTransform: 'uppercase',
    fontFamily: FONT.bold,
    width: 220,
  },
  subTitle: {
    color: COLORS.mistBlue,
    fontFamily: FONT.regular,
  },
  lokasi: {
    color: COLORS.mistBlue,
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
  },
});
