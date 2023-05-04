import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  cardContainer: {
    backgroundColor: 'white',
    height: 250,
    borderRadius: SIZES.medium,
  },
  image: {
    borderTopStartRadius: SIZES.medium,
    borderTopEndRadius: SIZES.medium,
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
