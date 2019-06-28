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
    constructor()
    {
        super();
        
        this.state = { currentTime: null, currentDay: null }
 
        this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    }
 
    componentWillMount()
    {
        // Call getCurrentTime function before render method is executed.
        this.getCurrentTime();
    }
 
    getCurrentTime = () =>
    {
        let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';
 
    if( minutes < 10 )
    {
        minutes = '0' + minutes;
    }
 
    if( seconds < 10 )
    {
        seconds = '0' + seconds;
    }
 
    if( hour > 12 )
    {
        hour = hour - 12;
    }
 
    if( hour == 0 )
    {
        hour = 12;
    }
 
    if( new Date().getHours() < 12 )
    {
        am_pm = 'am';
    }
 
    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });
 
    this.daysArray.map(( item, key ) =>
    {
        if( key == new Date().getDay() )
        {
            this.setState({ currentDay: item.toUpperCase() });
        }
    })        
    }
 
    componentWillUnmount()
    {
        // Clear Interval.
        clearInterval(this.timer);
    }
 
    componentDidMount()
    {
        // Set Interval and call getCurrentTime function.
        this.timer = setInterval(() =>
    {
        this.getCurrentTime();
    }, 1000);
    }
 
    render()
    {
        return(
            <View style = { styles.container }>
                <Back type="ADUAN ABSEN"/>
                <View>
                    <Text style = { styles.daysText }>{ this.state.currentDay }</Text>
                    <Text style = { styles.timeText }>{ this.state.currentTime }</Text>                    
                </View>
                <TouchableOpacity style={styles.buttonLocation}>
                    <Icon name="map-marker"
                          color="#455a64"
                          size={17}
                          style={{marginRight:10}}
                    >
                    </Icon>
                    <Text style={styles.buttonTextLocation}>
                        Lokasi Kerja
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLocation}>
                    <Icon name="map-marker"
                          color="#455a64"
                          size={17}
                          style={{marginRight:10}}
                    >
                    </Icon>
                    <Text style={styles.buttonTextLocation}>
                        Alamat
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonText}>MULAI ABSEN</Text>

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