import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CORES from '../../comum/constantes/cores';
import TELAS from '../../comum/constantes/telas';

const estilos = StyleSheet.create({
  container: {
    height: 88,
    backgroundColor: CORES.BRANCA,
    borderRadius: 16,
    padding: 16,
  },
  nome: {
    fontSize: 20,
  },
});

const ItemListagemUsuarios = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(TELAS.TELA_DETALHES_USUARIOS, { usuario: props.item })}>
      <View style={estilos.container}>
        <Text style={estilos.nome}>{props.item.nome}</Text>
        <Text>{props.item.email}</Text>
      </View>
    </Pressable>
  );
};

export default ItemListagemUsuarios;
