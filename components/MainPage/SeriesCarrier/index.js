import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import ItemBox from './../../ItemBox'
import * as selectors from './../../../reducers'
import * as actions from './../../../actions/series'
import * as selectedItemAction from './../../../actions/selectedItems'
import * as selectedCategoryActions from '../../../actions/selectedCategory';
import ItemDetail from './../../ItemDetail'
const dimensions = Dimensions.get('window');

const SerieCarrier = ({series , load , navigation, selectCategory}) => {
    useEffect(() => load() ,[])
    return (
        <View>
            <View style={{display:"flex", flexDirection:"row"}} >
                <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Series Trending</Text>
                <TouchableOpacity onPress={()=>{selectCategory("Series"), navigation.navigate('ViewAllPage')}}>
                    <Text style={{color:'#f4511e', marginLeft:130,marginTop:20,borderColor:'white'}}>Ver todo</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{ backgroundColor: 'black' }}>
                {series.map ((serie , id) => {
                    return <ItemBox type={'Serie'} item={serie} key={id} nombre={serie.name} rating={serie.rating} clasificacion={serie.classification} navigation={navigation} imageUrl={serie.imageUrl} />
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
        },
        selectCategory(category){
            dispatch(selectedCategoryActions.selectCategory(category))
        },
    })
)(SerieCarrier)