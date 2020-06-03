import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
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
    TouchableWithoutFeedback
} from 'react-native';
import * as actions from './../../actions/auth';
import * as selectors from './../../reducers'
import ItemBox from './../ItemBox'
import BB from './../../static/BreakingBad.jpg'
import SeriesCarrier from './SeriesCarrier'
import MoviesCarrier from './MoviesCarrier'
import VideogamesCarrier from './VideoGamesCarrier'
import Carrousel from './BannerCarrusel'
import Emoji from 'react-native-emoji';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const whidth = dimensions.width;
const imageWidth = dimensions.width;

const mainPage = ({ isAuth , username , navigation , logout}) => {
    if (!isAuth){
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style = {styles.containerU}>
            <ScrollView  style = {{backgroundColor : 'black'}}>
                <Text>
                    <Text style={styles.username}>{`¡Bienvenido, ${username}!\t`}</Text>
                    <Emoji name = 'duck'  style = {styles.username}/>
                </Text>
                <Carrousel />
                <SeriesCarrier navigation = {navigation}/>
                <MoviesCarrier navigation={navigation}/>
                <VideogamesCarrier navigation={navigation}/>
                <TouchableOpacity style = {styles.logoutButton} onPress = {() => logout()} >
                    <Text style = {styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerU : {
        flex : 1,
        padding: 90
    },  
    image : {
        resizeMode: 'contain',
        height: imageHeight, 
        width: imageWidth    
    },
    username: {
        fontWeight: 'bold',
        color: 'white',
        fontSize : 30
    },
    logoutButton : {
        backgroundColor : 'red',
        borderRadius : 10,
        height : 45,
        alignItems : 'center',
        justifyContent : 'center',
        width : dimensions.width * 3 / 4,
        alignSelf : 'center',
        margin : 25
    },
    logoutText : {
        fontWeight : 'bold',
        color : 'white',
        textAlign : 'center',
        fontSize : 20
    }
})

const MainPageC = connect(
    state => ({
        isAuth : selectors.isAuthenticated(state),
        username : selectors.getAuthUsername(state),
    }),
    dispatch => ({
        logout(){
            dispatch(actions.logout())
        }
    })
)(mainPage)


export default MainPageC