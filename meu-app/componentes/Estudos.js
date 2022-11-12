import { View, Text, Image, StyleSheet } from 'react-native';

export function Estudos({ foto, nome }) {
  return (
    <View style={estilos.container}>
    <View style={estilos.area}>
      <Image style={estilos.foto} source={{ uri: foto }} />
      <Text style={estilos.nome}>{nome}</Text>
    </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
  },
  area: {
    display: 'flex',
    flex: 1,
    width: 380,
    height: 250,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,
    borderWidth: 0.6,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  foto: {
    width: 378,
    height: 200,
    borderRadius: 10,
  },
  nome: {
    fontWeight: 'bold',
    marginTop: 15,
  },
});
