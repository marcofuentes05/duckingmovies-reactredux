import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import * as actions from './../../actions/auth';
import * as selectors from './../../reducers'
import BB from './../../static/BreakingBad.jpg'
// import { TouchableHighlight } from 'react-native-gesture-handler';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const itemBox = ({nombre, rating, clasificacion, image /*IMAGE TODO*/}) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {() => console.log('Hola ')}>
            <View>
                <Text style = {styles.name}>{nombre}</Text>
                <View>
                    <Text style={styles.rating}>{rating + ' ducks'}</Text>
                    <Text style = {styles.pg}>{clasificacion}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1 ,
        height : 130,
        width: 130,
        backgroundColor : 'red',
        margin : 15,
        padding : 15 ,
        borderRadius : 15,
        justifyContent : 'space-around',
        borderWidth : 2
    }, 
    name : {
        textAlign : 'center' ,         
        fontSize : 26,
        fontWeight : 'bold',
        color : 'black'
    },
    rating : {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'  
    },
    pg: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color : 'black'
    }
})

export default itemBox;