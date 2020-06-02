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
} from 'react-native';
import * as actions from '../../actions/comments';
import * as selectors from '../../reducers';
import Emoji from 'react-native-emoji';
import MovieComments from '../MovieComments'
import SerieComments from '../SerieComment'
import GameComments from '../GameComment'
import { v4 as uuidv4 } from 'uuid';

const dimensions = Dimensions.get('window');
const width = dimensions.width;

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
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250,
        borderRadius: 50,
        marginBottom: 10,
        marginTop: 5,
        backgroundColor: 'white',
        padding: 5,
    },
    commentInput : {
        width : width*4/5,
        textAlign : 'center'
    },
    commentButton : {
        backgroundColor: '#f4511e',
        width : width*1/5,
        alignContent : 'center',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        borderRadius : 25,
        right : 0,
        margin : 10
    },
    commentWrapper : {
        flex : 1,
        flexDirection : 'row',
        // position: 'absolute',
        // bottom: 0,
        width : width
    }
})

const RenderField = ({ input : { onChange, } , meta , type}) => {
    return (
        <View>
            <TextInput style = {styles.input} placeholder = {type}onChangeText = {onChange}/>
            {meta.dirty && meta.error && (
                <Text style = {{color : 'white'}} >{meta.error}</Text>
            )}
        </View>
    )
}

const CommentForm = ({ type , handleSubmit  , comment}) => {
    const funcionlurias = values => {
        comment(values , type )
    }
    return(
        <View style = {styles.commentWrapper} >
            <Field 
                name="commentText"
                type="text"
                component={RenderField}
                type = {type}
            />
            <TouchableOpacity onPress = { handleSubmit(funcionlurias) } style = {styles.commentButton} >
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

const CommentFormConnected = connect(
    state => ({
        type : selectors.getSelectedItem(state).type,
    }),
    dispatch=> ({
        comment( values , type ){
            if (type ==='Movie'){
                dispatch(actions.startAddingMovieComment({ text: values.commentText, id: uuidv4() })) 
                // dispatch(reset('commentText'))
            }
            if (type ==='Serie'){
                dispatch(actions.startAddingSerieComment({text : values.commentText , id : uuidv4() }))
                // dispatch(reset('commentText'))    
            }
            if (type ==='Videogame'){
                dispatch(actions.startAddingGameComment({text : values.commentText , id : uuidv4() }))
                // dispatch(reset('commentText'))    
            }
            dispatch(reset('commentText'))
        }
    }),
)(reduxForm({
    form : 'commment',
    // enableReinitialize : true,
})(CommentForm))

const ItemDetail = ({item}) => {
    return(
        <ScrollView 
            scrollEnabled = {true} 
            style = {styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
            >
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
            <CommentFormConnected/>
        </ScrollView>
    )
}

export default connect(
    state => ({
        item : selectors.getSelectedItem(state),
    }),
    dispatch => ({}),
)(ItemDetail)