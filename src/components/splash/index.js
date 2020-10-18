import React, { Component } from 'react';
import { View, Text,Image,StatusBar,TouchableOpacity } from 'react-native';
import { NavigationService } from '../../config/';
import AsyncStorage from "@react-native-community/async-storage";
import {AuthActions} from '../../store/actions';
import {connect} from 'react-redux';




 class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.getUser();
  }

  getUser = () => {
    AsyncStorage.getItem('user_details').then(user_details => {
      if (user_details) {
        let parsedData = JSON.parse(user_details);
        this.props.loginSuccess(parsedData)
        NavigationService.reset_0('DashboardScreen', {user_details: user_details});
      } else {
        setTimeout(() => {
          NavigationService.replace('LoginScreen');
        }, 2000);
      }
    });
  };

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.props.navigation.navigate('LoginScreen')
  //     }, 3000);
  // }
  render() {
    return (
      <View style={{flex:1, backgroundColor:"#335393"}}>
        <StatusBar backgroundColor="#335393"
      barStyle="light-content"/>
        <View style={{ flex:1,marginVertical:50,justifyContent:"center"}}>
          <View style={{width:300,height:300,borderTopRightRadius:60,borderBottomLeftRadius:60,backgroundColor:"#FFFFFF",alignSelf:"center",justifyContent:"center"}}>
          <Image source={require('../../assets/logo.png')} style={{width:200,height:200,alignSelf:"center"}} />
          </View>
          <View style={{marginTop:32}}>
            <Text style={{fontSize:24,color:"#FECC00",alignSelf:"center"}}>LIONS CLUB OF CALCUTTA</Text>
            <Text style={{fontSize:24,color:"#FECC00",alignSelf:"center"}}>KAKURGACHI</Text>
          </View>
          <View style={{heigh:300,marginHorizontal:40,marginTop:32,alignSelf:"center"}}>
            <Text style={{fontSize:16,color:"#88AED1"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
          </View>
          {/* <TouchableOpacity
           onPress={() => NavigationService.navigate('LoginScreen')}
          // onPress={this.login}
        >
          <View style={{ height: 60, width: '80%', borderRadius: 30, marginTop: 50, alignSelf: "center", backgroundColor: "#FECC00", justifyContent: "center" }}>
            <Text style={{ fontFamily:"Muli-Bold",fontSize: 20, color: "#00529C", alignSelf: "center" }}>CONTINUE</Text>
          </View>
        </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: payload => dispatch(AuthActions.loginSuccess(payload)),
  };
};
export default connect(null,mapDispatchToProps)(SplashScreen);

