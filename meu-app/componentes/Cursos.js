import { View, Text, Image, StyleSheet } from 'react-native';

export function Cursos({ foto, nome, curso, duracao, status }) {
  return (
    <View style={estilos.container}>
    <View style={estilos.box}>
    <View>
      <Image style={estilos.imagem} source={{ uri: foto }} />
      </View>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.curso}>{curso}</Text>
      <Text style={estilos.duracao}>{duracao}</Text>
      <Text style={estilos.status}>{status}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
  },
  box: {
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,
    borderWidth: 0.6,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    marginBottom: 10,
  },
  imagem: {
    width: 378,
    height: 200,
    borderRadius: 10,
  },
  nome: {
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  curso: {
    paddingLeft: 15,
    color: '#A9A9A9',
    fontWeight: 'bold',
  },
  duracao: {
    paddingLeft: 15,
    color: '#A9A9A9',
  },
  status: {
    paddingLeft: 15,
    fontWeight: 'bold',
  },
});
