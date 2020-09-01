import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    friendsWidgetBox: {
        //marginTop:-26, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 12,
        backgroundColor: '#4267B2',
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 14
    },
    postHeadingWrap: {
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    friendsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        lineHeight: 26,
        color: '#fff'
    },
    friendssubTitle: {
        lineHeight: 26,
        fontSize: 14,
        lineHeight: 26,
        fontWeight: '300',
        color: '#fff',
        paddingRight: '4%'
    },
    friendsImgWrap: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden',
        marginRight: '4%',
        // width: 40,
        // height: 25

    },
    postBtnWrap: {
        width: 28,
        height: 26,
        backgroundColor: '#009FE3',
        alignItems: "center",
        borderRadius: 6,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    btnStyle: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'Montserrat',
        fontWeight: '600'
    },
    MainViewpostHeadingWrap: {
        justifyContent: 'center'
    },
    FlexRow: {
        flexDirection: 'row'
    },
    ImageSize: {
        width: 70,
        height: 70
    },
    profileAboutBox: {
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
    },
    abtHeadingWrap: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    aboutStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        lineHeight: 16,
        color: '#000',
        textTransform: 'uppercase'
    },
    editIconWrap: {
        width: 24,
        height: 18,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 4,

    },
    abtDesc: {
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
        lineHeight: 20,
        color: '#606C7E'
    },
    MainViewAbtDesc: {
        marginTop: 18
    },
    infoStyle:{
        flexDirection:'row',
        marginTop:18
    },
    nameStyle:{
        fontSize:18,
        fontWeight:'500',
        fontFamily:'Montserrat',
        lineHeight:24,
        color:'#009FE3'
    },
    namePlaceholder:{
        fontSize:11,
        fontWeight:'normal',
        fontFamily:'Montserrat',
        textTransform:"uppercase",
        lineHeight:18,
        color:'#000'
    },

});