import { View, Text, StyleSheet, Image } from 'react-native';

export function Feedback({ foto, dataPublicacao, nome, telefone, email, descricao }) {
  let dataAtual = `${new Date(dataPublicacao).getDate()}/${new Date(dataPublicacao).getMonth()+ 1}/${new Date(dataPublicacao).getFullYear()}`

  const semFoto = 'https://cdn-icons-png.flaticon.com/512/17/17004.png';

  return (
    <View style={estilos.container}>
      <View style={estilos.publicacao}>
        <View style={estilos.areaData}>
          <Text style={estilos.data}>{dataAtual}</Text>
        </View>
        <Text style={estilos.descricao}>{descricao}</Text>
        <View style={estilos.perfil}>
        {foto && <Image style={estilos.foto} source={{uri: foto}}/>}
        {!foto && <Image style={estilos.foto} source={{uri: semFoto}}/>}
        
        <View style={estilos.areaInformacoesUsuario}>
          <View style={estilos.informacoesUsuario}>
            <Text style={estilos.nome}>{nome}</Text>
            {telefone && <Text style={estilos.telefone}>{telefone}</Text>}
            {!telefone && <Text style={estilos.telefone}>Não informado</Text>}
            {email && <Text style={estilos.email}>{email}</Text>}
            {!email && <Text style={estilos.email}>Não informado</Text>}
          </View>
        </View>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  nome: {
    fontWeight: 'bold'
  },
  foto: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  publicacao: {
    margin: 12,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    padding: 15,
    backgroundColor: 'white',
    width: 400
  },
  areaData: {
    display: 'flex',
    marginRight: 5,
    flexDirection: 'row-reverse'
  },
  descricao: {
    fontSize: 17,
    padding: 4,
  },
  areaInformacoesUsuario: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  informacoesUsuario: {
    paddingLeft: 15,
    justifyContent: 'space-evenly',
    width: 250,
  },
  telefone: {
    color: '#c0c0c0'
  },
  data: {
    fontSize: 10,
    color: '#A9A9A9',
    fontWeight: 'bold'
  },
  email: {
    color: '#808080'
  },
  perfil: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 7,
  }
});
