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
    'https://lh3.googleusercontent.com/SmDRfpUV7Q2Z3pxbDIxn2y2IETB9gQZ0aHVxw8hkAiW29oGVFye4Q1O5VeQ8dx2dgm8acnj8AubRSJNIWtgVRCr8PO2pb0THN0PdmO2NM-QT4gi6trgvXoeRSBiCUgqXBUrUROw16FzNAej_BuGtfzt_AhOwPYn7BKNhyze2jPWO8Wci2ypX6BZsv7UtgVwjGMisI9eWIOeUQLa1tUtAdhteCYiMgTuu2f3hCdsoXUULnVEsaYNkgzAI8KalgYAEUSFcIfOfBT9iHUmekC9CNmI8jFSF_5bsTQ3WkkMt6pV_KOrh8mYqhRdZ9s1Th3u-OaN8GTNw4XnuThZSsaGiucI7QmgwCUAC0FKtquj56-JdrtNqDg2iF-D0L3IDd3dcbs_lVJXJUWcs5CGRS6-19sSHuwb-RlRmjHe-fbpntzFZzEBUrNUKYJ4k3NRw48zj-ufSzyzHiU3lTWzYhLDafNXWiVwOMav4lO3ereTJlIHgBAY9nyBDpCHmRbiFtM4NE-0B9AwGMgJhxk6FrHkJFS8Qf84pPZH5rF9My2iYDrj0koVlWuLc4MPnbxVFZjUm1ITuqnCFOzA6CTDHZONv06LbScF-lSgFie8QaVjyh648BhXAUrXLcV3LFOpWurtKQugB9a2fCYyoDHxgpvcC_yWoNCPEnwrcLr_O2WMwo3RnqRme84NUSvULqsAtrBIIC-Gj3l_7klRCgMi-PPC9w72uOGjv2HVbT_Az6JwBmWc5Gnr1nQLHOcEWnFPhIgRK7KAYjR6Z3kvo9OKHJLzVWHu7YXsHrdA6QmS3=w358-h635-no?authuser=0';

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
