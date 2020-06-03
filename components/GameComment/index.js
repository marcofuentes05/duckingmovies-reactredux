import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import * as actions from '../../actions/comments';
import * as selectors from '../../reducers'
import filter from 'lodash/filter'

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    contaier: {
        margin: 15,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#f4511e',
    },
    author: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    textNotConfirmed: {
        backgroundColor: '#c44118',
        margin: 15,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
    }

})

const GameComment = ({ comments, isFetching , load}) => {
    useEffect(()=> load() , [])
    return (comments.length > 0) ? (
        <View>
            <Text style={styles.title}>Comentarios</Text>
            <ScrollView >
                {comments.map((comment, id) => (
                    <View key={id} style={styles.contaier} >
                        <Text style={comment.isConfirmed ? styles.text : styles.textNotConfirmed}>
                            {comment.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    ) : (
            (isFetching) ? (<Text style={styles.title}>Cargando...</Text>) :
                (<View>
                    <Text style={styles.title}> No hay comentarios aún </Text>
                </View>)
        )


}

export default connect(
    state => ({
        comments: selectors.getGameComments(state),
        isFetching : selectors.isFetchingGameComments(state),
    }),
    dispatch => ({
        load() {
            dispatch(actions.startFetchingGameComments())
        }
    })
)(GameComment)