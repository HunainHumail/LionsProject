import React, { Component } from 'react';
import { View, Text, ImageBackground,Image,TouchableOpacity,StyleSheet,ScrollView,StatusBar } from 'react-native';
import { NavigationService } from '../../config';
import { DrawerActions } from '@react-navigation/native';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toggleDrawer = () => {
    console.log('FUNCTION RUN 1')
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    console.log('FUNCTION RUN 2')

  }
  navigateToUserTab = () => {
    NavigationService.navigate('NavDrawer', {transition: 'SlideFromLeft'});
  };

  render() {
    console.log("PROPSSSS HEADER:", this.props)
    return (
        <View style={{height:60,width:"100%",backgroundColor:'#4267B2',flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{width:'10%'}}>
        <TouchableOpacity
            onPress={() =>     this.navigateToUserTab()}
            // }
            // onPress={() => NavigationService.toggleDrawer('DrawerNavigation')}
          >
            <View style={{justifyContent:"center",height:50}}>
            <View style={{width: 30, height: 5, backgroundColor: "#FFFFFF", marginTop: 9,marginLeft:12,borderRadius:3}}></View>
            <View style={{width: 30, height: 5, backgroundColor: "#FFFFFF", marginTop: 5,marginLeft:12,borderRadius:3}}></View>
            <View style={{width: 30, height: 5, backgroundColor: "#FFFFFF", marginTop: 5,marginLeft:12,borderRadius:3}}></View>
            </View>
          </TouchableOpacity>
        </View>
     
        <View style={{width:"80%",justifyContent:"center"}}><Text style={{fontFamily:"Muli-Bold",fontSize:14,color: "#FECC00",alignSelf:"center"}}>LIONS CLUB OF CALCUTTA KAKURGACHI</Text></View>
        <View style={{width:'10%'}}></View>
      </View>
    );
  }
}
