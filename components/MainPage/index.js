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
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const mainPage = () => {
    return (
        <SafeAreaView style = {styles.containerU}>
            <ScrollView  style = {{backgroundColor : 'black'}}>
                <ScrollView horizontal = {true} style = {{ backgroundColor : 'blue' , height : imageHeight}}>
                    <Image source = {BB} style  = {styles.image}/>
                    <Image source={BB} style={styles.image} />
                    <Image source={BB} style={styles.image} />
                </ScrollView>
                
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
})

const MainPageC = connect(
    state => ({

    }),
    dispatch => ({

    })
)(mainPage)

export default MainPageC