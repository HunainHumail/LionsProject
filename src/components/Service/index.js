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
import {Fonts, Images, Metrix} from '../../config';
import Header from '../Common/header';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesTab: [
        {
          key: 'Permanent Project',
          selected: true,
        },
        {
          key: 'Service Activities',
          selected: false,
        },
        {
          key: 'Fellowship',
          selected: false,
        },
      ],
      tabSelect: 'Permanent Project',
    };
    this.props.getServices('permanent');
  }

  qsTypeSwitcher(switchIndex) {
    this.setState((prevState) => {
      return {
        servicesTab: prevState.servicesTab.filter((single, index) => {
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
        tabSelect: 'Permanent Project',
      });
      console.log('PERMANENT');
      this.props.getServices('permanent');
    } else if (switchIndex == 1) {
      this.setState({
        tabSelect: 'Service Activities',
      });
      console.log('ACTIVITIES');
      this.props.getServices('activities');
    } else if (switchIndex == 2) {
      this.setState({
        tabSelect: 'Fellowship',
      });
      console.log('FELLOWSHIP');
      this.props.getServices('fellowship');
    }
  }

  
  render() {
    const {isLoading, servicesData} = this.props;
    console.log('service DATA CONSOLE:', servicesData);
    console.log('IS LOADING:', isLoading)
    // console.log('service DATA CONSOLE:', servicesData[0].service_type);

    return (
      <View>
        <StatusBar backgroundColor="#335393" barStyle="light-content" />
        <Header navigation={this.props.navigation} />
        {
          isLoading ? (
            <ActivityIndicator color={'red'} />

          ) : (
            <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: Metrix.customFontSize(20),
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#00529C',
            }}>
            Services and Activities
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.servicesTab}
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
          {
          // isLoading ? (
          //   <View
          //     style={{
          //       position: 'absolute',
          //       top: 0,
          //       bottom: 0,
          //       right: 0,
          //       left: 0,
          //       justifyContent: 'center',
          //       alignItems: 'center',
          //       zIndex: 1,
          //       backgroundColor: 'transparent',
          //     }}>
          //     <ActivityIndicator size={50} animating={true} color="red" />
          //   </View>
          // ) : 
          servicesData[0].service_type == 'permanent' ? (
            <View>
              <FlatList
                data={servicesData}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <Image
                        source={item.service_image}
                        style={{
                          height: Metrix.VerticalSize(163),
                          width: Metrix.HorizontalSize(346),
                          borderRadius: 9,
                          backgroundColor: 'white',
                          alignSelf: 'center',
                          marginTop: Metrix.VerticalSize(17),
                        }}
                      />
                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: Metrix.customFontSize(14),
                          fontWeight: '700',
                          color: '#00529C',
                          marginLeft: Metrix.HorizontalSize(23),
                        }}>
                        {item.service_title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: Metrix.HorizontalSize(23),
                          marginTop: Metrix.VerticalSize(10),
                        }}>
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
                          {'15 SEP 2020'}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: '#5D5D5D',
                          fontSize: Metrix.customFontSize(11),
                          marginTop: Metrix.VerticalSize(10),
                          marginHorizontal: Metrix.HorizontalSize(23),
                        }}>
                        {item.service_desc}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          ) : (
            <View>
              <FlatList
                data={servicesData}
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
                        {item.service_title}
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
                          {'15 SEP 2020'}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: '#5D5D5D',
                          fontSize: Metrix.customFontSize(11),
                        }}>
                        {item.service_desc}
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
          )
          }
        </View>
          )
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.App.isLoadingService,
    servicesData: state.App.servicesData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getServices: (payload) => dispatch(AppActions.getServices(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
