import { View, Text } from 'react-native';
import estilos from './TelaListaTarefasStyle';

const ItemTarefa = (props) => {
  console.log(props);
  return (
    <View style={estilos.itemTarefa}>
      <Text style={estilos.descricaoTarefa}>{props.item.descricao}</Text>
    </View>
  );
};

export default ItemTarefa;
