import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function PersonalInfo() {
  return (
    <View style={styles.containner}>
        {/*Header*/}
        <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <TouchableOpacity>
                      <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderLeftText}>Personal Informations</Text>
                </View>
                
            </View>
        </SafeAreaView>
        {/*PickerAreaText*/}
        <View style={styles.WrapperPickerAreaText}>
          <Text style={styles.PickerAreaTextText}>Provide your personal Information, event if the account is used for a business, a pet or something else.This wont't be part of your public profile.</Text>
          

        </View>
        {/*PickerAreaBottom*/}
        <View style={styles.WrapperPickerAreaBottom}>
            <Text style={styles.PickerAreaBottomTitle}>E-mail address</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>Jissy11@gmail.com</Text>
            </TouchableOpacity>

            <Text style={styles.PickerAreaBottomTitle}>Mobile number</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>+01-21458596</Text>
            </TouchableOpacity>

            <Text style={styles.PickerAreaBottomTitle}>Gender</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>Female</Text>
            </TouchableOpacity>

            <Text style={styles.PickerAreaBottomTitle}>Birthday</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>December 9,1980</Text>
            </TouchableOpacity>
            
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.backgroundScreen,
        height: hp('100%'), // 100% of height device screen
        width: wp('100%')   // 100% of width device screen

    },
    WrapperHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginHorizontal:10,
    },
    HeaderLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    HeaderLeftIcon: {},
    HeaderLeftText: {
        marginHorizontal:5,
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    WrapperPickerAreaText: {
        marginTop:20,
        marginHorizontal:10,
    },
    PickerAreaTextText: {
        marginTop: 20,
        fontSize:14,
        fontWeight:'400',
        color:colors.lightOne,
    },
    WrapperPickerAreaBottom: {
        flexDirection:'column',
        marginHorizontal:10,
        //marginTop:20,

    },
    PickerAreaBottomTitle: {
        fontSize:14,
        fontWeight:'400',
        color:colors.lightOne,
        marginTop:15,
    },
    PickerAreaBottomSubTitle: {
        fontSize:14,
        fontWeight:'400',
        color:colors.textDark,
        marginTop:2,
        paddingHorizontal:10,
        paddingVertical:6,
        borderWidth:1,
        borderColor:colors.textDark,
        borderRadius:5,
    },
});
