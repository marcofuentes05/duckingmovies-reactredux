import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import * as actions from './../../actions/auth';

// const submit = (values , algo )=> {
//     console.log('submitting form', values)
//     console.log(algo)
// }

const renderInput = ({ input: { onChange, ...restInput } }) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const Form = ( props ) => {
    const { handleSubmit } = props
    return (
        <View style={styles.container}>
            <Text h1>LOGIN</Text>
            <Text>Username:</Text>
            <Field name="username" component={renderInput} />
            <Text>Password:</Text>
            <Field name="password" component={renderInput} />
            <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default reduxForm({
    form: 'login',
    onSubmit({password , username} , dispatch){
        // console.log('DISPATCHHH', password , username)
        dispatch(actions.startLogin(username, password))
    }
})(Form)

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

    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250,
        margin : 10,
        borderRadius : 50
    }
})