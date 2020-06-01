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
import * as actions from './../../../actions/videogames'

const VideogameCarrier = ({ videogames, load , navigation}) => {
    useEffect(() => load(), [])
    return (
        <View style={{ borderTopColor: 'white', borderWidth: 1, marginTop: 10 }} >
            <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Videogames Trending</Text>
            <ScrollView horizontal={true} style={{ backgroundColor: 'black' }}>
                {videogames.map((videogame, id) => {
                    return <ItemBox type = {'Videogame'} item = {videogame} key={id} nombre={videogame.title} rating={videogame.rating} clasificacion={videogame.classification} navigation = {navigation} />
                })}
            </ScrollView>
        </View>
    )
}

export default connect(
    state => ({
        videogames: selectors.getVideogames(state) ? selectors.getVideogames(state) : []
    }),
    dispatch => ({
        load() {
            dispatch(actions.startFetchingVideogames())
        }
    })
)(VideogameCarrier)