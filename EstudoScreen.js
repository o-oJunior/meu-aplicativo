import { View, StatusBar, FlatList } from 'react-native';
import { Estudos } from './componentes/Estudos';

export function EstudoScreen() {
  const estudos = [
    {
      foto: 'https://miro.medium.com/max/640/1*rpYyNZvqfFej0FgWEW5p9Q.png',
      nome: 'JavaScript',
    },
    {
      foto: 'https://files.tecnoblog.net/wp-content/uploads/2014/10/html5.jpg',
      nome: 'HTML5',
    },
    {
      foto: 'https://www.todoespacoonline.com/w/wp-content/uploads/2014/08/css3-logo.jpg',
      nome: 'CSS3',
    },
    {
      foto: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg',
      nome: 'React Native',
    },
    {
      foto: 'https://kinsta.com/wp-content/uploads/2022/04/postgres-logo.png',
      nome: 'PostgreSQL',
    },
  ];
  return (
    <View>
      <StatusBar barStyle={'light-content'} hidden={true} />
      <FlatList
        data={estudos}
        renderItem={({ item }) => <Estudos foto={item.foto} nome={item.nome} />}
      />
    </View>
  );
}

