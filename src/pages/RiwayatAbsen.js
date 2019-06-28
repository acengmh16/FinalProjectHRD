import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import Icon from "react-native-vector-icons/Ionicons";
import {

StyleSheet,

Text,

View,

Image,

ScrollView,

TextInput,

TouchableOpacity

} from 'react-native';

import Back from '../components/homes/Back';
import Tab from '../components/histories/Tab';

import {Actions} from 'react-native-router-flux';

export default class RiwayatAbsen extends Component{
    
detailRiwayatAbsen() {

    Actions.detailRiwayatAbsen()
    
    }
    

render(){

return(

<View style={styles.container}>
    <Back type="RIWAYAT PENGAJUAN"/>
    <Tab/>
    <Text style={styles.RiwayatCutiText}>Riwayat Absen: </Text>
    <TouchableOpacity style={styles.buttonMenu} onPress={this.detailRiwayatAbsen}>
        <Image  style={{height: 70, width: 70}} source={require('../images/absen.png')}/>
        <Text style={styles.textMenu}>Hari Ini, 24 Desember 2019</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonMenu} onPress={this.detailRiwayatAbsen}>
        <Image  style={{height: 70, width: 70}} source={require('../images/absen.png')}/>
        <Text style={styles.textMenu}>Hari Ini, 24 Desember 2019</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonMenu} onPress={this.detailRiwayatAbsen}>
        <Image  style={{height: 70, width: 70}} source={require('../images/absen.png')}/>
        <Text style={styles.textMenu}>Hari Ini, 24 Desember 2019</Text>
    </TouchableOpacity>
</View>

)

}

}


const styles = StyleSheet.create({

    Container : {
        alignItems: 'center'
    },
    RiwayatCutiText:{
        marginTop: 200,
        marginBottom: 20
    },
    buttonMenu:{
        flexDirection: 'row',
        padding: 10,
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        shadowRadius: 9,
        elevation: 2,
        alignItems: "center",
        justifyContent: 'space-around',
        marginBottom: 10
    },
    textMenu:{
        fontWeight: 'bold',
        marginLeft: 12
    }



});