import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import * as action from './../../actions/selectedItems'


const ItemContainer = ({item, type, nombre, rating, clas, imageUrl,navigation, change}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={()=>change(item, navigation, type)}>
          <ImageBackground source={{ uri: imageUrl}} style={styles.image}>
        <View>
        </View>
        </ImageBackground>
        <View>
          <Text style={styles.textName}>{nombre}</Text>
          <View style={{display:"flex", flexDirection:"row"}}>
          <Text style={styles.textRating}>{rating}</Text>
          <Text style={styles.textClass}>{clas}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // marginTop:50,
    backgroundColor:'black',
    height:185,
    borderColor:'white',
    borderStyle:"solid",
    borderTopWidth:1,
    borderBottomWidth:0.5,
  },
  imageContainer:{
    width:200,
    height:200,
    paddingTop:30,
    display:"flex",
    flexDirection:"row",
  },
  image:{
    marginLeft:30,
    width:125,
    height:125,
  },
  textName: {
    color:'#f4511e',
    paddingLeft:30,
    fontSize:25,
    fontWeight: "bold",
    width:280,
  },
  textRating: {
    color:'#f4511e',
    paddingLeft:50,
    fontSize:20,
    paddingTop: 15,
  },
  textClass: {
    color:'#f4511e',
    paddingLeft:50,
    fontSize: 20,
    paddingTop: 15,
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
)(ItemContainer);