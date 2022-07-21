import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity } from 'react-native'
import colors from '../../layout/colors/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import storyData from '../../layout/data/storyData';
import postData from '../../layout/data/postData';



export default function BottomNavBar() {
  return (
    <View style={styles.containner}>
      
      <View style={styles.WrapperBottomNavbar}>
        <View style={styles.BottomNavbar}>
        <TouchableOpacity>
          <Entypo name="home" size={25} color={colors.textDark} style={styles.BottomNavbarIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={25} color={colors.textDark} style={styles.BottomNavbarIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="plus-square-o" size={25} color={colors.textDark} style={styles.BottomNavbarIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="video" size={25} color={colors.textDark} style={styles.BottomNavbarIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={25} color={colors.textDark} style={styles.BottomNavbarIcon}/>
        </TouchableOpacity>
        </View>
     </View>
    </View>
  )
};
const styles = StyleSheet.create({
  containner: {
    flex:1,
    backgroundColor:colors.backgroundScreen,
    height: hp('100%'), // 100% of height device screen
    width: wp('100%')   // 100% of width device screen
  },
  WrapperBottomNavbar: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.background,
    borderTopColor:colors.light,
    borderTopWidth:0.3,
    width:'100%',
    height:45,
    position: 'absolute',  
    bottom:0,
   },
   BottomNavbar: {
    flexDirection:'row',
    //borderColor:colors.textDark,
    //borderWidth:1,
   },
   BottomNavbarIcon: {
    marginHorizontal:28,
    
   },
})
