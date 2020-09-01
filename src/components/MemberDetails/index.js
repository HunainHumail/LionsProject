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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Header from '../Common/header';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

class MemberDetails extends Component {
  constructor(props) {
    super(props);
    // this.props.getMemberDetails();
    console.log('PROPPSSS', this.props.getMemberDetails());
    this.props.getMemberDetails();
    this.state = {
      searchText: '',
      bloodDoners: [
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'TENA',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'SOURAV',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'Meyer',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
        {
          name: 'DINA MEYER',
          memberId: '44454445',
          designation: 'President',
          job: 'Chatter Accountant',
          mobile: '1234567890',
          email: 'dinameyer@gmail.com',
          bGroup: 'AB+',
        },
      ],
      bloodBackupData: [],
    };
  }
  searchFilterFunction = (text) => {
    this.setState({
      searchText: text,
    });
    let data = this.props.memberDetails;
    const newData = data.filter((item) => {
      const itemData = `${item.member_name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData); // this will return true if our itemData contains the textData
    });

    this.setState({
      bloodBackupData: newData,
    });
  };
  render() {
    const {isLoading, memberDetails} = this.props;
    console.log('CONSOLE MD',memberDetails)
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
        ) : (
          <View>
            <View
              style={{
                width: '80%',
                height: 50,
                backgroundColor: '#F1F2F3',
                marginTop: 30,
                alignSelf: 'center',
                borderRadius: 25,
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', marginLeft: 8}}>
                <Icon name="search" size={30} color="#515C6F" />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Search by Name / Member Id "
                  value={this.state.searchText}
                  onChangeText={(text) => this.searchFilterFunction(text)}
                />
              </View>
            </View>
            {memberDetails.length > 0 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                extraData={this.state}
                data={
                  this.state.bloodBackupData.length > 0
                    ? this.state.bloodBackupData
                    : memberDetails
                }
                renderItem={({item, index}) => (
                  <View
                    style={{
                      height: 125,
                      marginTop: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: '#F3F3F4',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginHorizontal: 10,
                      }}>
                      <View style={{width: '20%', justifyContent: 'center'}}>
                        <Image
                          source={require('../../assets/profileImg.jpg')}
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            alignSelf: 'center',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          width: '60%',
                          justifyContent: 'center',
                          marginLeft: 12,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Muli-Bold',
                            fontSize: 16,
                            lineHeight: 16,
                          }}>
                          {item.member_name}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'Muli-SemiBold',
                              color: '#335393',
                              fontSize: 14,
                              lineHeight: 14,
                            }}>
                            Member Id :
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 14,
                              color: '#737373',
                            }}>
                            {item.id}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'Muli-SemiBold',
                              color: '#335393',
                              fontSize: 14,
                              lineHeight: 14,
                            }}>
                            Designation :
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 14,
                              color: '#737373',
                            }}>
                            {item.club_designation}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'Muli-SemiBold',
                              color: '#335393',
                              fontSize: 14,
                              lineHeight: 14,
                            }}>
                            Profession :
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 14,
                              color: '#737373',
                            }}>
                            {item.club_designation}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'Muli-SemiBold',
                              color: '#335393',
                              fontSize: 14,
                              lineHeight: 14,
                            }}>
                            Mobile No :
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 14,
                              color: '#737373',
                            }}>
                            {item.mobile_no}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'Muli-SemiBold',
                              color: '#335393',
                              fontSize: 14,
                              lineHeight: 14,
                            }}>
                            Email Id :
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 14,
                              color: '#737373',
                            }}>
                            {item.email}
                          </Text>
                        </View>
                      </View>
                      <View style={{width: '20%', justifyContent: 'center'}}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#00529C',
                            justifyContent: 'center',
                            alignSelf: 'center',
                          }}>
                          <Icon
                            name="phone-call"
                            size={30}
                            color="#FFFFFF"
                            style={{alignSelf: 'center'}}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 'Muli-SemiBold',
                            fontSize: 10,
                            color: '#00529C',
                            alignSelf: 'center',
                          }}>
                          Blood Group
                        </Text>
                        <Text
                          style={{
                            fontSize: 'Muli-SemiBold',
                            fontSize: 14,
                            color: '#FF0000',
                            alignSelf: 'center',
                          }}>
                          AB+
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.App.isLoading,
    memberDetails: state.App.memberDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMemberDetails: (payload) =>
      dispatch(AppActions.getMemberDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetails);
