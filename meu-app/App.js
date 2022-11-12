import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { CursoScreen } from './CursoScreen';
import { FeedbackScreen } from './FeedbackScreen';
import { EstudoScreen } from './EstudoScreen';
import { AddFeedbackScreen } from './AddFeedbackScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Meu App"
          component={HomeScreen}
          options={{
            title: 'Meu aplicativo',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cursos"
          component={CursoScreen}
          options={{
            title: 'Cursos',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{
            title: 'Feedbacks',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Estudos"
          component={EstudoScreen}
          options={{
            title: 'Meus Estudos',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="AddFeedback"
          component={AddFeedbackScreen}
          options={{
            title: 'Adicionar feedback',
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
