import React, { Component } from 'react';
import Slideshow from 'react-native-image-slider-show';
import Icon from "react-native-vector-icons/FontAwesome";

import {

StyleSheet,

SafeAreaView,

Text,

Button,

View,

StatusBar ,

TouchableOpacity,


Image

} from 'react-native';



import {Actions} from 'react-native-router-flux';



export default class Slider extends Component{


    constructor(props) {
        super(props);
     
        this.state = {
          position: 1,
          indicatorSize: 14,
          indicatorColor: '#fff',
          height: 200,
          interval: null,
          dataSource: [
            {
              title: 'Title 1',
              caption: 'Caption 1',
              url: '../../images/kantoran.jpg',
            }, {
              title: 'Title 2',
              caption: 'Caption 2',
              url: '../../images/kantoran.jpg',
            }, {
              title: 'Title 3',
              caption: 'Caption 3',
              url: '../../images/kantoran.jpg',
            },
          ],
        };
      }
     
      componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
          }, 2000)
        });
      }
     
      componentWillUnmount() {
        clearInterval(this.state.interval);
      }
     
      render() {
        return (
        <Slideshow style={styles.Slideshow}
            dataSource={this.state.dataSource}
            position={this.state.position}
            indicatorColor={this.state.indicatorColor}
            indicatorSize={this.state.indicatorSize}
            height={this.state.height}
            onPositionChanged={position => this.setState({ position })} />
        );
      }
}



const styles = StyleSheet.create({
    Slideshow:{
        color: '#fff'
    }
});