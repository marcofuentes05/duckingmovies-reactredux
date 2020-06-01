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
import * as actions from './../../../actions/series'
const dimensions = Dimensions.get('window');

const SerieCarrier = ({series , load}) => {
    useEffect(() => load() ,[])
    return (
        <View>
            <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Series Trending</Text>
            <ScrollView horizontal={true} style={{ backgroundColor: 'black' }}>
                {series.map ((serie , id) => {
                    // console.log(serie)
                    return <ItemBox key = {id} nombre = {serie.name} rating = {serie.rating} clasificacion = {serie.classification}/>
                })}
            </ScrollView>
        </View>
    )
}

export default connect (
    state => ({
        series: selectors.getSeries(state) ? selectors.getSeries(state) : []
    }), 
    dispatch => ({
        load(){
            dispatch(actions.startFetchingSeries())
        }
    })
)(SerieCarrier)