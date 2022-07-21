import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function MobileNumber() {
  
    
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
                <TouchableOpacity>
                  <Text style={styles.HeaderRight}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/*NameArea*/}
        <View style={styles.WrapperNameArea}>
           <Text style={styles.NameAreaText}>Enter your mobile phone number</Text>

            {/*SelectInputArea*/}
            <View style={styles.NameAreaContain}>
             <View style={styles.NameAreaContainTop}>

               <TouchableOpacity>
                <View style={styles.NameAreaContainTopLeft}>
                  <Text style={styles.NameAreaContainTopLeftText}>USA +01</Text>
                  <Feather name="chevron-down" size={20} color={colors.lightOne} style={styles.NameAreaContainTopLeftIcon}/>
                </View>
               </TouchableOpacity>

               <Text style={styles.NameAreaContainTopRight}>|</Text>
               <TextInput
                style={styles.NameAreaContainInput}
                keyboardType="numeric" 
               />
             </View>
            </View>

            {/*AboutArea*/}
            <Text style={styles.NameAreaTextBottom}>You may receive SMS updates from Instagram and can opt out at any time.</Text>

            {/*SubmitArea*/}
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
      width: wp('100%'),  // 100% of width device screen

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
  NameAreaContain: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:5,
      borderColor:colors.primary,
      borderWidth:1,
      borderRadius:5,
      height:40,

  },
  NameAreaContainTop: {
      flexDirection:'row',
      //justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:10,
      //borderColor:colors.textDark,
      //borderWidth:1,
  }, 
  NameAreaContainTopLeft: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',

  },
  NameAreaContainTopLeftText: {
      fontSize:13,
      fontWeight:'600',
      color:colors.textDark,
  }, 
  NameAreaContainTopLeftIcon: {
      marginHorizontal:3,
      paddingTop:2,
  },
  NameAreaContainTopRight: {
      fontSize:20,
      fontWeight:'200',
      color:colors.lightOne,
      marginTop:-5,

  },
  NameAreaContainInput: {
      width:'65%',
      marginHorizontal:10,
      padding:0,
      paddingHorizontal:10,  
  },
  NameAreaTextBottom: {
      marginTop:15,
      fontSize:14,
      fontWeight:'400',
      color:colors.lightOne,
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
