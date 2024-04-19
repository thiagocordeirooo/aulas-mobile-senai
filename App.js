import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CORES from './comum/constantes/cores';
import TELAS from './comum/constantes/telas';
import TelaContador from './telas/TelaContador/TelaContador';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
  },
});

export default function App() {
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style='auto' />
    </View>
  );
}
