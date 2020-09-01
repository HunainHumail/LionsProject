import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Dimensions
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class ContentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname:'',
       lastName:''
    }
    this.menuItem=[
      {
        icon: 'home',
        key: "HOME",
        screen: "DashboardScreen"
      },
      {
        icon: 'account-balance',
        key: "CLUB INFORMATION",
        screen: "ClubInformation"
      },
      {
        icon: 'group',
        key: "MEMBER DETAILS",
        screen: "MemberDetails"
      },
      {
        icon: 'redeem',
        key: "SERVICE & ACTIVITIES",
        screen: "Services"
      },
      {
        icon: 'business-center',
        key: "BUSINESS CORNER",
        screen: "Business"
      },
      {
        icon: 'cake',
        key: "BIRTHDAYS",
        screen: "Birthdays"
      },
      {
        icon: 'tag-faces',
        key: "ANNIVERSARIES",
        screen: "Anniverseries"
      },
      {
        icon: 'ac-unit',
        key: "BLOOD DONER'S CORNER",
        screen: "BloodDonor"
      },
      {
        icon: 'assignment',
        key: "NOTICES & UPCOMING EVENTS",
        screen: "Notice"
      }
    ]
  }
  

  pageNavigate = item => {
    this.props.navigation.closeDrawer();
    if(item == 'HOME'){
      this.props.navigation.navigate('DashboardScreen');
    }else if(item == "CLUB INFORMATION"){
      this.props.navigation.navigate('ClubInformation');
    }
    else if(item == "MEMBER DETAILS"){
      this.props.navigation.navigate('MemberDetails');
    }
    else if(item == "SERVICE & ACTIVITIES"){
      this.props.navigation.navigate('Services');
    }
    else if(item == "BUSINESS CORNER"){
      this.props.navigation.navigate('Business');
    }
    else if(item == "BIRTHDAYS"){
      this.props.navigation.navigate('Birthdays');
    }
    else if(item == "ANNIVERSARIES"){
      this.props.navigation.navigate('Anniverseries');
    }
    else if(item == "BLOOD DONER'S CORNER"){
      this.props.navigation.navigate('BloodDonor');
    }
    else if(item == "NOTICES & UPCOMING EVENTS"){
      this.props.navigation.navigate('Notice');
    }
  };

 
  render() {
    // console.log(this.props.route.name)
    // console.log(this.props)
    const routename = this.props.items.find(it => it.key === this.props.activeItemKey)
    // console.log(routename)
    const screenName = routename.routes[routename.index].routeName
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          width: '80%',
          height: windowHeight,
          backgroundColor:"#FFFFFF"
        }}
      >
        <View style={{height:"20%",backgroundColor:'#4267B2', flexDirection:'row',justifyContent:"center"}}>
          <View style={{flex:1,justifyContent:"center",marginLeft:4}}>
          <Image source={require('../../assets/avatar.png')} style={{ width: 100, height: 100,borderRadius:50,alignSelf:"center"}} />
          </View>
          <View style={{flex:2,justifyContent:"center",marginLeft:4}}>
              <Text style={{color:"#FFFFFF",fontSize:20,lineHeight:24}}>Member Name</Text>
              <Text style={{color:"#CDDDEC",fontSize:14,lineHeight:24}}>Member Id : 201234</Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <View style={{flexDirection:"row",height:24}}>
              <Image source={require('../../assets/avatar.png')} style={{ width: 24, height: 24,borderRadius:12,alignSelf:"center"}} />
              <Text style={{color:"#FFFFFF",fontSize:14,marginLeft:4}}>Profile Settings</Text>
              </View>
              </TouchableOpacity>   
          </View>
        </View>
        <View style={{marginTop:20,marginBottom:20,height:"55%"}}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={this.menuItem}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.pageNavigate(item.key)}>
                {item.screen != screenName && <View style={{flexDirection:'row',height:50,marginLeft:10 ,marginBottom:4}}>
                 <View style={{width:30,justifyContent:"center",marginLeft:12}}>
                 <Icon name={item.icon} size={30} color="#00529C" />
                 </View>
                  <View style={{justifyContent:"center"}}>
                  <Text
                    style={{ color: "#382945", fontSize:16, marginLeft:8,fontFamily:'MUli-Bold'}}
                  >
                    {item.key}
                  </Text>
                  </View>
                </View>}
                {item.screen == screenName && 
                <View 
                style={{
                  flexDirection:'row',
                  height:50,
                  marginLeft:10 ,
                  marginBottom:4,
                  backgroundColor:'#FF6969',
                  marginRight:10,
                  borderRadius:25
                  }}>
                 <View style={{width:"10%",justifyContent:"center",marginLeft:12}}>
                 <Icon name={item.icon} size={30} color="#FFFFFF" />
                 </View>
                  <View style={{justifyContent:"center",width:"80%"}}>
                  <Text
                    style={{ color: "#FFFFFF", fontSize:16, marginLeft:8,fontFamily:'MUli-Bold'}}
                  >
                    {item.key}
                  </Text>
                  </View>
                  <View style={{width:"10%",justifyContent:"center",marginLeft:-20}}>
                    <View style={{width:34,height:34,borderRadius:17,backgroundColor:"#FFFFFF",justifyContent:"center"}}>
                    <Icon name="chevron-right" size={35} color='#FF6969' style={{alignSelf:"center"}} />
                    </View>
                  </View>
                </View>}
              </TouchableOpacity>
            )}
          />
          </View>
          <View style={{height:"20%"}}>
          <View>
            <Image source={require('../../assets/clubserve.png')} style={{ width: 240, height: 75,marginLeft:20 }} /></View>
            <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate('LoginScreen')}
            >
              <View style={{flexDirection:"row",marginTop: 20,marginLeft:20}}>
                <View>
                <Icon name="input" size={30} color="#D2CFD6" style={{transform: [{ rotate: '180deg'}]}} />
                </View>
                  <View>
                  <Text style={{ fontFamily:"Muli-Bold", fontSize: 20,marginLeft:10, color: "#D2CFD6" }}>Log Out</Text>
                  </View>
              
              </View>
        
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}