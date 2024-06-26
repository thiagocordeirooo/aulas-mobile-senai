import { StyleSheet } from 'react-native';
import CORES from '../../constantes/cores';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: CORES.PRIMARIA,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    color: CORES.TEXTO_CLARO,
    fontSize: 16,
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: CORES.FUNDO_PADRAO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
});

export default estilos;
