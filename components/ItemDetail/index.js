import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    Animated,
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
import * as selectors from './../../reducers';
import Emoji from 'react-native-emoji';


const styles  = StyleSheet.create({
    container : {
        backgroundColor : 'black',

    },
    title : {
        fontWeight : 'bold',
        fontSize : 30,
        color : 'white'
    },
    rating : {
        fontWeight: 'bold',
        fontSize: 25,
        color : 'white'
    }
})

const ItemDetail = ({item}) => {
    console.log(item)
    return(
        <ScrollView style = {styles.container}>
            {(item.type === 'Movie' || item.type=== 'Serie') && (<Text style = {styles.title}> {item.name} </Text>)}
            {(item.type === 'Videogame') && (<Text style={styles.title}> {item.title} </Text>)}
            <Text>
                <Text style = {styles.rating}>{`Rating: ${parseInt(item.rating)} ducks\t `}</Text>
                {[...Array(parseInt(item.rating)).keys()].map((value , id) => <Emoji key = {id} name='duck' style = {styles.rating}/>)}
            </Text>
            <Text > {`Classification ${item.classification}`}</Text>
            {(item.type === 'Movie') && (<Text > {`Premios : ${item.award}`}</Text>)}
            {(item.type === 'Serie') && (<Text > {`Premios : ${item.awards}`}</Text>)}
        </ScrollView>
    )
}

export default connect(
    state => ({
        item : selectors.getSelectedItem(state)
    }),
    dispatch => ({}),
)(ItemDetail)