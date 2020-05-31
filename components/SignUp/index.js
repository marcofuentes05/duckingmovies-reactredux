import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import * as selectors from '../../reducers';
import * as actions from '../../actions/signUp';

import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input: {onChange, ...restInput}, meta}) => (
  <View>
    <TextInput style={styles.input} onChangeText={onChange} {...restInput}/>
    {
      meta.dirty && meta.error && (
        <Text style={styles.textError}>{meta.error}</Text>
      )
    }
  </View>
)

const renderInputPassword = ({ input: {onChange, ...restInput}, meta}) => (
  <View>
    <TextInput secureTextEntry={true} style={styles.input} onChangeText={onChange} {...restInput}/>
    {
      meta.dirty && meta.error && (
        <Text style={styles.textError}>{meta.error}</Text>
      )
    }
  </View>
)

const SignUp = ({
  handleSubmit,
  isSigningUp,
  isSignedUp,
  navigation,
}) => {
  if(isSignedUp) {
    navigation.navigate('MainPage')
  }
  return (
    <View style={styles.view}>
      <Text style={styles.registro}>Registro</Text>
      <Text>Nombre</Text>
      <Field
        name="firstName"
        type="text"
        placeholder="Nombre"
        component={renderInput}
        />
      <Text>Apellido</Text>
      <Field
        name="lastName"
        type="text"
        placeholder="Apellido"
        component={renderInput}
        />
      <Text>Usuario</Text>
      <Field
        name="username"
        type="text"
        placeholder="Usuario"
        component={renderInput}
        />
      <Text>Correo</Text>
      <Field
        name="email"
        type="text"
        placeholder="Correo"
        component={renderInput}
        />
      <Text>Contraseña</Text>
      <Field
        name="password"
        type="password"
        placeholder="Contraseña"
        component={renderInputPassword}
        />
      <Text>Confirmar contraseña</Text>
      <Field
        name="confirmPassword"
        type="password"
        placeholder="Confirmar contraseña"
        component={renderInputPassword}
        />
      <View>
        {
          isSigningUp ? (
            <Text>{'Creando...'}</Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.createText} >Crear cuenta</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

export default connect(
  (state) => ({
      isSigningUp: selectors.getIsSigningUp(state),
      isSignedUp: selectors.isAuthenticated(state),
  }),
)(
  reduxForm({
    form: 'signUp',
    onSubmit({username, password, confirmPassword, firstName, lastName, email}, dispatch){
      dispatch(
        actions.startSignUp(username,password,firstName,lastName,email),
      );
    },
    validate(values) {
      const errors = {};
      if(values.password && values.confirmPassword && values.password !== values.confirmPassword) {
        errors.confirmPassword = "La contraseñas no son iguales!";
      }else if (values.email && !values.email.includes('@') | !values.email.includes('.com')) {
        errors.email = "Ingrese un correo con @ y .com"
      }
      return errors;
    },
  })(SignUp)
);

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height:37,
    width:250,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 5,
  },

  button: {
    backgroundColor:"black",
    borderStyle:"solid",
    borderColor: "black",
    marginTop: 5,
    height: 50,
    width: 100,
    borderRadius: 50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
  },

  createText: {
    color: 'white',
    borderStyle: 'solid',
  },

  registro: {
    fontSize: 75,
    marginBottom:20,
    bottom: 35,
  },

  view: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },

  textError: {
    color:'red',
  }
})