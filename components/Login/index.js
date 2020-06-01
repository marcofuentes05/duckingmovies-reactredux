import React , { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm , reset } from 'redux-form'
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

const renderInput = ({ input: { onChange, ...restInput } }) => {
    return <TextInput style={styles.input} placeHolder = 'Usuario' textContentType = 'username' onChangeText={onChange} {...restInput} />
}
const renderInputP = ({ input: { onChange, ...restInput } }) => {
    return <TextInput style={styles.input} placeHolder='Contraseña' secureTextEntry = {true} textContentType = 'password' onChangeText={onChange} {...restInput} />
}

const Form = ( props ) => {
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <>
            <View>
                <Text  style = {{fontWeight : 'bold' , color : 'white'}}>Username:</Text>
                <Field name="username" placeholder = 'Usuario' component={renderInput} />
            </View>
            <View>
                <Text style = {{fontWeight : 'bold' , color : 'white'}}>Password:</Text>
                <Field name="password" component={renderInputP} />
            </View>
            <TouchableOpacity onPress={handleSubmit} style = {{backgroundColor : 'black'}}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style = {{backgroundColor : 'black'}}>
                <Text style={styles.button}>Clear Fields</Text>
            </TouchableOpacity>
        </>
    )
}

const LoginForm =reduxForm({
    form : 'login',
    onSubmit( {password, username} , dispatch ) {
        dispatch(actions.startLogin(username, password))
    }
})(Form)

const LoginVista = ({ isAuth , error , navigation }) => {
    if (isAuth) {
        navigation.navigate('MainPage')
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainPage' }],
        });
    }
    return(
        <View style = {styles.container}>
            <LoginForm style={styles.container}/>
            {error ? (<Text style={styles.errText}>¡Credenciales Incorrectas!</Text>) : (<Text style = {styles.errText}></Text>) }
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.button}>Back Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const LoginVistaSmart = connect(
    state => ({
        isAuth : selectors.isAuthenticated(state),
        error : selectors.isAuthError(state)
    }),
    dispatch => ({})
)(LoginVista)

export default LoginVistaSmart;

const styles = StyleSheet.create({
    errText : {
        color : 'red',
        fontSize : 19,
    },
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
        borderRadius: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems : 'center',
        padding : 90,
        backgroundColor : 'black',
    },
    input: {
        borderColor: 'black',
        backgroundColor : 'white',
        borderWidth: 1,
        height: 37,
        width: 250,
        margin : 10,
        padding : 5,
        paddingLeft : 10,
        borderRadius : 50,
        fontSize : 15
    },
    title : {
        color : 'blue',
        fontWeight : 'bold', 
        fontSize : 30
    }
})