import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import Icon from "react-native-vector-icons/Ionicons";
import {

StyleSheet,

Text,

View,

ScrollView,

TextInput,

TouchableOpacity

} from 'react-native';

import Back from '../components/homes/Back';
import Tab from '../components/histories/Tab';

export default class Cuti extends Component{

render(){

return(

<View style={styles.container}>
    <Back type="RIWAYAT PENGAJUAN"/>
    <Tab/>
    <Text style={styles.RiwayatCutiText}>TIDAK ADA RIWAYAT CUTI...</Text>
</View>

)

}

}


const styles = StyleSheet.create({

container : {

alignItems: 'center',


},

judulCuti:{
    marginTop: 80,
    fontWeight: 'bold',
    fontSize: 17
}, 

tanggalMulai:{
    fontSize: 14,
    textAlign: 'left',
    marginTop: 30
},
tanggalSelesai:{
    fontSize: 14,
    textAlign: 'left'
},


RiwayatCutiText:{
    fontSize: 20,
    fontWeight:'bold',
    marginTop: 400
},

inputBox: {

width:'90%',

backgroundColor:'#fff',

borderRadius: 7,

paddingHorizontal:16,

fontSize:16,

color:'#a5a5a5',

marginVertical: 10,
shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 2,

},

button: {

    width:'90%',
    
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