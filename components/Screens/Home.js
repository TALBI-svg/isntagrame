/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import { StyleSheet,Text,useColorScheme,Image,View, SafeAreaView,FlatList, TouchableOpacity, ScrollView } from 'react-native';
 import colors from '../../layout/colors/colors';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Feather from 'react-native-vector-icons/Feather'
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
 import Entypo from 'react-native-vector-icons/Entypo'
 import storyData from '../../layout/data/storyData';
 import postData from '../../layout/data/postData';

 
 export default function Home  () {
  const renderStoryItem = ({item}) => {
    return(
        <View style={styles.StoryArea}>
            <TouchableOpacity>
             <View style={styles.StoryAreaImageBorder}>
              <Image source={item.image} style={styles.StoryAreaImage}/>
             </View>
            </TouchableOpacity>
            <Text style={styles.StoryAreaText}>{item.name}</Text>
        </View>
    )
  }
  const renderPostItem = ({item}) => {
    return(
        <View style={styles.PostArea}>
            {/*TitlePost*/}
            <View style={styles.TitlePost}>
                <View style={styles.TitlePostLeft}>
                    <TouchableOpacity>
                      <Image source={item.profile} style={styles.TitlePostLeftImage}/>
                    </TouchableOpacity>
                    <Text style={styles.TitlePostLeftText}>{item.name}</Text>
                </View>
                <TouchableOpacity>
                  <Feather name="more-vertical" size={20} color={colors.textDark} style={styles.TitlePostRight}/>
                </TouchableOpacity>
            </View>
            {/*PostConten*/}
            <View style={styles.PostConten}>
                <TouchableOpacity>
                  <Image source={require('../../layout/images/post.png')} style={styles.PostContenImage}/>
                </TouchableOpacity> 
            </View>
            {/*BottomConten*/}
            <View style={styles.BottomConten}>
                <View style={styles.BottomContenLeft}>
                  <TouchableOpacity>
                    <Feather name="heart" size={23} color={colors.textDark} style={styles.BottomContenLefIconOne}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="message-circle" size={23} color={colors.textDark} style={styles.BottomContenLefIconTwo}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="send" size={23} color={colors.textDark} style={styles.BottomContenLefIconThree}/>
                  </TouchableOpacity>
                </View>
                {/*MiddleView----here*/}
                <View style={styles.BottomContenRight}>
                 <TouchableOpacity>
                  <Image source={require('../../layout/images/save_icon.png')} style={styles.BottomContenRightImage}/>
                 </TouchableOpacity>
                </View>
            </View>
            {/*DescripeArea*/}
            <View style={styles.WrapperDescripeArea}>
                <Text style={styles.DescripeAreaTop}>{item.numberOfLikes} Like</Text>
                <View style={styles.DescripeAreaBottom}>
                    <Text style={styles.DescripeAreaBottomPoster}>{item.name}  <Text style={styles.DescripeAreaBottomAbout}>{item.descripe}</Text>
                    </Text>
                </View>
                <Text style={styles.DescripeAreaPublishAt}>{item.timePuplishing}</Text>
            </View>

        </View>
    )
  }
 return (
    <View style={styles.containner}>
     {/*HeadArea*/}
     <SafeAreaView>
        <View style={styles.Header}>
            <View style={styles.HeaderLeft}>
              <TouchableOpacity>
                <Feather name="camera" size={25} color={colors.textDark} style={styles.HeaderLeftIcon}/>
              </TouchableOpacity>
              <Image source={require('../../layout/images/name.png')} style={styles.HeaderLeftImage}/>
            </View>
            <View style={styles.HeaderRight}>
              <TouchableOpacity>
                <Feather name="heart" size={25} color={colors.textDark} style={styles.HeaderRightFirstIcon}/>
              </TouchableOpacity> 
              <TouchableOpacity>
                <Feather name="send" size={25} color={colors.textDark} style={styles.HeaderRightIcon}/>
              </TouchableOpacity>
            </View>
        </View>
     </SafeAreaView>
     <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
     <View style={styles.AboutPostContentArea}>
     {/*StoryArea*/}
     <View style={styles.WrapperStoryArea}>
      <SafeAreaView>
       <FlatList
        data={storyData}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
       /></SafeAreaView>
     </View>
     {/*PostArea*/}
     <View style={styles.WrapperPostArea}>
      <FlatList
        data={postData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
     </View>
     </View>
     </ScrollView>
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
   );
 };
 
 const styles = StyleSheet.create({
   containner: {
     backgroundColor:colors.backgroundScreen,
     height: hp('100%'), // 100% of height device screen
     width: wp('100%')   // 100% of width device screen
   },
   Header: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    marginTop:10,
    //borderColor:colors.textDark,
    //borderWidth:1,
   },
   HeaderLeft: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   },
   HeaderLeftIcon: {
    marginRight:10,

   },
   HeaderLeftImage: {
    marginTop:10,
    height:28,
    width:100,
    
   },
   HeaderRight: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

   },
   HeaderRightFirstIcon: {
    marginRight:10,
   },
   HeaderRightIcon: {
    marginLeft:10,

   },
   AboutPostContentArea: {
    marginBottom:45,

   },
   WrapperStoryArea: {
    borderBottomColor:colors.light,
    borderBottomWidth:0.3,
   },
   StoryArea: {
    flexDirection:'column',
    alignItems:'center',
    marginTop:10,
    marginHorizontal:2,
    marginBottom:5,
    width:80,
    height:85,
    //borderColor:colors.textDark,
    //borderWidth:1,
   },
   StoryAreaImageBorder: {
    borderColor:colors.primary,
    borderWidth:1,
    borderRadius:50,
    padding:2,

   },
   StoryAreaImage: {
    height:60,
    width:60,
    borderRadius:50,

   },
   StoryAreaText: {
    fontSize:10,
    color:colors.textDark,
   },
   WrapperPostArea: {},
   PostArea: {},
   TitlePost: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    marginTop:10,
   },
   TitlePostLeft: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

   },
   TitlePostLeftImage: {
    height:35,
    width:35,
    borderRadius:30,
   }, 
   TitlePostLeftText: {
    marginHorizontal:5,
    fontSize:10,
    color:colors.textDark,
   }, 
   TitlePostRight: {},
   PostConten: {
    marginTop:5,
   }, 
   PostContenImage: {
    width:'100%',
    height:320,
   },
   BottomConten: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    marginTop:10,
    //borderColor:colors.textDark,
    //borderWidth:1,
   },
   BottomContenLeft: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //borderColor:colors.textDark,
    //borderWidth:1,
   },
   BottomContenLefIconOne: {},
   BottomContenLefIconTwo: {
    marginHorizontal:20,
   },
   BottomContenLefIconThree: {},
   BottomContenRight: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   }, 
   BottomContenRightImage: {
    width:40, 
    height:20,
   },
   WrapperDescripeArea: {
    flexDirection:'column',
    marginHorizontal:10,
    marginTop:10,
   }, 
   DescripeAreaTop: {
    fontSize:12,
    color:colors.textDark,
    fontWeight:'bold',
   },  
   DescripeAreaBottom: {
    flexDirection:'column',
   },  
   DescripeAreaBottomPoster: {
    fontSize:12,
    color:colors.textDark,
    fontWeight:'bold',
   },  
   DescripeAreaBottomAbout: {
    fontSize:10,
    color:colors.textDarkOne,
   }, 
   DescripeAreaPublishAt: {
    fontSize:10,
    color:colors.lightOne,

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
    bottom:0
   },
   BottomNavbar: {
    flexDirection:'row',
    //borderColor:colors.textDark,
    //borderWidth:1,
   },
   BottomNavbarIcon: {
    marginHorizontal:28,
    
   },
   

 });
 
 