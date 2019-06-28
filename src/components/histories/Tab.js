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



export default class Tab extends Component{

    riwayat() {

        Actions.riwayat();
        
        }
        riwayatAbsen() {

            Actions.riwayatAbsen();
            
            }

render() {

return(

<View style={styles.TabContainer}>

<TouchableOpacity style={styles.TabButton} onPress={this.riwayat}>
        <Icon
        name="table"
        color="#455a64"
        size={23}>
        </Icon>
        <Text style={styles.TabText}>CUTI</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.TabButton} onPress={this.riwayatAbsen}>
        <Icon
        name="list-ul"
        color="#455a64"
        size={23}>
        </Icon>
        <Text style={styles.TabText}>ABSEN</Text>
    </TouchableOpacity>


</View>

)

}

}



const styles = StyleSheet.create({

TabContainer : {

backgroundColor:'#fff',
flexDirection: 'row',
shadowOffset:{ height: 17},
shadowColor: 'black',
shadowOpacity: 0.07,
position: 'absolute',
right: 0, 
left: 0,
top: 80,
zIndex: 9
},
TabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderColor: "#fff",
    borderBottomColor: '#455a64',
    borderWidth: 2
},
TabText:{
    fontSize: 14,
    marginTop: 7,
    color: '#455a64'

}

});