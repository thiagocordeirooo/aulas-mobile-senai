import { Text, TextInput, View } from 'react-native';
import campoTextoCustomizadoStyle from './CampoTextoCustomizadoStyle';

const CampoTextoCustomizado = (props) => {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput style={campoTextoCustomizadoStyle.campoTexto} {...props} />
    </View>
  );
};

export default CampoTextoCustomizado;
