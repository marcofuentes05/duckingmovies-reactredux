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
            <Text style={styles.title}>LOGIN</Text>
            <View>
                <Text >Username:</Text>
                <Field name="username" placeholder = 'Usuario' component={renderInput} />
            </View>
            <View>
                <Text>Password:</Text>
                <Field name="password" component={renderInputP} />
            </View>
            <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset}>
                <Text style={styles.button}>Clear Fields</Text>
            </TouchableOpacity>
        </>
    )
}

const LoginForm =reduxForm({
    form : 'login',
    onSubmit( {password, username} , dispatch ) {
        dispatch(actions.startLogin(username, password))
        console.log('hola')
    }
})(Form)

const LoginVista = ({ isAuth , navigation }) => {
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
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.button}>Back Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const LoginVistaSmart = connect(
    state => ({
        isAuth : selectors.isAuthenticated(state)
    }),
    dispatch => ({})
)(LoginVista)

export default LoginVistaSmart;

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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems : 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250,
        margin : 10,
        borderRadius : 50
    },
    title : {
        color : 'blue',
        fontWeight : 'bold', 
        fontSize : 30
    }
})