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



export default class Back extends Component{

    goBack() {

        Actions.pop();
        
        }

render() {

return(

<View style={styles.HomesBackContainer}>
    <Icon
         name="arrow-left"
         color="#455a64"
         size={20}
         style={styles.HomesBackButton}
         onPress={this.goBack}
    >
    </Icon>
    <Text style={styles.HomesBackText}>{this.props.type}</Text>
</View>

)

}

}



const styles = StyleSheet.create({

HomesBackContainer : {
position: 'absolute',
right: 0, 
left: 0,
top: 0,
backgroundColor:'#fff',
shadowOffset:{ height: 17},
shadowColor: 'black',
shadowOpacity: 0.07,
padding: 16,
width: '100%',
justifyContent:'center',
flexDirection:'row',
alignItems:'center',
zIndex: 9
},
HomesBackButton:{
    marginRight: 'auto'
},
HomesBackText:{
    marginRight: 'auto',
    fontSize: 17
}
});