import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  contador: {
    fontSize: 72,
    color: '#fff',
  },
  botao: {
    backgroundColor: 'red',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    fontSize: 48,
    color: '#fff',
  },
});

export default function App() {
  const [contador, setContador] = React.useState(0);

  return (
    <View style={estilos.tudo}>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => setContador(contador - 1)}
      >
        <Text style={estilos.botaoTexto}>-</Text>
      </TouchableOpacity>

      <Text style={estilos.contador}>{contador}</Text>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>
  );
}
