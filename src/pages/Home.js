import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import {

StyleSheet,

Text,

View,

ScrollView,

TextInput,

TouchableOpacity

} from 'react-native';

import FooterTab from '../components/FooterTab';
import Top from '../components/Top';
import Menu from '../components/homes/Menu';
import Slider from '../components/homes/Slider';

export default class Home extends Component{



render(){

return(

<View style={styles.container}>
    <Top/>
    <ScrollView>
        <Slider/>
        <Menu/>
    </ScrollView>
    <FooterTab/>
</View>

)

}

}


const styles = StyleSheet.create({

container : {

flex: 1,

justifyContent:'center',

alignItems: 'center',

paddingTop: 70

},

inputBox: {

width:300,

backgroundColor:'rgba(255, 255,255,0.2)',

borderRadius: 25,

paddingHorizontal:16,

fontSize:16,

color:'#ffffff',

marginVertical: 10

},

button: {

width:300,

backgroundColor:'#1c313a',

borderRadius: 25,

marginVertical: 10,

paddingVertical: 13

},

buttonText: {

fontSize:16,

fontWeight:'500',

color:'#ffffff',

textAlign:'center'

}



});