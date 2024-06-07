import { Image, Pressable, View } from 'react-native';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import TELAS from '../../comum/constantes/telas';
import { ImagesAssets } from '../../assets/ImagesAssets';

const TelaPrincipal = (props) => {
  console.log(props);

  const categorias = [
    { nome: 'Celulares', imagem: 'favicon' },
    { nome: 'Notebooks', imagem: 'icon' },
  ];

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
        Tela Contador
      </BotaoCustomizado>

      <BotaoCustomizado cor='secundaria' onPress={() => props.navigation.navigate(TELAS.TELA_FORMULARIO)}>
        Tela Formulário
      </BotaoCustomizado>

      <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_TAREFAS)}>
        Lista de Tarefas
      </BotaoCustomizado>

      <BotaoCustomizado cor='secundaria' onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_USUARIOS)}>
        Lista de Usuários
      </BotaoCustomizado>

      {categorias.map((cat) => {
        return (
          <Pressable key={cat.nome} onPress={() => alert(cat.nome)}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={ImagesAssets[cat.imagem]}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default TelaPrincipal;
