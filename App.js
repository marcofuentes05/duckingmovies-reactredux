import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Text } from 'react-native-elements';
import { configureState } from './store.js'
import { Provider } from 'react-redux'
import Login from './components/Login'
import Buttons from './components/LandingPage'
import MainPage from './components/MainPage'
const store = configureState()

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>  
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name = 'Home' component = {Buttons}/>
                <Stack.Screen name='Login' component= {Login} />
                <Stack.Screen name='MainPage' component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
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
