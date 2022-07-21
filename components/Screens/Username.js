import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Username() {
  
    
  return (  
    <View style={styles.containner}>
       {/*Header*/}
       <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <TouchableOpacity>
                      <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderLeftText}>Username</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.HeaderRight}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/*NameArea*/}
        <View style={styles.WrapperNameArea}>
           <Text style={styles.NameAreaText}>Username</Text>
           <TextInput
            style={styles.NameAreaInput}
            keyboardType="email-address"
           />
           <Text style={styles.NameAreaTextBottom}>You'll be able to change your username back to to Karina_Jissy for another 14 days. <Text style={styles.NameAreaTextBottomLast}>Learn More</Text></Text>
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
  HeaderRight: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.primary,
  },
  WrapperNameArea: {
      flexDirection:'column',
      marginHorizontal:10,
      marginTop:30,

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
  },
  NameAreaTextBottom: {
      marginTop: 20,
      fontSize:12,
      fontWeight:'400',
      color:colors.lightOne,

  },
  NameAreaTextBottomLast: {
      fontSize:13,
      fontWeight:'400',
      color:colors.primary,

  },


});
