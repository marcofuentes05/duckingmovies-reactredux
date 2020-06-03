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
import Detail from './components/ItemDetail'
import ViewAllPage from './components/ViewAllPage';
import {
    tokenReviewTime,
} from './settings';

import TokenRefresh from './components/TokenRefresh';

const { store , persistor } = configureState()

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>  
        <PersistGate loading = {null} persistor = {persistor}>
            <TokenRefresh reviewTime={tokenReviewTime}/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "Home">
                    <Stack.Screen name='Home' component={Buttons} 
                        options={{ 
                            headerLeft: null,
                            title: 'DuckingMovies', 
                            headerStyle: { backgroundColor: '#f4511e'} , 
                            headerTitleStyle :{fontWeight : 'bold'}  
                        }} />
                    <Stack.Screen name='Login' component= {Login} 
                          options={{
                              headerLeft : null,
                              title: 'Login',
                              headerStyle: { backgroundColor: '#f4511e' },
                              headerTitleStyle: { fontWeight: 'bold' } 
                          }} />
                    <Stack.Screen name='MainPage' component={MainPage} 
                        options={{ title: 'DuckingMovies', 
                            headerLeft : null ,
                            headerStyle: { backgroundColor: '#f4511e' }, 
                            headerTitleStyle: { fontWeight: 'bold' } 
                        }} />
                    <Stack.Screen name='Registro' component={SignUp} 
                          options={{
                              headerLeft: null,
                              title: 'Registro',
                              headerStyle: { backgroundColor: '#f4511e' },
                              headerTitleStyle: { fontWeight: 'bold' } 
                          }}/>
                    <Stack.Screen name = 'DetailPage' component = {Detail}
                          options={{
                              headerLeft: null,
                              title: 'Detalles',
                              headerStyle: { backgroundColor: '#f4511e' },
                              headerTitleStyle: { fontWeight: 'bold' } 
                          }}/>
                    <Stack.Screen name='ViewAllPage' component={ViewAllPage}
                        options={{
                            headerLeft: null,
                            title: 'Búsqueda',
                            headerStyle: { backgroundColor: '#f4511e'},
                            headerTitleStyle: { fontWeight: 'bold'}
                        }}/>
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
