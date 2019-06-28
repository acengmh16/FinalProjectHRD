import React, { Component } from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';


import Login from './pages/Login';

import Signup from './pages/Signup';

import Home from './pages/Home';

import Riwayat from './pages/Riwayat';

import Profil from './pages/Profil';


import Cuti from './pages/Cuti';

import Absen from './pages/Absen';

import RiwayatAbsen from './pages/RiwayatAbsen';

import DetailRiwayatAbsen from './pages/DetailRiwayatAbsen';


export default class Routes extends Component{

render() {

return(

<Router>

<Stack key="root" hideNavBar={true}>

<Scene key="login" component={Login} title="Login" initial={true}/>

<Scene key="signup" component={Signup} title="Register"/>

<Scene key="home" component={Home} title="Home"/>

<Scene key="riwayat" component={Riwayat} title="Riwayat"/>

<Scene key="profil" component={Profil} title="Profil"/>

<Scene key="cuti" component={Cuti} title="Cuti"/>

<Scene key="absen" component={Absen} title="Absen"/>

<Scene key="riwayatAbsen" component={RiwayatAbsen} title="RiwayatAbsen"/>

<Scene key="detailRiwayatAbsen" component={DetailRiwayatAbsen} title="DetailRiwayatAbsen"/>
</Stack>

</Router>

)

}

}
