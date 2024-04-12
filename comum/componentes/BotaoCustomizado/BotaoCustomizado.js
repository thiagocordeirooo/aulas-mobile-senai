import { Pressable, Text, StyleSheet } from 'react-native';
import CORES from '../../constantes/cores';

const estilos = StyleSheet.create({
  botao: {
    padding: 16,
    borderRadius: 8,
  },
  botaoPrimario: {
    backgroundColor: CORES.PRIMARIA,
  },
  botaoSecundario: {
    backgroundColor: CORES.SECUNDARIA,
  },
  botaoPadrao: {
    backgroundColor: CORES.CINZA,
  },
  textoBotao: {
    color: CORES.BRANCA,
  },
});

const BotaoCustomizado = (props) => {
  const estilosBotao = [estilos.botao];

  switch (props.cor) {
    case 'primaria':
      estilosBotao.push(estilos.botaoPrimario);
      break;
    case 'secundaria':
      estilosBotao.push(estilos.botaoSecundario);
      break;
    default:
      estilosBotao.push(estilos.botaoPadrao);
      break;
  }

  return (
    <Pressable style={estilosBotao} onPress={props.onPress}>
      <Text style={estilos.textoBotao}>{props.children}</Text>
    </Pressable>
  );
};

export default BotaoCustomizado;
