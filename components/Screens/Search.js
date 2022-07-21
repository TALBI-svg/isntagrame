import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,Image,StatusBar,TextInput, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import storyData from '../../layout/data/storyData';
import conetntSearch from '../../layout/data/contentSearch';
import BottomNavBar from './BottomNavBar';
export default function Search() {

    const renderSearchItem = ({item}) => {
        return(
            <View style={styles.ContentArea}>
               <TouchableOpacity>
                 <Image source={item.image} style={styles.ContentAreaImage}/>
               </TouchableOpacity>
            </View>
        )
    }
    
  return (
    <View style={styles.containner}>
        <StatusBar translucent backgroundColor="transparent" />
        {/*Hearder*/}
        <SafeAreaView>
            <TouchableOpacity>
             <View style={styles.WreapperHeader}>
              <Feather name="search" size={18} color={colors.lightOne} style={styles.HeaderIcon}/>
                <Text style={styles.HeaderText}>Search</Text>
             </View>
            </TouchableOpacity>
        </SafeAreaView>
        {/*ContentArea*/}
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.WrapperContentArea}>
            <FlatList
             data={conetntSearch}
             renderItem={renderSearchItem}
             keyExtractor={(item) => item.id}
             horizontal={false}
             numColumns={3}
             showsVerticalScrollIndicator={false}
            />
            
            
        </View></ScrollView>
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
    WreapperHeader: {
        flexDirection:'row',
        ///justifyContent:'space-between',
        alignItems:'center',
        marginTop:40,
        marginBottom:10,
        marginHorizontal:10,
        backgroundColor:colors.lightTwo,
        borderRadius:13,
        paddingVertical:4,
        paddingHorizontal:6,
    },
    HeaderText: {
        paddingLeft:6,
        color:colors.lightOne,
        //borderColor:colors.textDark,
        //borderWidth:1,
        
        
    },
    WrapperContentArea: {
        //marginTop:5,
        marginHorizontal:10, 
        //justifyContent:'center',
        alignItems:'center', 
        marginBottom:50,      
    },
    ContentArea: {},  
    ContentAreaImage: {
        height:125,
        width: 127,
        marginHorizontal:1,
        marginTop:1,
    },


});
