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
import {Fonts, Images, Metrix} from '../../config';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

class BloodDonor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2020-08-15',
      checked: 'Yes',
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
    this.props.getMemberDetails();
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

  saveButton = () => {
    this.props.updateDetails({
      date: this.state.date,
      id: this.props.user_id,
    });
  };
  render() {
    let {isLoading, memberDetails} = this.props;
    console.log('MEMBERDETAILS', memberDetails);
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar backgroundColor="#4267B2" barStyle="light-content" />
        <Header navigation={this.props.navigation} />
        <Text
          style={{
            marginTop: 10,
            fontSize: Metrix.customFontSize(20),
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#00529C',
          }}>
          Blood Donors
        </Text>
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
                width: Metrix.HorizontalSize(346),
                marginHorizontal: Metrix.HorizontalSize(15),
                backgroundColor: '#0083F991',
                borderWidth: 1,
                borderColor: '#51ADFF',
                marginVertical: Metrix.VerticalSize(5),
                alignSelf: 'center',
                borderRadius: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: Metrix.customFontSize(13),
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#004584',
                  }}>
                  Are you interested to donate your Blood ?
                </Text>
                <RadioButton
                  color={'#004584'}
                  uncheckedColor={'white'}
                  value="Yes"
                  status={
                    this.state.checked === 'Yes' ? 'checked' : 'unchecked'
                  }
                  onPress={() => this.setState({checked: 'Yes'})}
                />
                <Text
                  style={{
                    fontSize: Metrix.customFontSize(13),
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#004584',
                  }}>
                  Yes
                </Text>
                <RadioButton
                  color={'#004584'}
                  uncheckedColor={'white'}
                  value="No"
                  status={this.state.checked === 'No' ? 'checked' : 'unchecked'}
                  onPress={() => this.setState({checked: 'No'})}
                />
                <Text
                  style={{
                    fontSize: Metrix.customFontSize(13),
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#004584',
                  }}>
                  No
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: Metrix.VerticalSize(10),
                }}>
                <Text
                  style={{
                    fontSize: Metrix.customFontSize(13),
                    textAlign: 'center',
                  }}>
                  If any last donated date
                </Text>
                <DatePicker
                  // style={{}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateInput: {
                      marginLeft: 10,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({date: date});
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    this.saveButton();
                  }}
                  style={{
                    backgroundColor: '#FF6969',
                    paddingHorizontal: Metrix.HorizontalSize(17),
                    paddingVertical: Metrix.VerticalSize(8),
                    marginHorizontal: Metrix.VerticalSize(5),
                    borderRadius: 20,
                  }}>
                  {this.props.isLoading ? (
                    <ActivityIndicator color={'red'} />
                  ) : (
                    <Text
                      style={{
                        fontSize: Metrix.customFontSize(13),
                        textAlign: 'center',
                        color: 'white',
                      }}>
                      Save
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '80%',
                height: 50,
                backgroundColor: '#F1F2F3',
                marginTop: 10,
                alignSelf: 'center',
                borderRadius: 25,
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
              <View style={{
                marginBottom: Metrix.VerticalSize(11)
              }}>
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
                            Member Id :{' '}
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
                            Designation :{' '}
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
                            Last Donation :{' '}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 14,
                              color: '#737373',
                            }}>
                            {item.last_date_blood_donate}
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
                            Mobile No :{' '}
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
                            Email Id :{' '}
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
                            justifyContent: 'center',
                            alignSelf: 'center',
                          }}>
                          <Image
                            source={require('../../assets/bloodIcon.png')}
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
                          {item.blood_group}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
                </View>
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
    user_id: state.Auth.user_id,
    memberDetails: state.App.memberDetails,
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

export default connect(mapStateToProps, mapDispatchToProps)(BloodDonor);
