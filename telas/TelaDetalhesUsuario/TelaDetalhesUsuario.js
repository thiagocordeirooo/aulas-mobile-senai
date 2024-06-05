import { useState } from 'react';
import { View } from 'react-native';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import TELAS from '../../comum/constantes/telas';
import api from '../../comum/servicos/api';

const TelaDetalhesUsuario = (props) => {
  const [campoNome, setCampoNome] = useState(props.route.params?.usuario.nome || '');
  const [campoEmail, setCampoEmail] = useState(props.route.params?.usuario.email || '');
  const [campoNovaSenha, setCampoNovaSenha] = useState('');

  const salvar = async () => {
    try {
      const usuario = {
        id: props.route.params?.usuario.id,
        nome: campoNome,
        email: campoEmail,
        senha: campoNovaSenha,
      };
      if (props.route.params?.usuario.id) {
        await api.put('/usuarios', usuario);
      } else {
        await api.post('/usuarios', usuario);
      }
      alert('Dados salvos com sucesso!');
      props.navigation.navigate(TELAS.TELA_LISTA_USUARIOS, { refresh: +new Date() });
    } catch (error) {
      alert(error.response.data);
    }
  };

  const excluir = async () => {
    try {
      if (confirm('Tem certeza?')) {
        await api.delete(`/usuarios/${props.route.params.usuario.id}`);
        alert('Usuário excluido com sucesso!');
        props.navigation.navigate(TELAS.TELA_LISTA_USUARIOS, { refresh: +new Date() });
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <View style={{ padding: 16, gap: 16 }}>
      {props.route.params?.usuario.id && <CampoTextoCustomizado label='ID' value={props.route.params.usuario.id} disabled readonly />}

      <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} />
      <CampoTextoCustomizado label='E-mail' value={campoEmail} onChangeText={setCampoEmail} />

      {!props.route.params?.usuario.id && (
        <CampoTextoCustomizado label='Nova Senha' value={campoNovaSenha} onChangeText={setCampoNovaSenha} />
      )}

      <BotaoCustomizado cor='primaria' onPress={salvar}>
        Salvar
      </BotaoCustomizado>

      {props.route.params?.usuario.id && (
        <BotaoCustomizado cor='secundaria' onPress={excluir}>
          Excluir
        </BotaoCustomizado>
      )}
    </View>
  );
};

export default TelaDetalhesUsuario;
