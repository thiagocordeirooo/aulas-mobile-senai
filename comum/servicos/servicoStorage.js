import AsyncStorage from '@react-native-async-storage/async-storage';

export async function pegarItemStorage(chave) {
  try {
    return await AsyncStorage.getItem(chave);
  } catch {
    return null;
  }
}

export async function adicionarItemStorage(chave, valor) {
  try {
    return await AsyncStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    return null;
  }
}
