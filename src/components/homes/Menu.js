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



export default class Menu extends Component{

    cuti() {

        Actions.cuti()
        
        }

        absen() {

            Actions.absen()
            
            }
        

render() {

return(

<View style={styles.HomesMenuContainer}>
    <TouchableOpacity style={styles.buttonMenu} onPress={this.cuti}>
        <Image  style={{height: 70, width: 70}} source={require('../../images/cuti.png')}/>
        <Text style={styles.textMenu}>CUTI</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonMenu} onPress={this.absen}>
        <Image  style={{height: 70, width: 70}} source={require('../../images/absen.png')}/>
        <Text style={styles.textMenu}>ABSEN</Text>
    </TouchableOpacity>
</View>

)

}

}



const styles = StyleSheet.create({

HomesMenuContainer : {
    flexDirection:'row',
    width: '95%',
    alignSelf:'center',
    justifyContent: 'space-between',
    marginTop: 30
},

buttonMenu:{
    padding: 10,
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 2,
    alignItems: "center",
    marginBottom: 30
},
textMenu:{
    fontWeight: 'bold',
    marginTop: 12
}

});