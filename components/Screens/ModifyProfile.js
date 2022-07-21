import React,{ useRef } from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,Button,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RBSheet from "react-native-raw-bottom-sheet";
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function ModifyProfile() {
  const refRBSheet = useRef();

  return (
    <View style={styles.containner}>
        {/*Header*/}
        <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <TouchableOpacity>
                      <Feather name="x" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderLeftText}>ModifyProfile</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.HeaderRight}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/*PickerArea*/}
        <View style={styles.WrapperPickerArea}>
          <Image source={require('../../layout/images/profile_1.png')} resizeMode="contain" style={styles.PickerAreaImage}/>
          <TouchableOpacity onPress={() => refRBSheet.current.open()} >
            <Text style={styles.PickerAreaText}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>
        {/*PickerAreaBottom*/}
        <View style={styles.WrapperPickerAreaBottom}>
            <Text style={styles.PickerAreaBottomTitle}>Name</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>Jissy</Text>
            </TouchableOpacity>

            <Text style={styles.PickerAreaBottomTitle}>Username</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>Karina_Jissy</Text>
            </TouchableOpacity>

            <Text style={styles.PickerAreaBottomTitle}>Web site</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}></Text>
            </TouchableOpacity>

            <Text style={styles.PickerAreaBottomTitle}>Bio</Text>
            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitle}>Creater Designer</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.PickerAreaBottomSubTitleBottom}>Personal Information Settings </Text>
            </TouchableOpacity>

            
        </View>
        {/*BottomSheetArea*/}
        <RBSheet
         ref={refRBSheet}
         closeOnDragDown={true}
         closeOnPressMask={false}
         height={200}
         customStyles={{ container: { borderTopLeftRadius:25,borderTopRightRadius:25,} }}>

         <View style={styles.WrapperBottomSheetArea}>
           {/*Title*/}
           <Text style={styles.BottomSheetAreaText}>Change Profile Photo</Text>

           <TouchableOpacity style={styles.BottomSheetAreaTouchab}>
             <Text style={styles.BottomSheetAreaSubText}>Take Photo </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.BottomSheetAreaTouchab}>
             <Text style={styles.BottomSheetAreaSubText}>Choose From Gallery</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.BottomSheetAreaTouchab}>
             <Text style={styles.BottomSheetAreaSubText}>Remove Photo</Text>
           </TouchableOpacity>
         </View>
        </RBSheet>

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
    WrapperPickerArea: {
        marginTop:60,
        marginHorizontal:10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    PickerAreaImage: {
        height:100,
        width:100,
        borderRadius:50,
    },
    PickerAreaText: {
        marginTop:10,
        fontSize:14,
        fontWeight:'500',
        color:colors.primary,
    },
    WrapperPickerAreaBottom: {
        flexDirection:'column',
        marginHorizontal:10,
        marginTop:20,

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
    PickerAreaBottomSubTitleBottom: {
        marginTop:15,
        fontSize:14,
        fontWeight:'500',
        //textAlign:'center',
        color:colors.primary
    }, 
    WrapperBottomSheetArea: {
        marginHorizontal:10,
    },
    BottomSheetAreaText: {
        //textAlign:'center',
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    BottomSheetAreaTouchab: {
        width:150,
    },
    BottomSheetAreaSubText: {
        fontSize:14,
        fontWeight:'400',
        color:colors.textDark,
        marginTop:10,

    },
});
