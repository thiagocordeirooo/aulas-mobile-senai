import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import ListagemVazia from '../../comum/componentes/ListagemVazia/ListagemVazia';
import SeparadorListagem from '../../comum/componentes/SeparadorListagem/SeparadorListagem';
import api from '../../comum/servicos/api';
import ItemListagemUsuarios from './ItemListagemUsuarios';
import TELAS from '../../comum/constantes/telas';

const TelaListagemUsuarios = (props) => {
  const [usuarios, setUsuarios] = useState([]);

  console.log(props);

  useEffect(() => {
    const pegarUsauariosViaAPI = async () => {
      const response = await api.get('/usuarios');
      setUsuarios(response.data);
    };

    pegarUsauariosViaAPI();
  }, [props.route.params?.refresh]); // gambiarra para reatualizar a listagem ao voltar da edição

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_DETALHES_USUARIOS)}>
        <Text>Novo</Text>
      </Pressable>
      <FlatList
        data={usuarios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => <ItemListagemUsuarios {...props} />}
        ListEmptyComponent={ListagemVazia}
        ItemSeparatorComponent={SeparadorListagem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TelaListagemUsuarios;
