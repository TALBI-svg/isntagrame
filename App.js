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
import BottomNavBar from './components/Screens/BottomNavBar';
import Search from './components/Screens/Search';
import SearchCategories from './components/Screens/SearchCategories';
import Reels from './components/Screens/Reels';
import Profile from './components/Screens/Profile';
import ModifyProfile from './components/Screens/ModifyProfile';
import Name from './components/Screens/Name';
import Username from './components/Screens/Username';
import Website from './components/Screens/Website';
import Bio from './components/Screens/Bio';
import PersonalInfo from './components/Screens/PersonalInfo';
import ChangeEmail from './components/Screens/ChangeEmail';
import MobileNumber from './components/Screens/MobileNumber';
import SelectCountry from './components/Screens/SelectCountry';
import MobileNumberConfirmation from './components/Screens/MobileNumberConfirmation';
import Gender from './components/Screens/Gender';
import Birthday from './components/Screens/Birthday';
import Onboard from './components/Screens/Onboard';

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

