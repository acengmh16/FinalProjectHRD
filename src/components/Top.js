import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

import {

StyleSheet,

Text,

Button,

View,

StatusBar ,

TouchableOpacity,

Image

} from 'react-native';



import {Actions} from 'react-native-router-flux';



export default class Top extends Component{



render() {

return(

<View style={styles.TopContainer}>
    <Image  style={{height: 40, width: 50}} source={require('../images/logo_warna.jpg')}/>
</View>

)

}

}



const styles = StyleSheet.create({

TopContainer : {
position: 'absolute',
right: 0, 
left: 0,
top: 0,
backgroundColor:'#fff',
shadowOffset:{ height: 17},
shadowColor: 'black',
shadowOpacity: 0.07,
padding: 10,
width: '100%',
alignItems: 'center',
zIndex: 9
}
});