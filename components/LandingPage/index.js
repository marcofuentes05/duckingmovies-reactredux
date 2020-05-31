import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import * as actions from './../../actions/auth';
import * as selectors from './../../reducers'

const Buttons = ({ isAuthenticated , navigation} ) => {
        
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Sign In redirect') /*TODO*/}>
                <Text style={styles.button}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250,
        margin: 10,
        borderRadius: 5
    },
    container: {
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250,
        margin: 10,
        borderRadius: 50
    }
})
const ButtonsC = connect(
    state => ({
        isAuthenticated : selectors.isAuthenticated(state)
    }),
    dispatch => ({

    })
)(Buttons)
export default ButtonsC