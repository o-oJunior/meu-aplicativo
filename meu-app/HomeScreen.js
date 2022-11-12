import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export function HomeScreen({ navigation }) {
  const foto =
    'https://avatars.githubusercontent.com/u/106385748?v=4';

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={estilos.container}>
          <StatusBar barStyle={'light-content'} hidden={true} />
          <Image style={estilos.foto} source={{ uri: foto }} />
          <Text style={estilos.titulo}>Bem-vindo(a) ao meu aplicativo</Text>
          <Text style={estilos.texto}>
            Sou Édio Mendes Júnior, natural de Florianópolis - SC,{'\n'} tenho
            20 anos e enquanto não encontro um estágio,{'\n'} estou buscando
            conhecimento e aperfeiçoando o que já{'\n'} sei. Meu objetivo é
            desenvolvedor web full stack.
          </Text>

          <View style={estilos.posicaoBotoes}>
            <TouchableOpacity onPress={() => navigation.navigate('Cursos')}>
              <Text style={estilos.botao}>CURSOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Estudos')}>
              <Text style={estilos.botao}>MEUS ESTUDOS ATUALMENTE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
              <Text style={estilos.botao}>FEEDBACKS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 40,
    color: '#000000',
  },
  texto: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 25,
    color: '#A9A9A9',
    fontWeight: 'bold',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  posicaoBotoes: {
    display: 'flex',
    flex: 1,
    paddingBottom: 50,
  },
  botao: {
    backgroundColor: '#000000',
    height: 50,
    width: 350,
    color: '#FFFFFF',
    borderRadius: 35,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
