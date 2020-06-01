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
import * as actions from '../../actions/comments';
import * as selectors from '../../reducers';
import Emoji from 'react-native-emoji';
import MovieComments from '../MovieComments'
import SerieComments from '../SerieComment'
import GameComments from '../GameComment'

const styles  = StyleSheet.create({
    container : {
        backgroundColor : 'black',
        padding : 10,
        flex : 1,
    },
    title : {
        fontWeight : 'bold',
        fontSize : 35,
        color : 'white',
        textAlign : 'center'
    },
    rating : {
        fontWeight: 'bold',
        fontSize: 25,
        color : 'white'
    },
    classification : {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    }
})

const ItemDetail = ({item , loadM , loadS , loadG }) => {
    if (item.type === 'Movie'){
        useEffect(() => loadM() , [])
    }else if (item.type === 'Serie'){
        useEffect(() => loadS(), [])
    }else{
        useEffect(() => loadG() , [])
    }
    return(
        <View style = {styles.container}>
            {(item.type === 'Movie' || item.type=== 'Serie') && (<Text style = {styles.title}> {item.name} </Text>)}
            {(item.type === 'Videogame') && (<Text style={styles.title}> {item.title} </Text>)}
            <Text style = {styles.rating}>{`Rating: ${parseInt(item.rating)} ducks `}</Text>
            <Text>
                {[...Array(parseInt(item.rating)).keys()].map(
                    (value , id) => <Emoji key = {id} name='duck' style = {styles.rating}/>)}
            </Text>
            <Text style = {styles.classification}> {`Classification ${item.classification}`}</Text>
            {(item.type === 'Movie') && (<Text > {`Premios : ${item.award}`}</Text>)}
            {(item.type === 'Serie') && (<Text > {`Premios : ${item.awards}`}</Text>)}
            {(item.type === 'Movie') && (<MovieComments/>)}
            {(item.type === 'Serie') && (<SerieComments />)}
            {(item.type === 'Videogame') && (<GameComments />)}
        </View>
    )
}

export default connect(
    state => ({
        item : selectors.getSelectedItem(state),
    }),
    dispatch => ({
        loadM() {
            dispatch(actions.startFetchingMovieComments())
        },
        loadS() {
            dispatch(actions.startFetchingSerieComments())
        },
        loadG() {
            dispatch(actions.startFetchingGameComments())
        }
    }),
)(ItemDetail)