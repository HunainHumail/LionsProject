import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar, FlatList} from 'react-native';
import Header from '../Common/header';

export default class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <StatusBar backgroundColor="#335393"
          barStyle="light-content" />
        <Header navigation={this.props.navigation} />
        <Text style={{marginTop:50,fontSize:18}}>Business</Text>
      </View>
    );
  }
}