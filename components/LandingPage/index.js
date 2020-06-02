import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import * as actions from './../../actions/auth';
import * as selectors from './../../reducers'

const Buttons = ({ isAuthenticated , logout , navigation} ) => {
    //useEffect(() => logout() , [])
    isAuthenticated && navigation.navigate('MainPage')
    return (
        <View style = {styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style = {{fontWeight : 'bold'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro') /*TODO*/}>
                <Text style = {{fontWeight : 'bold'}}>Registro</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    // button: {
    //     backgroundColor: '#f4511e',
    //     color: 'black',
    //     fontWeight : 'bold',
    //     height: 30,
    //     lineHeight: 30,
    //     marginTop: 10,
    //     textAlign: 'center',
    //     width: 250,
    //     margin: 10,
    //     borderRadius: 5,
    //     margin : 10,
        
    // },
    button: {
        backgroundColor: '#f4511e',
        borderStyle: "solid",
        borderColor: "black",
        marginTop: 5,
        height: 50,
        width: 100,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    container: {
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor : 'black',

    }
})
const ButtonsC = connect(
    state => ({
        isAuthenticated : selectors.isAuthenticated(state)
    }),
    dispatch => ({
        logout(){
            dispatch(actions.logout())
        }
    })
)(Buttons)
export default ButtonsC