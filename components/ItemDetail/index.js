import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground,
} from 'react-native';
import * as actions from '../../actions/comments';
import * as awardActions from '../../actions/awards';
import * as actorActions from '../../actions/actors';
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
        width : width,
        marginBottom : 35,
    },
    award : {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    background : {
        flex : 1,
        width : width,
        height : width * 12 / 16,
        resizeMode : 'contain'
    }
})

const RenderField = ({ input : { onChange, } , meta }) => {
    return (
        <View>
            <TextInput style = {styles.input} placeholder = {'¿Tienes algo que decir?'}onChangeText = {onChange}/>
            {meta.dirty && meta.error && (
                <Text style = {{color : 'white'}} >{meta.error}</Text>
            )}
        </View>
    )
}

const CommentForm = ({ handleSubmit }) => (
    <View style = {styles.commentWrapper}>
        <Field 
            name="commentText"
            type="text"
            component={RenderField}
        /> 
        <TouchableOpacity onPress={handleSubmit} style={styles.commentButton}>
            <Text>Enviar</Text>
        </TouchableOpacity>
    </View>
)

const afterSubmit = ( result , dispatch ) => {
    console.log('ANTES')
    dispatch(reset('commentForm'))
    console.log('DESPUES')
}

const EsteSiesForm =  connect (
    state =>({
        type: selectors.getSelectedItem(state).type,
    })
)(
    reduxForm({
        form : 'commentForm',
        onSubmitSuccess : afterSubmit ,
        onSubmit({ commentText } , dispatch, { type }){
            if (type === 'Movie') {
                dispatch(actions.startAddingMovieComment({ text: commentText, id: uuidv4() }))
            }
            if (type ==='Serie'){
                dispatch(actions.startAddingSerieComment({text : commentText , id : uuidv4() }))
            }
            if (type ==='Videogame'){
                dispatch(actions.startAddingGameComment({text : commentText , id : uuidv4() }))  
            }
        }
    })(CommentForm)
)
const ItemDetail = ({item , sAwards , mAwards , loadMovieAwards , loadSerieAwards , loadMovieActors , loadSerieActors , mActors , sActors}) => {
    useEffect(() => loadSerieAwards(), [])
    useEffect(() => loadMovieAwards(), [])
    useEffect(() => loadMovieActors() , [])
    useEffect(() => loadSerieActors() , [])
    console.log(mAwards)
    return(
        <ScrollView 
            scrollEnabled = {true} 
            style = {styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}>
                <Image source = {{uri : item.imageUrl}} style = {styles.background} />
                {(item.type === 'Movie' || item.type=== 'Serie') && (<Text style = {styles.title}> {item.name} </Text>)}
                {(item.type === 'Videogame') && (<Text style={styles.title}> {item.title} </Text>)}
                {(item.type === 'Movie') && ( (mAwards.length !== 0) ? (<Text style = {styles.award}> {'Premios: \n'} {mAwards.map(value => (<Text style = {styles.award}>{value.name + ' en ' + value.year} <Emoji  name = 'sports_medal' style = {styles.award}/> {'\n'} </Text>))} </Text>) : <Text style = {styles.award}></Text>)}
                {(item.type === 'Serie') && ( (sAwards.length !== 0) ? (<Text style = {styles.award}> {'Premios: \n'} {sAwards.map(value => <Text style={styles.award}>{value.name + ' en ' + value.year} <Emoji name='sports_medal' style={styles.award} /> {'\n'}</Text>)}</Text>) : <Text style = {styles.award}></Text>)}

                {(item.type === 'Movie') && ((mActors.length !== 0) ? (<Text style={styles.award}> {'Actores: \n'} {mActors.map(value => (<Text style={styles.award}>{value.name + ' ' + value.lastName + '\n'} </Text>))} </Text>) : <Text style={styles.award}></Text>)}
                {(item.type === 'Serie') && ((sActors.length !== 0) ? (<Text style={styles.award}> {'Actores: \n'} {sActors.map(value => <Text style={styles.award}>{value.name + ' ' + value.lastName + '\n'}</Text>)}</Text>) : <Text style={styles.award}></Text>)}

                

                <Text style = {styles.classification}> {`Clasificación: ${item.classification}`}{'\n'}</Text>
                <Text style = {styles.rating}>{`Rating: ${parseInt(item.rating)} `}<Emoji name = 'duck' style = {styles.rating}/> {'\n'}</Text>
                <Text style = {styles.classification}>¡Duckealo!</Text>
                {(item.type === 'Movie') && (<MovieComments/>)}
                {(item.type === 'Serie') && (<SerieComments />)}
                {(item.type === 'Videogame') && (<GameComments />)}
            <EsteSiesForm />
        </ScrollView>
    )
}

export default connect(
    state => ({
        item : selectors.getSelectedItem(state),
        sAwards : selectors.getSerieAwards(state),
        mAwards : selectors.getMovieAwards(state),
        mActors : selectors.getMovieActors(state),
        sActors: selectors.getSerieActors(state)
    }),
    dispatch => ({
        loadMovieAwards(){
            dispatch(awardActions.startFetchingMovieAwards())
        },
        loadSerieAwards ( ) {
            dispatch(awardActions.startFetchingSerieAwards())
        },
        loadMovieActors(){
            dispatch(actorActions.startFetchingMovieActors())
        },
        loadSerieActors(){
            dispatch(actorActions.startFetchingSerieActors())
        }
    }),
)(ItemDetail)