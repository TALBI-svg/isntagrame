import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity, Image,StatusBar,TextInput, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import storyData from '../../layout/data/storyData';


export default function SearchCategories() {
  return (
    <View style={styles.containner}>
        {/*Header*/}
        <View style={styles.WrapperHeader}>
          <TouchableOpacity>
            <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderIcon}/>
          </TouchableOpacity>
          <View style={styles.HeaderRight}>
           <Feather name="search" size={15} color={colors.textDark} style={styles.HeaderRightIcon}/>
           <TextInput
            placeholder='Search'
            placeholderTextColor={colors.textDark}
            height={20}
            padding={0}
            style={styles.HeaderRightInput}
           />
         </View>
        </View>
        {/*ContentArea*/}
        
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
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:20,
        //borderColor:colors.textDark,
        //borderWidth:1,
    }, 
    HeaderIcon : {
        marginRight:15,
        //marginLeft:5,
    },
    HeaderRight: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.light,
        paddingVertical:4,
        paddingHorizontal:8,
        borderRadius:10,
        
    },
    HeaderRightIcon: {}, 
    HeaderRightInput: {
        marginLeft:8,
        width:'80%',
        color:colors.textDark,
    },
});
