import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Importe Rotas
import Routes from './src/Components/Routes/Routes';
import Tabs from './src/Components/Tabs/TabUser';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}