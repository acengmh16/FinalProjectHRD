import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

import {

StyleSheet,

Text,

Button,

View,

StatusBar ,

TouchableOpacity

} from 'react-native';



import {Actions} from 'react-native-router-flux';



export default class FooterTab extends Component{

    signup() {

        Actions.signup();
        
        }
        home() {

            Actions.home();
            
            }
            riwayat() {

                Actions.riwayat();
                
                }

render() {

return(

<View style={styles.FooterTabContainer}>

<TouchableOpacity style={styles.button} onPress={this.home}>
        <Icon
        name="home"
        color="#455a64"
        size={23}>
        </Icon>
        <Text style={styles.FooterTabText}>HOME</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.riwayat}>
        <Icon
        name="clock-o"
        color="#455a64"
        size={23}>
        </Icon>
        <Text style={styles.FooterTabText}>RIWAYAT</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.signup}>
        <Icon
        name="user-circle"
        color="#455a64"
        size={23}>
        </Icon>
        <Text style={styles.FooterTabText}>PROFIL</Text>
    </TouchableOpacity>


</View>

)

}

}



const styles = StyleSheet.create({

FooterTabContainer : {

backgroundColor:'#fff',
flexDirection: 'row',
shadowOffset:{ height: 17},
shadowColor: 'black',
shadowOpacity: 0.07,
position: 'absolute',
right: 0, 
left: 0,
bottom: 0,
zIndex: 9
},
button: {
    flex: 1,
    alignItems: 'center',
    padding: 7
},
FooterTabText:{
    fontSize: 10,
    marginTop: 3,
    color: '#455a64'

}

});