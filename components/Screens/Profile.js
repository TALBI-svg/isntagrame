import React,{ useRef } from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RBSheet from "react-native-raw-bottom-sheet";
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomNavBar from './BottomNavBar';

export default function Profile() {
  const refRBSheet = useRef();

  return (
    <View style={styles.containner}>
        {/*Header*/}
        <SafeAreaView>
          <View style={styles.WrapperHeader}>
            <View style={styles.HeaderLeft}>
              <Text style={styles.HeaderLeftText}>Karina_<Text style={styles.HeaderLeftText}>Jissy</Text></Text>
              <TouchableOpacity>
                <Feather name="chevron-down" size={20} color={colors.textDark}style={styles.HeaderLeftIcon}/>
              </TouchableOpacity>
            </View>
            <View  style={styles.HeaderRight}>
              <TouchableOpacity>
                <Feather name="plus" size={23} color={colors.textDark} style={styles.HeaderRightIcon}/>
              </TouchableOpacity> 
              <TouchableOpacity>
                <Feather name="send" size={20} color={colors.textDark} style={styles.HeaderRightIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Feather name="menu" size={20} color={colors.textDark} style={styles.HeaderRightIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        {/*UserArea*/}
        <ScrollView>
        <View style={styles.WreapperUserArea}>
            <View style={styles.UserAreaOne}>
                <Image source={require('../../layout/images/profile_1.png')} resizeMode="contain" style={styles.UserAreaOneImage}/>
                <TouchableOpacity>
                 <View style={styles.UserAreaOneAdd}>
                  <Feather name="plus" size={13} color={colors.background} style={styles.UserAreaOneAddIcon}/>
                 </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.UserAreaTwo}>
              <TouchableOpacity style={styles.UserAreaTwoTouchab}>
                <Text style={styles.UserAreaTwoNumber}>10</Text>
                <Text style={styles.UserAreaTwoText}>Posts</Text>
              </TouchableOpacity>
            </View>
    
            <View style={styles.UserAreaTwo}>
              <TouchableOpacity style={styles.UserAreaTwoTouchab}>
                <Text style={styles.UserAreaTwoNumber}>50</Text>
                <Text style={styles.UserAreaTwoText}>Followers</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.UserAreaTwo}>
              <TouchableOpacity style={styles.UserAreaTwoTouchab}>
                <Text style={styles.UserAreaTwoNumber}>100</Text>
                <Text style={styles.UserAreaTwoText}>Follows</Text>
              </TouchableOpacity>
            </View>
            
        </View>
        {/*UserAreaBottom*/}
        <View style={styles.WrapperUserAreaBottom}>
            <Text style={styles.UserAreaBottomText}>Jissy</Text>
            <Text style={styles.UserAreaBottomBio}>Designer Creater</Text>

            <View style={styles.UserAreaBottomBottom}>
                <TouchableOpacity style={styles.UserAreaBottomBottomTouchab}>
                  <Text style={styles.UserAreaBottomBottomText}>Modify profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="users" size={13} color={colors.textDark} style={styles.UserAreaBottomBottomIcon}/>
                </TouchableOpacity>

            </View>
        </View>
        {/*PostsArea*/}
        <View style={styles.WrapperPostsArea}>

        </View>

        </ScrollView>
        {/*BottomSheetArea*/}
        <RBSheet
         ref={refRBSheet}
         closeOnDragDown={true}
         closeOnPressMask={false}
         height={390}
         customStyles={{ container: { borderTopLeftRadius:25,borderTopRightRadius:25,} }}>

         <View style={styles.WrapperBottomSheetArea}>
         {/*Title*/}
         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <AntDesign name="setting" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Settings</Text>
         </View></TouchableOpacity>

         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <MaterialCommunityIcons name="compare-vertical" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Mobile Data Saving</Text>
         </View></TouchableOpacity>

         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <MaterialCommunityIcons name="refresh-auto" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Archive</Text>
         </View></TouchableOpacity>

         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <Ionicons name="md-bookmark-outline" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Saved</Text>
         </View></TouchableOpacity>

         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <MaterialCommunityIcons name="format-list-bulleted" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Close Friends</Text>
         </View></TouchableOpacity>

         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <Ionicons name="ios-person-add-outline" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Discover People</Text>
         </View></TouchableOpacity>

         <TouchableOpacity style={styles.WrapperBottomSheetAreaTouchab}>
         <View style={styles.WrapperBottomSheetAreaField}>
          <AntDesign name="warning" size={20} color={colors.textDark} style={styles.WrapperBottomSheetAreaFieldIcon}/>
          <Text style={styles.WrapperBottomSheetAreaFieldText}>Report Problem</Text>
         </View></TouchableOpacity>

           
         </View>
        </RBSheet>
        <BottomNavBar/>
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
        marginTop:20,
        marginHorizontal:10,
        //borderWidth:1,
        //borderColor:colors.textDark,
    },
    HeaderLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    HeaderLeftText: {
        fontSize: 16,
        fontWeight:'bold',
        color:colors.textDark,
    },
    HeaderLeftIcon: {
        marginHorizontal:5,
        paddingTop:5,
    },
    HeaderRight: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    HeaderRightIcon: {
        marginHorizontal:5,
    },
    WreapperUserArea: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:10,
    },
    UserAreaOne: {
        flexDirection:'row',
    },
    UserAreaOneImage: {
        height:80,
        width:80,
        borderRadius:80,
        borderWidth:1,
        borderColor:colors.light,
    },
    UserAreaOneAdd: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:58,
        marginLeft:-20,
        backgroundColor:colors.primary,
        height:22,
        width:22,
        borderRadius:30,
        borderWidth:1,
        borderColor:colors.background,
    }, 
    UserAreaOneAddIcon: {},
    UserAreaTwo: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
    },
    UserAreaTwoTouchab: {
        justifyContent:'center',
        alignItems:'center',
    },
    UserAreaTwoNumber: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.textDark,
    },
    UserAreaTwoText: {
        fontSize:14,
        fontWeight:'400',
        color:colors.textDark,
    },
    WrapperUserAreaBottom: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    UserAreaBottomText: { 
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,

    },
    UserAreaBottomBio: {
        fontSize:14,
        fontWeight:'400',
        color:colors.textDark,
    },
    UserAreaBottomBottom: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5,
        
    },
    UserAreaBottomBottomTouchab: {
        paddingHorizontal:20,
        marginTop:5,
        width:'90%',
        borderWidth:1,
        borderColor:colors.light,
        borderRadius:5,

    },
    UserAreaBottomBottomText: {
        textAlign:'center',
        fontSize:14,
        paddingVertical:2,
        fontWeight:'500',
        color:colors.textDark,

    },
    UserAreaBottomBottomIcon: {
        marginHorizontal:5,
        marginTop:5,
        paddingHorizontal:4,
        paddingVertical:4,
        borderWidth:1,
        borderColor:colors.light,
        borderRadius:5,
    },
    WrapperBottomSheetArea: {
        marginHorizontal:10,
        marginTop:10,
    },
    WrapperBottomSheetAreaTouchab: {
        width:170,
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    WrapperBottomSheetAreaField: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:25,

    },
    WrapperBottomSheetAreaFieldText: {
        fontSize:14,
        fontWeight:'400',
        color:colors.textDark,
        marginHorizontal:10,

    },
    WrapperBottomSheetAreaFieldIcon: {},
    
        
        
        
        
    
});
