import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ScrollView,
  Picker,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ItemContainer from '../ItemContainer';
import * as selectors from '../../reducers';
import * as actions from '../../actions/movies';
import { AppLoading } from 'expo';
import Emoji from 'react-native-emoji';
import { Field, reduxForm } from 'redux-form';

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round(dimensions.width * 9 / 16);
// const imageWidth = dimensions.width;

const renderPicker = ({ input:{onChange, value, ...restInput}}) => (
  <Picker itemStyle={{color:'#f4511e'}} style={styles.picker} onValueChange={onChange} value={value} selectedValue={value} {...restInput}>
    <Picker.Item label="Movies" value="Movies"/>
    <Picker.Item label="Series" value="Series"/>
    <Picker.Item label="Juegos" value="Juegos"/>
  </Picker>
);

const renderGenrePicker = ({ input:{onChange, value, ...restInput}}) => (
  <Picker itemStyle={{color:'#f4511e'}} style={styles.picker} onValueChange={onChange} value={value} selectedValue={value} {...restInput}>
    <Picker.Item label="Ninguno" value="Ninguno"/>
    <Picker.Item label="Acción" value="Acci"/>
    <Picker.Item label="Thriller" value="Thriller"/>
    <Picker.Item label="Aventura" value="Aventura"/>
    <Picker.Item label="Horror" value="Horror"/>
    <Picker.Item label="Comedia" value="Comedia"/>
    <Picker.Item label="Romance" value="Romance"/>
    <Picker.Item label="Disparos" value="Disparos"/>
    <Picker.Item label="Plataformas" value="Plataformas"/>
    <Picker.Item label="Musical" value="Musical"/>
    <Picker.Item label="Drama" value="Drama"/>
    <Picker.Item label="Deporte" value="Deporte"/>
  </Picker>
);

const renderRatingPicker = ({input:{onChange, value, ...restInput}}) => (
  <Picker itemStyle={{color:'#f4511e'}} style={styles.pickerRating} onValueChange={onChange} value={value} selectedValue={value} {...restInput}>
    <Picker.Item label="5" value={5.0}/>
    <Picker.Item label="4" value={4.0}/>
    <Picker.Item label="3" value={3.0}/>
    <Picker.Item label="2" value={2.0}/>
    <Picker.Item label="1" value={1.0}/>
    <Picker.Item label="0" value={0.0}/>
  </Picker>
);

const ViewAllPage = ({series, peliculas, juegos, handleSubmit, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textCategoria}>Categoria</Text>
        <Text style={styles.textGenero}>Género</Text>
        <Text style={styles.textRating}>Rating</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Field
        name="type"
        component={renderPicker}
        />
        <Field
        name="genre"
        component={renderGenrePicker}
        />
        <Field
        name="rating"
        component={renderRatingPicker}
        />
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSubmit}>
        <Emoji name='mag' style={styles.emoji}/>
      </TouchableOpacity>
      <ScrollView style={{marginBottom:140,}}>
        {peliculas.length > 0 ? (
          peliculas.map((pelicula, id) => {
            return <ItemContainer type={'Movie'} item={pelicula} key={id} clas={pelicula.classification} nombre={pelicula.name} rating={pelicula.rating} imageUrl={pelicula.imageUrl} navigation={navigation} />
          })): <View></View>
        }
      </ScrollView>
    </View>
  )
};

export default connect(
  (state) => ({
    peliculas: selectors.getMovies(state) ? selectors.getMovies(state) : [],
  }),
)(
  reduxForm({
    form: 'search',
    onSubmit({type, genre, rating}, dispatch){
      if(type=== undefined){
        type = "Movies"
      }
      if(genre===undefined){
        genre = "Ninguno"
      }
      if(rating===undefined){
        rating = 5.0
      }
      if(type== "Movies"){
        dispatch(
          actions.startFetchingAllMovies(genre, rating)
      );}
      else if(type== "Series"){
        dispatch(

        );
      }
      else if(type== "Juegos"){
        dispatch(

        );
      }
    }
  })(ViewAllPage)
);


const styles = StyleSheet.create({
  picker:{
    height:100,
    width:100,
    marginRight:20,
    marginLeft:20,
    // flex:1,
    color:'#f4511e',
  },
  pickerRating:{
    height:100,
    width:50,
    marginRight:20,
    marginLeft:20,
    // flex:1,
    color:'#f4511e',
  },
  pickerContainer:{
    display:"flex",
    flexDirection: "row",
    flex:1,
    bottom:75,
    backgroundColor:'black',

  },
  textContainer:{
    display:"flex",
    flexDirection:"row",
    backgroundColor:'black',
  },
  textCategoria:{
    marginLeft:20,
    marginRight:28,
    fontSize:21,
    marginTop:10,
    color:'#f4511e',
    textDecorationColor:'#f4511e',
    textDecorationLine: "underline",
  },
  textGenero:{
    marginLeft:26,
    marginRight:27,
    fontSize:21,
    marginTop:10,
    color:'#f4511e',
    textDecorationColor:'#f4511e',
    textDecorationLine: "underline",
  },
  textRating:{
    marginLeft:22,
    marginRight:18,
    fontSize:21,
    marginTop:10,
    color:'#f4511e',
    textDecorationColor:'#f4511e',
    textDecorationLine: "underline",
  },
  container:{
    display:"flex",
    flexDirection:"column",
    backgroundColor:'black',
  },
  searchButton:{
    // flex:1,
    left:377,
    top:60,
    width:200,
    height:100,
    // backgroundColor:'red',
    // marginTop:200
  },
  emoji:{
    // backgroundColor:'red',
    fontSize:23,
    
  }
})