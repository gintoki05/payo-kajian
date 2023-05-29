import { Modal, Text, View, Pressable } from 'react-native';
import { styles } from './modaljelajah.style';
import JelajahIconModal from '../../cards/jelajah/JelajahIconModal';

const ModalJelajah = ({ visible, onClose }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}
      statusBarTranslucent={true}
    >
      <View style={styles.overlay} />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Kategori Lainnya</Text>
          <JelajahIconModal />
          <View style={styles.closeButtonContainer}>
            <Pressable style={styles.closeButton} onPress={() => onClose()}>
              <Text style={styles.closeButtonText}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalJelajah;
