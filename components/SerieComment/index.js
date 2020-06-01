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

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    contaier: {
        // wsidth : dimensions.width,
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
        // fontWeight: 'bold',
        fontSize: 15
    }

})

const MovieComment = ({ comments, }) => {
    // useEffect(()=> load() , [])
    return (comments.length > 0) ? (
        <View>
            <Text style={styles.title}>Comentarios</Text>
            <ScrollView >
                {comments.map((comment, id) => (
                    <View key={id} style={styles.contaier} >
                        <Text style={styles.author}>
                            {comment.username}
                        </Text>
                        <Text style={styles.text}>
                            {comment.comentario}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    ) : (
            <View>
                <Text style={styles.title}> No hay comentarios aún </Text>
            </View>)


}

export default connect(
    state => ({
        comments: selectors.getSerieComments(state)
    }),
    dispatch => ({
        load() {
            dispatch(actions.startFetchingSerieComments())
        }
    })
)(MovieComment)