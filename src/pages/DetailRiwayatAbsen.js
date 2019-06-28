import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import Icon from "react-native-vector-icons/FontAwesome";
import {

StyleSheet,

Text,

View,

ScrollView,

TextInput,
Platform,
TouchableOpacity

} from 'react-native';

import Back from '../components/homes/Back';

export default class Absen extends Component{
 
    render()
    {
        return(
            <View style = { styles.container }>
                <Back type="ADUAN ABSEN"/>
                
                <View>
                    <Text style = { styles.daysText }>Jumat, 23 Juni 2019</Text>                  
                </View>
                <Text style={styles.buttonTextLocation}>
                        Status Absen
                    </Text>
                <TouchableOpacity style={styles.buttonLocation}>
                    <Text style={styles.buttonTextLocation}>
                        Aktif
                    </Text>
                    </TouchableOpacity>
                <Text style={styles.buttonTextLocation}>
                        Alamat Kerja
                    </Text>
                <TouchableOpacity style={styles.buttonLocation}>
                    <Icon name="map-marker"
                          color="#455a64"
                          size={17}
                          style={{marginRight:10}}
                    >
                    </Icon>
                    <Text style={styles.buttonTextLocation}>
                        Jalan Kencana Indah
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.buttonTextLocation}>
                        Lokasi Kerja
                    </Text>
                    <TouchableOpacity style={styles.buttonLocation}>
                    <Icon name="map-marker"
                          color="#455a64"
                          size={17}
                          style={{marginRight:10}}
                    >
                    </Icon>

                    <Text style={styles.buttonTextLocation}>
                        Hotel HRD BALI
                    </Text>
                    </TouchableOpacity>
                    <Text style = { styles.buttonTextLocation}>Lama Bekerja</Text>  
                    <Text style = { styles.daysText }>6 Jam 4 Menit 3 Detik</Text> 
                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonText}>ABSEN PULANG</Text>

                    </TouchableOpacity> 
            </View>
        );
    }

}


const styles = StyleSheet.create({

container : {

alignItems: 'center',


},

container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    timeText:
    {
        fontSize: 50,
        color: '#e59400'
    },
 
    daysText:
    {
        color: '#e59400',
        fontSize: 25,
        paddingBottom: 0
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

buttonLocation:{
    width:'90%',

    backgroundColor:'#fff',
    flexDirection: 'row',
    justifyContent:'center',

    borderRadius: 7,

    padding:13,
    alignItems:'center',

    fontSize:16,

    color:'#a5a5a5',

    marginVertical: 10,
    shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        shadowRadius: 9,
        elevation: 2
},
buttonTextLocation:{
    color:"#455a64",
    fontSize: 17
},

    buttonText: {

        fontSize:16,
        
        fontWeight:'500',
        
        color:'#ffffff',
        
        textAlign:'center'
        
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