import React from 'react';
import { View } from 'react-native';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import CORES from '../../comum/constantes/cores';
import estilos from './TelaFormularioStyle';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TelaFormulario = () => {
  const [campoNome, setCampoNome] = React.useState('');
  const [campoSobrenome, setCampoSobrenome] = React.useState('');
  const [campoCPF, setcampoCPF] = React.useState('');

  const salvar = () => {
    console.log('Salvar:', { campoNome, campoSobrenome, campoCPF });
  };

  return (
    <View style={estilos.container}>
      <View style={{ alignSelf: 'center' }}>
        <MaterialIcons name='attach-money' size={64} color={CORES.SECUNDARIA} />
      </View>

      <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} />
      <CampoTextoCustomizado label='Sobrenome' value={campoSobrenome} onChangeText={setCampoSobrenome} />
      <CampoTextoCustomizado label='CPF' inputMode='numeric' value={campoCPF} onChangeText={setcampoCPF} />
      <BotaoCustomizado onPress={salvar}>Salvar</BotaoCustomizado>
    </View>
  );
};

export default TelaFormulario;
