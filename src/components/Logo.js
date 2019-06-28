import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

Image

} from 'react-native';



export default class Logo extends Component{

render(){

return(

<View style={styles.container}>

<Image  style={{height: 70, width: 70}}

source={require('../images/logo.png')}/>

<Text style={styles.logoText}>Selamat Datang Di HRD Bali</Text>

</View>

)

}

}



const styles = StyleSheet.create({

container : {

justifyContent:'flex-end',

alignItems: 'center',

flexGrow: 1,

},

logoText : {

marginVertical: 15,

fontSize:18,

color:'rgba(255, 255, 255, 0.7)'

}

});
