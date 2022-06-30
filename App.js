/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { StyleSheet,Text,useColorScheme,Image,View } from 'react-native';
import colors from './layout/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Home from './components/Screens/Home';

export default function App  () {
 
return (
   <View style={styles.containner}> 
    <Home/>
     
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
});

