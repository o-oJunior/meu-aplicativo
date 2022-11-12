import { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
} from 'react-native';
import { Feedback } from './componentes/Feedback';
import { firebaseConfig } from './firebase';
import * as firebase from 'firebase';

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App em carregamento');
}

export function FeedbackScreen({ navigation }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    carregarMensagensDoFirebase();
  }, []);

  const carregarMensagensDoFirebase = () => {
    firebase
      .database()
      .ref('Feedbacks/')
      .on('value', (snapshot) => {
        const mensagens = [];
        snapshot.forEach((mensagem) => {
          mensagens.unshift(mensagem.val());
        });

        setFeedbacks(mensagens);
      });
  };

  return (
    <View style={estilos.container}>
      <StatusBar barStyle={'light-content'} hidden={true} />

      <FlatList
        data={feedbacks}
        renderItem={({ item }) => (
          <Feedback
            foto={item.foto}
            nome={item.nome}
            telefone={item.telefone}
            email={item.email}
            descricao={item.descricao}
            dataPublicacao={item.dataPublicacao}
          />
        )}
      />

      <View style={estilos.botao}>
        <Pressable onPress={() => navigation.navigate('AddFeedback')}>
          <Text style={estilos.btnAddFeedback}>ADICIONAR FEEDBACK</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  btnAddFeedback: {
    backgroundColor: '#000000',
    height: 50,
    width: 350,
    color: '#FFFFFF',
    borderRadius: 35,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
  },
  botao: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
  },
});
