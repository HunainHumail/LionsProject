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
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

class ClubInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubInfoTab: [
        {
          key: 'HISTORY OF CLUB',
          selected: true,
        },
        {
          key: "PRESIDENT'S MESSAGE",
          selected: false,
        },
        {
          key: 'TEAM DETAILS',
          selected: false,
        },
        {
          key: 'PAST PRESIDENT',
          selected: false,
        },
        {
          key: 'CLUB PDG',
          selected: false,
        },
      ],
      clubInfoSelect: 'HISTORY OF CLUB',
    };
    this.props.getClubHistory();
    this.props.getPresidentMessage();
    this.props.getClubPdg();
  }

  qsTypeSwitcher(switchIndex) {
    this.setState((prevState) => {
      return {
        clubInfoTab: prevState.clubInfoTab.filter((single, index) => {
          if (switchIndex == index) {
            single.selected = true;
          } else {
            single.selected = false;
          }
          return single;
        }),
      };
    });
    if (switchIndex == 0) {
      this.setState({
        clubInfoSelect: 'HISTORY OF CLUB',
      });
    } else if (switchIndex == 1) {
      this.setState({
        clubInfoSelect: "PRESIDENT'S MESSAGE",
      });
    } else if (switchIndex == 2) {
      this.setState({
        clubInfoSelect: 'TEAM DETAILS',
      });
    } else if (switchIndex == 3) {
      this.setState({
        clubInfoSelect: 'PAST PRESIDENT',
      });
    } else if (switchIndex == 4) {
      this.setState({
        clubInfoSelect: 'CLUB PDG',
      });
    }
  }

  render() {
    const {isLoading,
       clubHistory,
       presidentMessage,
        clubPdg
      } = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar backgroundColor="#4267B2" barStyle="light-content" />
        <Header navigation={this.props.navigation} />
        <View style={{marginLeft: 12, marginRight: 12}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.clubInfoTab}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor: `${
                    item.selected == false ? '#EFFAFF' : '#FF6969'
                  }`,
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  // width: 200,
                  height: 50,
                  margin: 6,
                  marginTop: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <TouchableOpacity onPress={() => this.qsTypeSwitcher(index)}>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontFamily: 'Muli-Bold',
                        fontSize: 16,
                        color: `${
                          item.selected == false ? '#382945' : '#FFFFFF'
                        }`,
                      }}>
                      {item.key}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
          <ScrollView style={{flexGrow: 1}}>
            {this.state.clubInfoSelect == 'HISTORY OF CLUB' && (
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  // width: 200,
                  flexGrow: 1,
                  margin: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 24,
                    color: '#FF6969',
                    marginTop: 10,
                  }}>
                  Club Information
                </Text>
                <Text>{clubHistory}</Text>
              </View>
            )}

            {this.state.clubInfoSelect == "PRESIDENT'S MESSAGE" && (
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  // width: 200,
                  flexGrow: 1,
                  margin: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <View
                  style={{
                    marginTop: -10,
                    marginHorizontal: -10,
                    marginBottom: -10,
                  }}>
                  <Image
                    source={require('../../assets/president.jpg')}
                    style={{
                      height: 300,
                      alignSelf: 'center',
                      width: '100%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <Text>{presidentMessage}</Text>
                </View>
              </View>
            )}
            {this.state.clubInfoSelect == 'TEAM DETAILS' && (
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  // width: 200,
                  flexGrow: 1,
                  margin: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 24,
                    color: '#FF6969',
                    marginTop: 10,
                  }}>
                  Club Information
                </Text>
                <Text>
                  Lions Clubs International, a service membership organization
                  of over 1.4 million members worldwide, was founded in
                  Evansville, Indiana on 24 October 1916 by William Perry Woods
                  and subsequently evolved as an international service
                  organization under the guidance and supervision of its
                  secretary, Melvin Jones. In 1917, Jones was a 38-year-old
                  Chicago business leader who told members of his local business
                  club they should reach beyond business issues and address the
                  betterment of their communities and the world. Jones' group,
                  the Business Circle of Chicago, agreed. After contacting
                  similar groups around the United States, an organizational
                  meeting was held on June 7, 1917, in Chicago. The Business
                  Circle subsequently joined one of the invited groups, the
                  "International Association of Lions Clubs" and at a national
                  convention held in Dallas, Texas, later that year, those who
                  were assembled: (1) adopted a Constitution, By-Laws, Code of
                  Ethics and an Emblem; (2) established as a main tenet
                  "unselfish service to others", (3) unanimously elected Woods
                  as its first president ,effectively securing his leadership
                  for the first two years of the existence of the International
                  Association of Lions, and (4) selected Jones to serve as the
                  organization's secretary-treasurer.[3] The Lions motto is "We
                  Serve". Local Lions Club programs include sight conservation,
                  hearing and speech conservation, diabetes awareness, youth
                  outreach, international relations, environmental issues, and
                  many other programs.[4] The discussion of politics and
                  religion is forbidden. The LIONS acronym also stands for
                  Liberty, Intelligence, Our Nations' Safety.[5]
                </Text>
              </View>
            )}
            {this.state.clubInfoSelect == 'PAST PRESIDENT' && (
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  // width: 200,
                  flexGrow: 1,
                  margin: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 24,
                    color: '#FF6969',
                    marginTop: 10,
                  }}>
                  Club Information
                </Text>
                <Text>
                  Lions Clubs International, a service membership organization
                  of over 1.4 million members worldwide, was founded in
                  Evansville, Indiana on 24 October 1916 by William Perry Woods
                  and subsequently evolved as an international service
                  organization under the guidance and supervision of its
                  secretary, Melvin Jones. In 1917, Jones was a 38-year-old
                  Chicago business leader who told members of his local business
                  club they should reach beyond business issues and address the
                  betterment of their communities and the world. Jones' group,
                  the Business Circle of Chicago, agreed. After contacting
                  similar groups around the United States, an organizational
                  meeting was held on June 7, 1917, in Chicago. The Business
                  Circle subsequently joined one of the invited groups, the
                  "International Association of Lions Clubs" and at a national
                  convention held in Dallas, Texas, later that year, those who
                  were assembled: (1) adopted a Constitution, By-Laws, Code of
                  Ethics and an Emblem; (2) established as a main tenet
                  "unselfish service to others", (3) unanimously elected Woods
                  as its first president ,effectively securing his leadership
                  for the first two years of the existence of the International
                  Association of Lions, and (4) selected Jones to serve as the
                  organization's secretary-treasurer.[3] The Lions motto is "We
                  Serve". Local Lions Club programs include sight conservation,
                  hearing and speech conservation, diabetes awareness, youth
                  outreach, international relations, environmental issues, and
                  many other programs.[4] The discussion of politics and
                  religion is forbidden. The LIONS acronym also stands for
                  Liberty, Intelligence, Our Nations' Safety.[5]
                </Text>
              </View>
            )}
            {this.state.clubInfoSelect == 'CLUB PDG' && (
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  // width: 200,
                  flexGrow: 1,
                  margin: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: 24,
                    color: '#FF6969',
                    marginTop: 10,
                  }}>
                  Club Information
                </Text>
                <Text>
                  {clubPdg}
                </Text>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.App.isLoading,
    clubHistory: state.App.clubHistory,
    presidentMessage: state.App.presidentMessage,
    clubPdg: state.App.clubPdg,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getClubHistory: (payload) => dispatch(AppActions.getClubHistory(payload)),
    getPresidentMessage: (payload) => dispatch(AppActions.getPresidentMessage(payload)),
    getClubPdg: (payload) => dispatch(AppActions.getClubPdg(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubInformation);
