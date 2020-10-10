import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import Header from '../Common/header';
import {NavigationService} from '../../config';
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

// import {DrawerActions } from 'react-navigation-drawer'


class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.getMemberDetails();

    // console.log('PROPSSSSSSSSSSSSSSSSSS',this.props.navigation.dispatch(DrawerActions.toggleDrawer))
  }

  // toggleDrawer = () => {
  //   console.log('FUNCTION RUN 1')
  //   this.props.navigation.dispatch(DrawerActions.openDrawer(true))
  //   console.log('FUNCTION RUN 2', this.props.navigation.dispatch(DrawerActions.openDrawer()))

  // }


  render() {
    console.log('PRPOSSS', this.props);
    let {isLoading} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar backgroundColor="#4267B2" barStyle="light-content" />

        <Header navigation={this.props.navigation} />

        {isLoading ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: 'transparent',
            }}>
            <ActivityIndicator size={50} animating={true} color="red" />
          </View>
        ):(
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View>
            <ImageBackground
              source={require('../../assets/members.jpeg')}
              style={{width: '100%', height: 300}}
            />
          </View>

          <View style={{height: 60, marginLeft: 8, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../../assets/clubserve.png')}
                style={{width: 175, height: 60, marginTop: -60}}
              />
            </View>
            <View style={{marginTop: -55, marginLeft: 8}}>
              <Text style={{fontSize: 14, color: '#FECC00'}}>
                LIONS CLUB OF CALCUTTA
              </Text>
              <Text style={{fontSize: 14, color: '#FECC00'}}>KAKURGACHI</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              marginTop: -30,
            }}>
            <View style={{flex: 1, height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('ClubInformation')}>
                <Image
                  source={require('../../assets/Club-Information.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Club Information
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{height: 120, width: '50%'}}>
              <TouchableOpacity
                // onPress={() => NavigationService.navigate('MemberDetails')}>
                onPress={() => NavigationService.navigate('MemberDetails')}>
                <Image
                  source={require('../../assets/Members-Details.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Member Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: '90%',
              backgroundColor: '#F3F3F4',
              alignSelf: 'center',
              marginTop: 4,
            }}></View>
          <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
            <View style={{flex: 1, height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('Service')}>
                <Image
                  source={require('../../assets/Service-Activities.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Service & Activities
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('BusinessCorner')}
                // onPress={() => this.toggleDrawer()}

                >
                <Image
                  source={require('../../assets/Business-Corner.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Business Coner
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: '90%',
              backgroundColor: '#F3F3F4',
              alignSelf: 'center',
              marginTop: 4,
            }}></View>
          <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
            <View style={{flex: 1, height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('Birthdays')}>
                <Image
                  source={require('../../assets/Birthdays.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Birthdays
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('Anniversaries')}>
                <Image
                  source={require('../../assets/Anniversaries.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Anniversaries
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: '90%',
              backgroundColor: '#F3F3F4',
              alignSelf: 'center',
              marginTop: 4,
            }}></View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              marginBottom: 32,
            }}>
            <View style={{flex: 1, height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('BloodDoner')}>
                <Image
                  source={require('../../assets/Blood.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Blood Doners's Corner
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 120, width: '50%'}}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('Notices')}>
                <Image
                  source={require('../../assets/Notice.png')}
                  style={{width: 125, height: 125, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginTop: -30,
                    color: '#8B95AC',
                  }}>
                  Upcoming Events
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.App.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDetails: (payload) =>
      dispatch(AppActions.bloodDonationUpdate(payload)),
    getMemberDetails: (payload) =>
      dispatch(AppActions.getMemberDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
