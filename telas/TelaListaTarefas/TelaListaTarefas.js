import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import ListagemVazia from '../../comum/componentes/ListagemVazia/ListagemVazia';
import ItemTarefa from './ItemTarefa';
import SeparadorListagens from './SeparadorListagem';
import estilos from './TelaListaTarefasStyle';

import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';

const TelaListaTarefas = () => {
  const [listaTarefas, setListaTarefas] = React.useState([]);
  const [campoDescricao, setCampoDescricao] = React.useState('');

  const adicinarTarefa = () => {
    // if (campoDescricao !== null && campoDescricao !== undefined && campoDescricao !== '')
    if (campoDescricao) {
      const novaLista = [...listaTarefas, { descricao: campoDescricao, id: +new Date() }];
      setListaTarefas(novaLista);
      setCampoDescricao('');
    } else {
      alert('Campo descrição é obrigatório.');
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.containerCampoAdicionar}>
        <CampoTextoCustomizado label='Descrição da tarefa' value={campoDescricao} onChangeText={setCampoDescricao} />
        <BotaoCustomizado cor='primaria' onPress={adicinarTarefa}>
          +
        </BotaoCustomizado>
      </View>

      <FlatList
        data={listaTarefas}
        renderItem={ItemTarefa}
        ItemSeparatorComponent={SeparadorListagens}
        ListEmptyComponent={ListagemVazia}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default TelaListaTarefas;
