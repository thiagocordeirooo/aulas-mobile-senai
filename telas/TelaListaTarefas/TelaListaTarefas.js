import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListagemVazia from '../../comum/componentes/ListagemVazia/ListagemVazia';
import ItemTarefa from './ItemTarefa';
import SeparadorListagens from './SeparadorListagem';
import estilos from './TelaListaTarefasStyle';

import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import { adicionarItemStorage, pegarItemStorage } from '../../comum/servicos/servicoStorage';
import { CHAVES_SOTORAGE } from '../../comum/constantes/chaves-storage';

const TelaListaTarefas = () => {
  const [listaTarefas, setListaTarefas] = React.useState([]);
  const [campoDescricao, setCampoDescricao] = React.useState('');

  useEffect(() => {
    const atualizarListagemDoStorage = async () => {
      const listagemDosStorage = await pegarItemStorage(CHAVES_SOTORAGE.LISTA_TAREFAS);
      if (listagemDosStorage) {
        setListaTarefas(JSON.parse(listagemDosStorage));
      }
    };

    atualizarListagemDoStorage();
  }, []);

  const adicinarTarefa = async () => {
    try {
      // if (campoDescricao !== null && campoDescricao !== undefined && campoDescricao !== '')
      if (campoDescricao) {
        const novaLista = [...listaTarefas, { descricao: campoDescricao, id: +new Date() }];
        setListaTarefas(novaLista);
        setCampoDescricao('');

        await adicionarItemStorage(CHAVES_SOTORAGE.LISTA_TAREFAS, novaLista);
      } else {
        alert('Campo descrição é obrigatório.');
      }
    } catch {
      console.log('Deu erro ao adicionar na lista de tarefas.');
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.containerCampoAdicionar}>
        <View style={{ flex: 1 }}>
          <CampoTextoCustomizado label='Descrição Tarefa' value={campoDescricao} onChangeText={setCampoDescricao} />
        </View>

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
