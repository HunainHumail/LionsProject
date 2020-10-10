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
} from 'react-native';
import {Fonts, Metrix} from '../../config';
import Header from '../Common/header';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingTab: [
        {
          key: 'Upcoming Board Meeting',
          selected: true,
        },
        {
          key: 'Upcoming General Meeting',
          selected: false,
        },
      ],
      tabSelect: 'Upcoming Board Meeting',
    };
    this.props.getNotice('boardMeeting');
  }

  qsTypeSwitcher(switchIndex) {
    this.setState((prevState) => {
      return {
        meetingTab: prevState.meetingTab.filter((single, index) => {
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
        tabSelect: 'Upcoming Board Meeting',
      });
      this.props.getNotice('boardMeeting');
    } else if (switchIndex == 1) {
      this.setState({
        tabSelect: 'Upcoming General Meeting',
      });
      this.props.getNotice('generalMeeting');

    }
  }

  render() {
    const {isLoading, noticeData} = this.props;
    console.log('NOTICE DATA CONSOLE:', noticeData);
    return (
      <View>
        <StatusBar backgroundColor="#335393" barStyle="light-content" />
        <Header navigation={this.props.navigation} />
        <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: Metrix.customFontSize(20),
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#00529C',
            }}>
            Notice Board
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.meetingTab}
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
              <FlatList
                data={noticeData}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        marginHorizontal: Metrix.HorizontalSize(23),
                      }}>
                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: Metrix.customFontSize(14),
                          fontWeight: '700',
                          color: '#00529C',
                        }}>
                        {item.notice_title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Icons
                          name="alarm"
                          color="#FF6969"
                          size={Metrix.VerticalSize(13)}
                        />
                        <Text
                          style={{
                            color: '#5D5D5D',
                            fontSize: Metrix.customFontSize(11),
                          }}>
                          11:21 AM
                        </Text>
                        <Icons
                          name="event"
                          color="#FF6969"
                          size={Metrix.VerticalSize(13)}
                        />
                        <Text
                          style={{
                            color: '#5D5D5D',
                            fontSize: Metrix.customFontSize(11),
                          }}>
                          {item.notice_date}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: '#5D5D5D',
                          fontSize: Metrix.customFontSize(11),
                        }}>
                        {item.notice_desc}
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#707070',
                          borderWidth: Metrix.VerticalSize(0.5),
                          marginTop: Metrix.VerticalSize(5),
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.App.isLoading,
    noticeData: state.App.noticeData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getNotice: (payload) => dispatch(AppActions.getNotice(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notice);
