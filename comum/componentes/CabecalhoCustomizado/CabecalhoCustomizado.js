import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { CHAVES_SOTORAGE } from '../../constantes/chaves-storage';
import CORES from '../../constantes/cores';
import TELAS from '../../constantes/telas';
import { pegarItemStorage } from '../../servicos/servicoStorage';
import estilos from './CabecalhoCustomizadoStyle';

const CabecalhoCustomizado = (props) => {
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioQueEstaNoStorage);
    };

    verificarSeUsuarioEstaLogado();
  }, []);

  return (
    <View style={estilos.container}>
      {props.navigation.canGoBack() && (
        <MaterialIcons name='arrow-back' size={24} color={CORES.TEXTO_CLARO} onPress={props.navigation.goBack} />
      )}

      <Text style={estilos.titulo}>{props.options.title}</Text>

      {usuarioLogado && (
        <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_PERFIL_USUARIO)}>
          <View style={estilos.avatar}>
            {!image && <Text>{usuarioLogado.nome[0]}</Text>}
            {image && <Image source={{ uri: image }} style={estilos.imagem} />}
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default CabecalhoCustomizado;
