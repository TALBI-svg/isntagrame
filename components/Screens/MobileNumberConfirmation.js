import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


export default function MobileNumberConfirmation() {
  return (
    <View style={styles.containner}>
       {/*Header*/}
       <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <TouchableOpacity>
                      <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderLeftText}>Mobile Number</Text>
                </View>
            </View>
        </SafeAreaView>
        {/*NameArea*/}
        <View style={styles.WrapperNameArea}>
           <View style={styles.WrapperNameAreaTitle}>
             <Text style={styles.NameAreaTitle}>Enter Confirmation code</Text>
             <Text style={styles.NameAreaTitleContent}>Enter the 6-digit code we send to +01 99765402.<Text style={styles.NameAreaTitleContentInside}> Resend code</Text></Text>
           </View> 
           <Text style={styles.NameAreaText}>Confirmation code</Text>
           <TextInput
            style={styles.NameAreaInput}
            keyboardType="numeric"
            placeholderTextColor={colors.lightOne}
            placeholder="- - - - - -"
           />
           <TouchableOpacity>
              <Text style={styles.NameAreaTextBottomSubmit}>Next</Text>
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
  WrapperNameArea: {
      flexDirection:'column',
      marginHorizontal:10,
      marginTop:30,

  },
  WrapperNameAreaTitle: {
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
  },
  NameAreaTitle: {
      fontSize:18,
      fontWeight:'600',
      color:colors.textDark,
      textAlign:'center',
  },
  NameAreaTitleContent: {
      fontSize:14,
      fontWeight:'400',
      textAlign:'center',
      color:colors.lightOne,
      marginVertical:15,
      maxWidth:230,
  },
  NameAreaTitleContentInside: {
    color:colors.primary,

  },
  NameAreaText: {
      fontSize:14,
      fontWeight:'400',
      color:colors.lightOne,
  },
  NameAreaInput: {
      marginTop:5,
      borderColor:colors.primary,
      borderWidth:1,
      borderRadius:5,
      padding:0,
      paddingHorizontal:10,
      paddingVertical:2,  
      textAlign:'center',
  },
  NameAreaTextBottomSubmit: {
      marginTop:30,
      paddingVertical:8,
      borderRadius:5,
      textAlign:'center',
      backgroundColor:colors.primary,
      color:colors.background,
      //width:'100%',
  },


});
