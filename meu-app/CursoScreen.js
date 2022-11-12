import {
  View,
  FlatList,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Cursos } from './componentes/Cursos';

export function CursoScreen() {
  const cursos = [
    {
      foto: 'https://s2.glbimg.com/H3FepvgXbOf5aeGH6vIVKQWXgz4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/F/S/sA6Q1mQHu4CtaIRD8AJg/9024-analise-desnv-sistemas-imagem-01-em-alta.png',
      nome: 'SENAI',
      curso: 'Técnico em desenvolvimento de sistemas',
      duracao: '2022-2023',
      status: 'Cursando',
    },

    {
      foto: 'https://programacaopratica.com.br/wp-content/uploads/2021/03/1465244_ed1a_32.jpg',
      nome: 'UDEMY',
      curso: 'Curso Web Moderno Completo com JavaScript 2022 + Projetos',
      duracao: '97 horas',
      status: 'Cursando',
    },

    {
      foto: 'https://www.talentosbrasil.com.br/uploads/cursos/manutencao13.jpg',
      nome: 'SENAI',
      curso: 'Manutenção de Computadores',
      duracao: '60 horas',
      status: 'Concluido',
    },
  ];
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <StatusBar barStyle={'light-content'} hidden={true} />
          <FlatList
            data={cursos}
            renderItem={({ item }) => (
              <Cursos
                foto={item.foto}
                nome={item.nome}
                curso={item.curso}
                duracao={item.duracao}
                status={item.status}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
