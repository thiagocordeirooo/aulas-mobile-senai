import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import { CHAVES_SOTORAGE } from '../../comum/constantes/chaves-storage';
import TELAS from '../../comum/constantes/telas';
import { limparStorage, pegarItemStorage } from '../../comum/servicos/servicoStorage';
import estilos from './TelaPerfilUsuarioStyle';

const TelaPerfilUsuario = (props) => {
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioQueEstaNoStorage);
    };

    verificarSeUsuarioEstaLogado();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const sair = () => {
    limparStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
    props.navigation.navigate(TELAS.TELA_LOGIN);
  };

  return (
    <View style={estilos.container}>
      {usuarioLogado && (
        <>
          <View style={estilos.containerAvatar}>
            <Pressable onPress={pickImage}>
              <View style={estilos.avatar}>
                {!image && <Text style={{ fontSize: 48 }}>{usuarioLogado.nome[0]}</Text>}
                {image && <Image source={{ uri: image }} style={estilos.imagem} />}
              </View>
            </Pressable>
          </View>
          <CampoTextoCustomizado value={usuarioLogado?.nome} />
          <CampoTextoCustomizado value={usuarioLogado?.email} />

          <BotaoCustomizado cor='primaria'>Salvar</BotaoCustomizado>
          <BotaoCustomizado onPress={sair}>Sair</BotaoCustomizado>
        </>
      )}
    </View>
  );
};

export default TelaPerfilUsuario;
