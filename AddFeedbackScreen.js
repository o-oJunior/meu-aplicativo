import { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Alert,
  Vibration,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { firebaseConfig } from './firebase';
import * as firebase from 'firebase';
import Input from './inputMask/input';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

export function AddFeedbackScreen({ navigation }) {
  const [novoFeedback, setNovoFeedback] = useState({
    foto: '',
    nome: '',
    telefone: '',
    email: '',
    descricao: '',
    dataPublicacao: '',
  });

  const semFoto = 'https://cdn-icons-png.flaticon.com/512/17/17004.png';
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permissaoCamera, setPermissaoCamera] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissaoCamera(status === 'granted');
    })();
  }, []);

  if (permissaoCamera === false) {
    return (
      <View>
        <Text>Acesso negado.</Text>
      </View>
    );
  }

  const publicarFeedback = () => {
    novoFeedback.dataPublicacao = Date.now();
    if (
      novoFeedback.nome == '' ||
      novoFeedback.nome == ' ' ||
      novoFeedback.descricao == '' ||
      novoFeedback.descricao == ' '
    ) {
      return Alert.alert('Erro ao enviar', 'Preencha nome e a descrição');
    }
    firebase
      .database()
      .ref('Feedbacks/')
      .push(novoFeedback)
      .then((data) => {
        setNovoFeedback(novoFeedback.foto == null);
        setNovoFeedback(novoFeedback.nome == '');
        setNovoFeedback(novoFeedback.telefone == '');
        setNovoFeedback(novoFeedback.email == '');
        setNovoFeedback(novoFeedback.descricao == '');
        Alert.alert('Feedback enviado!', 'Obrigado pelo seu feedback.');
        Vibration.vibrate();
        navigation.navigate('Feedback');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao enviar feedback.');
      });
  };

  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadDaGaleriaNoFirebase(result);
    }
  };

  const abrirCamera = () => {
    setOpen(true);
  };

  const apagarFoto = () => {
    if (novoFeedback.foto) {
      setNovoFeedback((novoFeedback.foto = ''));
    } else {
      return Alert.alert('Erro', 'Imagem não identificada.');
    }
  };

  const uploadDaGaleriaNoFirebase = async (foto) => {
      Alert.alert(
        'Aguarde...',
        'Carregando imagem.'
      );
    const { uri } = foto;
    const imagem = await fetch(uri);
    const arquivoBlob = await imagem.blob();

    const randomName = `foto-${(Math.random() + 1).toString(36).substring(7)}`;

    const imageRef = firebase
      .storage()
      .ref(`fotos/${randomName}.jpg`)
      .put(arquivoBlob)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      });

    imageRef.then((url) => {
      setNovoFeedback({ ...novoFeedback, foto: url });
    });
  };

    const uploadDaCameraNoFirebase = async (foto) => {
      Alert.alert(
        'Aguarde...',
        'Carregando imagem.'
      );
    const uri = foto;
    const imagem = await fetch(uri);
    const arquivoBlob = await imagem.blob();

    const randomName = `foto-${(Math.random() + 1).toString(36).substring(7)}`;

    const imageRef = firebase
      .storage()
      .ref(`fotos/${randomName}.jpg`)
      .put(arquivoBlob)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      });

    imageRef.then((url) => {
      setNovoFeedback({ ...novoFeedback, foto: url });
    });
  };

  const tirarFoto = async () => {
    if (camRef) {
      const image = await camRef.current.takePictureAsync();
      console.log(image.uri);
      uploadDaCameraNoFirebase(image.uri);
      setOpen(false);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={estilos.container}>
          <StatusBar barStyle={'light-content'} hidden={true} />
          <TextInput
            placeholder="Nome*"
            style={estilos.input}
            onChangeText={(nome) =>
              setNovoFeedback({ ...novoFeedback, nome: nome })
            }
            value={novoFeedback.nome}
          />
          <Input
            value={novoFeedback.telefone}
            placeholder="(__)_____-____"
            maxLength={14}
            keyboardType="numeric"
            mask="phone"
            inputMaskChange={(telefone: string) =>
              setNovoFeedback({ ...novoFeedback, telefone: telefone })
            }
          />
          <TextInput
            placeholder="E-mail"
            style={estilos.input}
            onChangeText={(email) =>
              setNovoFeedback({ ...novoFeedback, email: email })
            }
            value={novoFeedback.email}
          />

          <View style={estilos.caixaInformacoesFoto}>
            <View style={estilos.areaFoto}>
              {novoFeedback.foto && (
                <Image
                  style={estilos.foto}
                  source={{ uri: novoFeedback.foto }}
                />
              )}
              {!novoFeedback.foto && (
                <Image style={estilos.foto} source={{ uri: semFoto }} />
              )}
              <View style={estilos.iconTxt}>
                <MaterialIcons name="delete" size={15} color="#0000FF" />
                <Text onPress={apagarFoto} style={estilos.txtApagar}>
                  Apagar foto
                </Text>
              </View>
            </View>

            <View style={estilos.posicaoBtn}>
              <View style={estilos.iconTxt}>
                <MaterialIcons name="add-a-photo" size={18} color="#0000FF" />
                <Text onPress={abrirCamera} style={estilos.txtBtn}>
                  Tirar foto
                </Text>
              </View>

              <View style={estilos.iconTxt}>
                <AntDesign name="addfile" size={18} color="#0000FF" />
                <Text onPress={escolherImagem} style={estilos.txtBtn}>
                  Escolher foto
                </Text>
              </View>
            </View>
          </View>

          <TextInput
            placeholder="Escreva um elogio ou uma critica.*"
            multiline
            style={estilos.inputDesc}
            onChangeText={(descricao) =>
              setNovoFeedback({ ...novoFeedback, descricao: descricao })
            }
            value={novoFeedback.descricao}
          />

          <Pressable onPress={publicarFeedback}>
            <Text style={estilos.publicar}> Enviar Feedback </Text>
          </Pressable>

          <Modal animatyonType="slide" transparent={false} visible={open}>
            <View style={estilos.cameraContainer}>
              <Camera style={estilos.camera} type={type} ref={camRef}>
                <View style={estilos.btnContainer}>
                  <TouchableOpacity
                    style={estilos.btnCamera}
                    onPress={() => {
                      setOpen(false);
                    }}>
                    <AntDesign name="arrowleft" size={25} color="#121212" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={estilos.btnCamera}
                    onPress={tirarFoto}>
                    <FontAwesome name="camera" size={25} color="#121212" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={estilos.btnCamera}
                    onPress={() =>
                      setType(
                        type == Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      )
                    }>
                    <AntDesign name="retweet" size={25} color="#121212" />
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  input: {
    outline: 'none',
    color: '#000000',
    width: 370,
    borderWidth: 1,
    fontSize: 20,
    padding: 7,
    borderRadius: 9,
    marginTop: 25,
    borderColor: 'transparent',
    borderBottomColor: '#000000',
    backgroundColor: '#F0F0F0',
    elevation: 2,
  },
  inputDesc: {
    width: 360,
    borderColor: '#000000',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F0F0F0',
    elevation: 7,
    display: 'flex',
    color: '#000000',
    outline: 'none',
    marginTop: 25,
  },
  publicar: {
    backgroundColor: '#000000',
    height: 50,
    width: 350,
    color: '#FFFFFF',
    borderRadius: 35,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
    marginTop: 40,
  },
  caixaInformacoesFoto: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    marginTop: 25,
    width: 370,
    height: 200,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  foto: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  areaFoto: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtBtn: {
    color: '#0000FF',
    marginLeft: 2,
    marginBottom: 20,
    fontSize: 18,
  },
  iconTxt: {
    flexDirection: 'row',
  },
  posicaoBtn: {
    padding: 25,
  },
  txtApagar: {
    color: '#0000FF',
    marginLeft: 2,
  },
  btnCamera: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 300,
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  camera: {
    flex: 1,
  },
});
