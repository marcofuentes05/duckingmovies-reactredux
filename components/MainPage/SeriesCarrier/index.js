// TODO TERMINAR ESTO
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';
import ItemBox from './../ItemBox'
const dimensions = Dimensions.get('window');
const SerieCarrier = (series) => {
    return (
        <View>
            <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Series Trending</Text>
            <ScrollView horizontal={true} style={{ backgroundColor: 'black' }}>
                {series.map ((serie , id) => (
                    <ItemBox key = {id} nombre = {serie.nombre} rating = {serie.rating} clasificacion = {serie.clasificacion}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default connect (
    state => ({
        series : []
    }), 
    dispatch => ({

    })
)(SerieCarrier)