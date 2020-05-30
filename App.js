import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View } from 'react-native';
// import { Text } from 'react-native-elements';
import Form from './components/Login'
import { configureState } from './store.js'
import { Provider } from 'react-redux'

const store = configureState()

export default function App() {
  return (
      <Provider store = {store}>
        <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Form />
        </View>
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
