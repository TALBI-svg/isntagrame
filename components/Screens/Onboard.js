/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import { StyleSheet,Text,useColorScheme,Image,View } from 'react-native';
 import colors from '../../layout/colors/colors';
 //import Feather from 'react-native-vector-icons/Feather'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
 
 export default function Onboard() {
  
 return ( 
    <View style={styles.containner}> 
      <View style={styles.AreaLogo}>
       <Image source={require('../../layout/images/instagram.png')} style={styles.AreaLogoImage}/>
 
      </View>
      <View style={styles.AreaBottom}>
       <Text style={styles.AreaBottomFirstTitle}>from</Text>
       <Text style={styles.AreaBottomSecondTitle}>FaceBook</Text>
 
      </View>
 
 
    </View>
   );
 };
 
 const styles = StyleSheet.create({
   containner: {
     backgroundColor:colors.backgroundScreen,
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     height: hp('100%'), // 100% of height device screen
     width: wp('100%')   // 100% of width device screen
   },
   AreaLogo: {
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   }, 
   AreaLogoImage: {
     width:80,
     height:80,
   },
   AreaBottom: {
     justifyContent:'center',
     alignItems:'center',
     marginVertical:5,
   },
   AreaBottomFirstTitle: {
     fontSize:10,
   },
   AreaBottomSecondTitle: {
     fontSize:15,
     color:colors.primary,
   },
 });
 
 