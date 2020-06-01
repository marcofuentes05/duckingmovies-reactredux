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
    useEffect(() => logout() , [])
    isAuthenticated && navigation.navigate('MainPage')
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Registro') /*TODO*/} style = {{margin : 30}}>
                <Text style={styles.button}>Registro</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f4511e',
        color: 'black',
        fontWeight : 'bold',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250,
        margin: 10,
        borderRadius: 5,
        margin : 10,
        
    },
    container: {
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'center',
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