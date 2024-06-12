import { StyleSheet } from 'react-native';
import CORES from '../../comum/constantes/cores';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  containerAvatar: {
    alignItems: 'center',
  },
  avatar: {
    height: 96,
    width: 96,
    borderRadius: 96,
    backgroundColor: CORES.FUNDO_PADRAO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height: 96,
    width: 96,
    borderRadius: 96,
  },
});

export default estilos;
