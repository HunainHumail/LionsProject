import React, { Component } from 'react';
import { View, Text,Image,StatusBar, TextInput } from 'react-native';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailBorderColor: "#FFFFFF",
    };
  }

  changeOnFocusBorderColor(type, action) {
    switch (type) {
      case 'email':
        this.setState({
          emailBorderColor: action == 'focus' ? "#FECC00" : "#FFFFFF",
        })
        break;
      case 'password':
        this.setState({
          passwordBorderColor: action == 'focus' ? "#FECC00" : "#FFFFFF",
        })
        break;
    }
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:"#335393"}}>
      <StatusBar backgroundColor="#335393"
          barStyle="light-content"/>
        <View style={{marginTop:32}}><Image source={require('../../assets/clubserve.png')} style={{width:240,height:75,alignSelf:"center"}} /></View>
        <View style={{marginTop:32}}>
          <Text style={{fontSize:24,color:"#FECC00",alignSelf:"center"}}>LIONS CLUB OF CALCUTTA</Text>
          <Text style={{fontSize:24,color:"#FECC00",alignSelf:"center"}}>KAKURGACHI</Text>
        </View>
        <View style={{height:40,borderRadius:25,width:100,marginTop:32,alignSelf:"center",backgroundColor:"#FECC00",justifyContent:"center"}}>
          <Text style={{fontSize:16,color:"#00529C",alignSelf:"center"}}>Sign In</Text>
        </View>
        <View style={{ width: "80%", alignSelf: "center" }}>
        <View style={{ height: 50, marginTop: 60, borderBottomWidth: 1, borderColor: `${this.state.emailBorderColor}`, width: "100%", alignSelf: "center" }}>
        <TextInput
              keyboardType="email-address"
              selectionColor="#FECC00"
              onFocus={() => this.changeOnFocusBorderColor('email', 'focus')}
              onBlur={() => this.changeOnFocusBorderColor('email', 'blur')}
              autoCapitalize="none"
              placeholder="User Name / Mobile No "
              onChangeText={(email) => this.setState({ email })}
              style={{ color: "#FECC00" }}
              placeholderTextColor={`${this.state.emailBorderColor}`}
            />
        </View>
        </View>
        <View style={{height:60,width:'80%',borderRadius:30,marginTop:50,alignSelf:"center",backgroundColor:"#FECC00",justifyContent:"center"}}>
          <Text style={{fontSize:20,color:"#00529C",alignSelf:"center"}}>CONTINUE</Text>
        </View>
    </View>
    );
  }
}
