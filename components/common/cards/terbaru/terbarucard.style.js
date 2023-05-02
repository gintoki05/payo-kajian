import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  cardContainer: {
    backgroundColor: 'white',
    marginHorizontal: SIZES.small,
    height: 250,
    borderRadius: SIZES.medium,
  },
  image: {
    borderTopStartRadius: SIZES.medium,
    borderTopEndRadius: SIZES.medium,
    height: 150,
  },
  tanggalContainer: {
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
    fontWeight: 'bold',
  },
  bulan: {
    textAlign: 'center',
  },
  infoContainer: {
    marginVertical: SIZES.xxLarge,
    marginHorizontal: SIZES.medium,
  },
  judulKajian: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subTitle: {
    color: COLORS.gray,
  },
  lokasi: {
    color: COLORS.gray,
    fontSize: SIZES.small,
  },
});
