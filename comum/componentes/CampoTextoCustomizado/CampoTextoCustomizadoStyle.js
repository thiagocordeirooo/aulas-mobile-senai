import { StyleSheet } from 'react-native';
import CORES from '../../constantes/cores';

const campoTextoCustomizadoStyle = StyleSheet.create({
  campoTexto: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 8,
    backgroundColor: CORES.BRANCA,
    borderRadius: 50,
  },
});

export default campoTextoCustomizadoStyle;
