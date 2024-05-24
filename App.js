import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CORES from './comum/constantes/cores';
import TELAS from './comum/constantes/telas';
import TelaContador from './telas/TelaContador/TelaContador';
import TelaFormulario from './telas/TelaFormulario/TelaFormulario';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaListaTarefas from './telas/TelaListaTarefas/TelaListaTarefas';
import TelaLogin from './telas/TelaLogin/TelaLogin';
import TelaNovoUsuario from './telas/TelaNovoUsuario/TelaNovoUsuario';
import { useEffect, useState } from 'react';
import { pegarItemStorage } from './comum/servicos/servicoStorage';
import { CHAVES_SOTORAGE } from './comum/constantes/chaves-storage';

const Stack = createStackNavigator();

const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
  },
});

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState();

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioQueEstaNoStorage);
    };

    verificarSeUsuarioEstaLogado();
  }, []);

  if (usuarioLogado === undefined) {
    return <></>;
  }

  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={usuarioLogado ? TELAS.TELA_PRINCIPAL : TELAS.TELA_LOGIN}
          screenOptions={{ cardStyle: { flex: 1 } }}
        >
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELAS.TELA_NOVO_USUARIO} component={TelaNovoUsuario} />
          </Stack.Group>

          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} options={{ title: 'Principal', headerLeft: null }} />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} options={{ title: 'Contador' }} />
          <Stack.Screen name={TELAS.TELA_FORMULARIO} component={TelaFormulario} options={{ title: 'Formulário' }} />
          <Stack.Screen name={TELAS.TELA_LISTA_TAREFAS} component={TelaListaTarefas} options={{ title: 'Lista Terefas' }} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style='auto' />
    </View>
  );
}
