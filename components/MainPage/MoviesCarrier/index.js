import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';
import ItemBox from './../../ItemBox'
import * as selectors from './../../../reducers'
import * as actions from './../../../actions/movies'

const MovieCarrier = ({peliculas , load , navigation}) => {
    useEffect(() => load() , [] )
    return (
        <View style = {{borderTopColor : 'white' , borderWidth : 1 , marginTop : 10}} >
            <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Películas Trending</Text>
            <ScrollView horizontal={true} style={{ backgroundColor: 'black' }}>
                {peliculas.map((pelicula, id) => {
                    return <ItemBox type = {'Movie'} item = {pelicula} key={id} nombre={pelicula.name} rating={pelicula.rating} clasificacion={pelicula.classification} navigation = {navigation} />
                })}
            </ScrollView>
        </View>
    )
}

export default connect(
    state => ({
        peliculas: selectors.getMovies(state) ? selectors.getMovies(state) : []
    }),
    dispatch => ({
        load(){
            dispatch(actions.startFetchingMovies())
        }
    })
)(MovieCarrier)