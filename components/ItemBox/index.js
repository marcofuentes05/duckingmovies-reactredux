import React, { useEffect , useRef } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import {
    Animated,
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
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';
import * as actions from './../../actions/auth';
import * as selectors from './../../reducers'
import BB from './../../static/BreakingBad.jpg'
// import { TouchableHighlight } from 'react-native-gesture-handler';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
import * as action from './../../actions/selectedItems'

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 
    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }, [])
    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

const itemBox = ({item , type , nombre, rating, clasificacion, navigation , change , imageUrl /*IMAGE TODO*/}) => {
    return (
        <FadeInView >
            <TouchableOpacity style={styles.container} onPress={() => change(item , navigation , type)}>
                <ImageBackground 
                    source={{ uri: imageUrl}}
                            style = {styles.card}
                    >
                    <View style = {styles.textContainer}>
                        <Text style = {styles.infoText}>{nombre}</Text>
                        <Text style = {styles.infoText}>{rating}</Text>
                        <Text style = {styles.infoText}>{clasificacion}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </FadeInView>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: "rgba(0,0,0, 0.7)",
        padding : 5,
        borderRadius : 10
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign : 'center'
    },
    container :{
        flex : 1 ,
        height : 130,
        width: 130,
        backgroundColor: '#f4511e',
        margin : 15,
        // padding : 15 ,
        borderRadius : 15,
        justifyContent : 'space-around',
        borderWidth : 2,
        borderColor : 'black',
        
    }, 
    name : {
        textAlign : 'center' ,         
        fontSize : 18,
        fontWeight : 'bold',
        color : 'white'
    },
    rating : {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white'  
    },
    pg: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'normal',
        color : 'white'
    },
    card: {
        flex: 1,
        // marginVertical: 4,
        // marginHorizontal: 16,
        // borderRadius: 5,
        // overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default connect(
    state => ({

    }),
    dispatch => ({
        change(prop , navigation , type){
            dispatch(action.selectItem({ type , ...prop}))
            navigation.navigate('DetailPage')
        }
    })
)(itemBox);