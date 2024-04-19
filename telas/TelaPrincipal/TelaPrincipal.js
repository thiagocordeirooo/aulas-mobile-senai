import { Text, View } from 'react-native';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import TELAS from '../../comum/constantes/telas';

const TelaPrincipal = (props) => {
  console.log(props);

  return (
    <View>
      <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
        Tela Contador
      </BotaoCustomizado>
    </View>
  );
};

export default TelaPrincipal;
