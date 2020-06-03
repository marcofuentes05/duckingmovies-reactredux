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
import * as actions from './../../../actions/videogames'
import * as selectedCategoryActions from '../../../actions/selectedCategory';

const VideogameCarrier = ({ videogames, load , navigation, selectCategory}) => {
    useEffect(() => load(), [])
    return (
        <View style={{ borderTopColor: 'white', borderWidth: 1, marginTop: 10 }} >
            <View style={{display:"flex", flexDirection:"row"}} >
            <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Videogames Trending</Text>
                <TouchableOpacity onPress={()=>{selectCategory("Juegos"), navigation.navigate('ViewAllPage')}}>
                    <Text style={{color:'#f4511e', marginLeft:70,marginTop:20,borderColor:'white'}}>Ver todo</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{ backgroundColor: 'black' }}>
                {videogames.map((videogame, id) => {
                    return <ItemBox type={'Videogame'} item={videogame} key={id} nombre={videogame.title} rating={videogame.rating} clasificacion={videogame.classification} navigation={navigation} imageUrl={videogame.imageUrl}/>
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
        },
        selectCategory(category){
            dispatch(selectedCategoryActions.selectCategory(category))
        },
    })
)(VideogameCarrier)