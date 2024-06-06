import axios from 'axios';
import { CHAVES_SOTORAGE } from '../constantes/chaves-storage';
import { pegarItemStorage } from './servicoStorage';

let instancia = axios.create({
  baseURL: 'http://localhost:3000',
});

instancia.interceptors.request.use(async (config) => {
  const usuarioLogado = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
  if (usuarioLogado) {
    config.headers['x-usuario-logado'] = usuarioLogado.id;
  }

  return config;
});

export default instancia;
