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

export default class Cuti extends Component{

    constructor(props){
        super(props)
        //set value in state for initial date
        this.state = {date:"15-05-2018"}
      }

render(){

return(

<View style={styles.container}>

    <Back type="ADUAN CUTI"/>

    <Text style={styles.judulCuti}>MASUKKAN DETAIL PERMOHONAN</Text>

    <Text style={styles.tanggalMulai}>Pilih Tanggal Mulai Cuti</Text>
    <DatePicker
          style={styles.inputBox}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Pilih Tanggal Mulai Cuti"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <Text style={styles.tanggalSelesai}>Piluh Tanggal Selesai Cuti</Text>
        <DatePicker
          style={styles.inputBox}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Pilih Tanggal Selesai Cuti"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />

        <TextInput style={styles.inputBox}

        underlineColorAndroid='rgba(0,0,0,0)'

        placeholder="Masukkan Detail Ajuan"

        placeholderTextColor = "#a5a5a5"

        />

        <TouchableOpacity style={styles.button}>

        <Text style={styles.buttonText}>AJUKAN CUTI</Text>

        </TouchableOpacity>
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