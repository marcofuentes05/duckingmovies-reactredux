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
import { block } from 'react-native-reanimated';
import Emoji from 'react-native-emoji';


const Buttons = ({ isAuthenticated , logout , navigation} ) => {
    useEffect(() => logout() , [])
    isAuthenticated && navigation.navigate('MainPage')
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Ducking Movies</Text>
            <View style={{display:"flex", flexDirection: "row"}}>
                <Emoji name='duck' style={styles.emojiPato}/>
                <Emoji name='movie_camera' style={styles.emojiCamara}/>
            </View>
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
        marginTop: 70,
    },
    container: {
        flex : 1,
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor : 'black',

    },
    title: {
        color:'#f4511e',
        fontSize:40,
        // fontFamily: 
        borderRadius:20,
        marginTop:100,
        fontWeight: 'bold'
    },
    emojiPato:{
        fontSize:90,
    },
    emojiCamara:{
        fontSize:90,
        marginLeft:50,
    },
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