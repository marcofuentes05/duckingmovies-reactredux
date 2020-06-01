import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
// import { Text } from 'react-native-elements';
import { configureState } from './store.js'
import { Provider } from 'react-redux'
import Login from './components/Login'
import Buttons from './components/LandingPage'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp';

const { store , persistor } = configureState()

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>  
        <PersistGate loading = {null} persistor = {persistor}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "Home">
                    <Stack.Screen name='Home' component={Buttons} options={{ title: 'DuckingMovies', headerStyle: { backgroundColor: '#f4511e'} , headerTitleStyle :{fontWeight : 'bold'}  }} />
                    <Stack.Screen name='Login' component= {Login} />
                    <Stack.Screen name='MainPage' component={MainPage} options={{ title: 'DuckingMovies', headerLeft : null ,headerStyle: { backgroundColor: '#f4511e' }, headerTitleStyle: { fontWeight: 'bold' } }} />
                    <Stack.Screen name='Registro' component={SignUp} />
                </Stack.Navigator>
            </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
