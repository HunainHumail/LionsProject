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
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {Metrix, NavigationService} from '../../config';
import moment from 'moment';
import {AppActions} from '../../store/actions';
import {connect} from 'react-redux';

class Birthdays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      birthdatesData: [],
      apiData: [],
      selected: false,
      selectedName: '',
      selectedDob: '',
    };
  }

  componentDidMount() {
    this.props.birthday();
    this.getApiData();
    this.calendarRef.forceUpdate();
  }
  selectDayHandler = (data) => {
    console.log('DATAAAAAAAAA', data);
    let editedData = data.substring(5);
    console.log('API DATA IN DAY HANDLER', this.state.apiData);
    console.log(editedData, 'EDITED DATA');
    let newArray = this.state.apiData.filter(function (item) {
      return item.dob.substring(5) == editedData;
    });
    console.log(
      'NEW ARRAy DATA:',
      newArray.map((item) => {
        return item.member_name;
      }),
    );

    let selectedName = newArray.map((item) => {
      return item.member_name;
    });

    console.log('selected name console', selectedName[0]);

    this.setState({
      selected: true,
      date: data,
      selectedDob: data,
      selectedName: selectedName[0],
    });
    this.calendarRef.forceUpdate();
  };

  componentDidUpdate(prevProp) {
    console.log(prevProp, 'prevvv proppppp')
    console.log('new prop', this.props)
    if (
      (this.props.birthdates && this.props.birthdates.length) !== prevProp.birthdates.length &&
      (this.props.birthdayData && this.props.birthdayData.length) !== prevProp.birthdayData.length
    ) {
      console.log('DID UPDATE CONSOLE RUNNING ', this.props)
      this.setState({
        birthdatesData: this.props.birthdates,
        apiData: this.props.birthdayData,
      });
      this.calendarRef.forceUpdate();
    }

  }

  getApiData = () => {
    let birthdates = this.props.birthdates;
    let birthdayData = this.props.birthdayData;
    let data = [];
    birthdates.map((item) => {
      data.push(item);
    });
    this.setState({
      birthdatesData: data,
      apiData: birthdayData
    });
  };

  render() {
    console.log('STATE API DATA:', this.state.apiData);
    console.log('SELECTED NAME..............', this.state.selectedName);
    console.log('SELECTED DOB..............', this.state.selectedDob);

    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar backgroundColor="#335393" barStyle="light-content" />
        <Header navigation={this.props.navigation} />
        {this.props.isLoading &&
        !this.state.birthdatesData.length &&
        !this.state.apiData.length ? (
          <ActivityIndicator size={50} animating={true} color="red" />
        ) : (
          <View>
            <View
              style={{
                marginTop: Metrix.VerticalSize(25),
                marginBottom: Metrix.VerticalSize(12),
                width: Metrix.HorizontalSize(330),
                height: Metrix.HorizontalSize(38),
                backgroundColor: '#B100FF',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: Metrix.VerticalSize(3),
              }}>
              <Text
                style={{
                  fontSize: Metrix.customFontSize(15),
                  color: 'white',
                  textAlign: 'center',
                }}>
                Birthday of this Month
              </Text>
            </View>
            {this.state.selectedName  == '' || this.state.selectedName  == undefined ? (
              <View>
                <Text
                  style={{
                    marginVertical: Metrix.VerticalSize(20),
                    textAlign: 'center',
                  }}>
                  Please select a DOT MARKED date
                </Text>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: Metrix.VerticalSize(62),
                      width: Metrix.VerticalSize(62),
                      borderRadius: Metrix.VerticalSize(50),
                      backgroundColor: 'yellow',
                      marginLeft: Metrix.HorizontalSize(31),
                      marginRight: Metrix.HorizontalSize(11),
                    }}></View>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: Metrix.customFontSize(14),
                      }}>
                      {this.state.selectedName}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: Metrix.customFontSize(12),
                          color: '#00529C',
                        }}>
                        Date of Birthday: {''}
                      </Text>
                      <Text
                        style={{
                          fontSize: Metrix.customFontSize(12),
                          color: '#5D5D5D',
                        }}>
                        {this.state.selectedDob}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            <View style={{marginHorizontal: Metrix.HorizontalSize(10)}}>
              <Calendar
                ref={(ref) => (this.calendarRef = ref)}
                markingType={'simple'}
                hideExtraDays={true}
                firstDay={1}
                hideArrows={false}
                markedDates={this.state.markedDates}
                dayComponent={({date, state}) => {
                  state = 'disabled';
                  let apiDates =
                    this.state.birthdatesData.indexOf(
                      moment(date.dateString).format('dddd'),
                    ) != -1 ||
                    this.state.birthdatesData.indexOf(date.dateString) != -1;
                  return (
                    <View
                      pointerEvents={
                        this.props.navigation.state.params ? 'none' : 'auto'
                      }>
                      <TouchableOpacity
                        onPress={() => {
                          this.selectDayHandler(date.dateString);
                        }}
                        style={{
                          backgroundColor:
                            this.state.date == date.dateString
                              ? 'red'
                              : 'white',
                          height: 40,
                          width: 32,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: Metrix.VerticalSize(5),
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: Metrix.FontExtraSmall,
                            color: 'black',
                          }}>
                          {date.day}
                        </Text>
                        {apiDates ? (
                          <View
                            style={{
                              width: Metrix.VerticalSize(10),
                              height: Metrix.VerticalSize(10),
                              borderRadius: 50,
                              backgroundColor: '#B100FF',
                              marginTop: Metrix.VerticalSize(5),
                            }}
                          />
                        ) : (
                          <View />
                        )}
                      </TouchableOpacity>
                    </View>
                  );
                }}
                // onDayPress = {(day)=>{console.log('day pressed', day)}}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.App.isLoading,
    birthdayData: state.App.birthdayData,
    birthdates: state.App.birthdates,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    birthday: () => dispatch(AppActions.getBirthday()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Birthdays);
