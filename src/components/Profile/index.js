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
  ActivityIndicator,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import Header from '../Common/header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ProfileActions} from '../../store/actions';
import {connect} from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'DINA',
      last_name: 'MEYER',
      profile_pic: '',
      edit_account_info: 'unselected',
      // member_name:  '',
      // member_code:  '' ,
      // club_designation:  '',
      // mobile_no:  '',
      // email: '',
      member_name: this.props.user_details && this.props.user_details.member_name ? this.props.user_details.member_name : '',
      member_code: this.props.user_details && this.props.user_details.member_code ? this.props.user_details.member_code : '' ,
      club_designation: this.props.user_details && this.props.user_details.club_designation ? this.props.user_details.club_designation : '',
      mobile_no: this.props.user_details && this.props.user_details.mobile_no ? this.props.user_details.mobile_no : '',
      email: this.props.user_details && this.props.user_details.email ? this.props.user_details.email : '',
    };
    console.log('BELOW IS ACTION');
    this.props.userDetail({user_id: this.props.user_id});
  }

  updateProfileButton = () => {
    let payload = {
      user_id: this.props.user_id,
      member_name: this.state.member_name,
      // member_code: this.state.member_code,
      club_designation: this.state.club_designation,
      mobile_no: this.state.mobile_no,
      email: this.state.email
    }
    console.log('PAYLOADDDDDD', payload)
    this.props.updateUserDetails(payload);
  }

  render() {
    const {first_name, last_name} = this.state;
    const {isLoading, user_details} = this.props;
    console.log('USER DETAILS:',user_details)


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
          <ScrollView style={{flexGrow: 1, marginBottom: 20}}>
            <View style={{height: 20}}></View>
            <View style={styles.friendsWidgetBox}>
              <View style={[styles.friendsImgWrap]}>
                <Image
                  style={styles.ImageSize}
                  source={require('../../assets/profileImg.jpg')}
                />
              </View>
              <View style={styles.MainViewpostHeadingWrap}>
                <View style={[styles.postHeadingWrap]}>
                  <Text style={styles.friendsTitle}>
                    {this.props.user_details && this.props.user_details.member_name ? this.props.user_details.member_name : ''}
                  </Text>
                </View>
                {/* <View style={[styles.postHeadingWrap, styles.FlexRow]}>
                      <Text style={[styles.friendssubTitle]}>Linked Account via</Text>
                      <View style={[styles.friendsImgWrap]}>
                          <VectorIcon name="facebook" size={20} color="#4267B2" />
                      </View>
                  </View> */}
              </View>
            </View>
            <View style={styles.profileAboutBox}>
              <View style={styles.abtHeadingWrap}>
                <Text style={styles.aboutStyle}>About me</Text>
                <TouchableOpacity style={[styles.editIconWrap]}>
                  <Icon name="edit" size={11} color="#009FE3" />
                </TouchableOpacity>
              </View>
              <View style={styles.MainViewAbtDesc}>
                <Text style={styles.abtDesc}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry
                </Text>
              </View>
            </View>
            {this.state.edit_account_info == 'unselected' ? (
              <View
                style={{
                  marginTop: 14,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  backgroundColor: '#fff',
                  marginHorizontal: 10,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 4,
                }}>
                <View style={styles.abtHeadingWrap}>
                  <Text style={styles.aboutStyle}>Account Info</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({edit_account_info: 'selected'});
                    }}
                    style={[styles.editIconWrap]}
                    // onPress={() => {
                    //     this.displayModal(true)
                    // }}
                  >
                    <Icon name="edit" size={11} color="#009FE3" />
                  </TouchableOpacity>
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <Text style={styles.nameStyle}>
                    {this.props.user_details && this.props.user_details.member_name ? this.props.user_details.member_name : ''}
                    </Text>
                    <Text style={styles.namePlaceholder}>First Name</Text>
                  </View>
                  {/* <View>
                    <Text style={styles.nameStyle}>{last_name}</Text>
                    <Text style={styles.namePlaceholder}>Last Name</Text>
                  </View> */}
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <Text style={styles.nameStyle}>
                    {this.props.user_details && this.props.user_details.member_code ? this.props.user_details.member_code : ''}
                    </Text>
                    <Text style={styles.namePlaceholder}>Member Id</Text>
                  </View>
                  <View>
                    <Text style={styles.nameStyle}>
                    {this.props.user_details && this.props.user_details.club_designation ? this.props.user_details.club_designation : ''}
                    </Text>
                    <Text style={styles.namePlaceholder}>Designation</Text>
                  </View>
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <Text style={styles.nameStyle}>Chatter Accoutant</Text>
                    <Text style={styles.namePlaceholder}>JOB PROFESSION</Text>
                  </View>
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <Text style={styles.nameStyle}>
                    {this.props.user_details && this.props.user_details.mobile_no ? this.props.user_details.mobile_no : ''}
                    </Text>
                    <Text style={styles.namePlaceholder}>PHONE NO</Text>
                  </View>
                </View>
                <View style={styles.infoStyle}>
                  <View>
                  <Text style={styles.nameStyle}>{this.props.user_details && this.props.user_details.email ? this.props.user_details.email : ''}</Text>
                    <Text style={styles.namePlaceholder}>EMAIL ID</Text>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  marginTop: 14,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  // backgroundColor: 'red',
                  marginHorizontal: 10,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 4,
                }}>
                <View style={styles.abtHeadingWrap}>
                  <Text style={styles.aboutStyle}>Edit Account Info</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({edit_account_info: 'unselected'});
                    }}
                    style={[styles.editIconWrap]}
                    // onPress={() => {
                    //     this.displayModal(true)
                    // }}
                  >
                    <Icon name="close" size={11} color="#009FE3" />
                  </TouchableOpacity>
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <TextInput
                      value={this.state.member_name}
                      placeholder="Enter Name"
                      onChangeText={(member_name) =>
                        this.setState({member_name})
                      }
                      style={styles.nameStyle}
                    />
                    {/* <Text style={styles.nameStyle}>
                      {user_details.member_name}
                    </Text> */}
                    <Text style={styles.namePlaceholder}>First Name</Text>
                  </View>
                  {/* <View>
                    <Text style={styles.nameStyle}>{last_name}</Text>
                    <Text style={styles.namePlaceholder}>Last Name</Text>
                  </View> */}
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <TextInput
                      value={this.state.member_code}
                      placeholder="Enter Member ID"
                      onChangeText={(member_code) =>
                        this.setState({member_code})
                      }
                      style={styles.nameStyle}
                    />
                    <Text style={styles.namePlaceholder}>Member Id</Text>
                  </View>
                  <View>
                    <TextInput
                      value={this.state.club_designation}
                      placeholder="Enter Designation"
                      onChangeText={(club_designation) =>
                        this.setState({club_designation})
                      }
                      style={styles.nameStyle}
                    />
                    <Text style={styles.namePlaceholder}>Designation</Text>
                  </View>
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <Text style={styles.nameStyle}>Chatter Accoutant</Text>
                    <Text style={styles.namePlaceholder}>JOB PROFESSION</Text>
                  </View>
                </View>
                <View style={styles.infoStyle}>
                  <View style={{paddingRight: '15%'}}>
                    <TextInput
                      value={this.state.mobile_no}
                      placeholder="Enter Mobile Number"
                      onChangeText={(mobile_no) => this.setState({mobile_no})}
                      style={styles.nameStyle}
                    />
                    <Text style={styles.namePlaceholder}>PHONE NO</Text>
                  </View>
                </View>
                <View style={styles.infoStyle}>
                  <View>
                    <TextInput
                      value={this.state.email}
                      placeholder="Enter Email"
                      onChangeText={(email) => this.setState({email})}
                      style={styles.nameStyle}
                    />
                    <Text style={styles.namePlaceholder}>EMAIL ID</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    height: '10%',
                    width: '100%',
                    borderRadius: 50,
                    backgroundColor: '#4267B2',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onPress={() => {
                      this.updateProfileButton()
                  }}
                >
                  {
                    isLoading ? (
                      <ActivityIndicator color={'red'} />
                    ) : (
                      <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    Update
                  </Text>
                    )
                  }
                </TouchableOpacity>
              </View>
            )}
            <View style={{height: 20}}></View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.Profile.isLoading,
    user_details: state.Profile.user_details.user_details,
    user_id: state.Auth.user_id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userDetail: (payload) => dispatch(ProfileActions.userDetails(payload)),
    updateUserDetails: (payload) => dispatch(ProfileActions.updateUserDetails(payload)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
