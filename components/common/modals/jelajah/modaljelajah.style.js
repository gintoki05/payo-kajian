import { StyleSheet } from 'react-native';
import { FONT, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // align modal to bottom
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: SIZES.medium,
    height: '95%',
    width: '100%', // take full width of screen
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent black color
  },
  modalTitle: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.medium,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: -20,
    right: 5,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: SIZES.xSmall,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
