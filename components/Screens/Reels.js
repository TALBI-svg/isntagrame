import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import reelsContent from '../../layout/data/reelsContent';
import BottomNavBar from './BottomNavBar';

export default function Reels() {
    const renderReelsItem = ({item}) => {
        return(
            <View style={styles.ReelsArea}>
                <ImageBackground
                source={item.image}
                style={styles.ReelsAreaImageBackg}>
                    <View style={styles.ReelsAreaImageBackgTop}>
                     <Text style={styles.ReelsAreaImageBackgTopText}>Reels</Text>
                     <TouchableOpacity>
                       <Feather name="volume" size={23} color={colors.background} style={styles.ReelsAreaImageBackgTopIcon}/>
                     </TouchableOpacity>
                    </View>
                    <View style={styles.ReelsAreaImageBackgBottom}>
                        <View style={styles.ReelsAreaImageBackgBottomLeft}>
                          {/*TopBottomLetf*/}
                          <View style={styles.ReelsAreaImageBackgBottomLeftTop}> 
                           <Image source={item.profileImage} style={styles.ReelsAreaImageBackgBottomLeftImage}/>
                           <Text style={styles.ReelsAreaImageBackgBottomLeftText}>{item.name}</Text>
                           <TouchableOpacity>
                             <Text style={styles.ReelsAreaImageBackgBottomLeftText}>Follow</Text>
                           </TouchableOpacity>
                          </View>

                          {/*MiddleBottomLeft*/}
                          <View style={styles.ReelsAreaImageBackgBottomLeftMiddle}>
                            <TouchableOpacity>
                              <Text style={styles.ReelsAreaImageBackgBottomLeftMiddleText}>{item.descripe}</Text>
                            </TouchableOpacity>
                          </View>

                          {/*BottomBottomLeft*/}
                          <View style={styles.ReelsAreaImageBackgBottomLeftBottom}>
                            <Feather name="music" size={16} color={colors.background} style={styles.ReelsAreaImageBackgBottomLeftBottomIcon}/>
                            <Text style={styles.ReelsAreaImageBackgBottomLeftBottomText}>{item.songerName}</Text>
                            <Text style={styles.ReelsAreaImageBackgBottomLeftBottomText}>{item.songeName}</Text>
                          </View>
                        </View>

                        <View style={styles.ReelsAreaImageBackgBottomRight}>
                          {/*LikesArea*/}
                          <TouchableOpacity>
                            <Feather name="heart" size={25} color={colors.background} style={styles.ReelsAreaImageBackgBottomRightIcon}/>
                          </TouchableOpacity>
                          <Text style={styles.ReelsAreaImageBackgBottomRightText}>{item.likeNumber}</Text>

                          {/*CommentArea*/}
                          <TouchableOpacity>
                            <Feather name="message-circle" size={25} color={colors.background} style={styles.ReelsAreaImageBackgBottomRightIcon}/>
                          </TouchableOpacity>
                          <Text  style={styles.ReelsAreaImageBackgBottomRightText}>{item.commentNumber}</Text>

                          {/*ShearArea*/}
                          <TouchableOpacity>
                            <Feather name="send" size={25} color={colors.background} style={styles.ReelsAreaImageBackgBottomRightIcon}/>
                          </TouchableOpacity>

                          {/*MoreArea*/}
                          <TouchableOpacity>
                            <Feather name="more-vertical" size={20} color={colors.background} style={styles.ReelsAreaImageBackgBottomRightIcon}/>
                          </TouchableOpacity>
            

                        </View>

                        
                     </View>

                </ImageBackground>
               
            </View>
        )
    }
  return (
    <View style={styles.containner}>
        {/*ReelsArea*/}
        <View style={styles.WrapperReelsArea}>
          <FlatList
             data={reelsContent}
             renderItem={renderReelsItem}
             keyExtractor={(item) => item.id}
             horizontal={false}
             numColumns={1}
             showsVerticalScrollIndicator={false}
            />
        </View>
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
    WrapperReelsArea: {
        marginHorizontal:4,
        marginTop:4,
        marginBottom:45,
    },
    ReelsAreaImageBackg: {
        height:740,
        width:'100%',
        marginBottom:2,
        //borderWidth:1,
        //borderColor:colors.textDark,
    },
    ReelsAreaImageBackgTop: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:10,
    }, 
    ReelsAreaImageBackgTopText: {
        fontSize:14,
        fontWeight:'700',
        color:colors.textDark,
    }, 
    ReelsAreaImageBackgTopIcon: {
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    ReelsAreaImageBackgBottom: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:10,
        width:'95%',
        //height:45,
        position: 'absolute',  
        bottom:20,
        
    },
    ReelsAreaImageBackgBottomLeft: {},
    ReelsAreaImageBackgBottomLeftTop: {
        flexDirection:'row',
        alignItems:'center',
    },
    ReelsAreaImageBackgBottomLeftImage: {
        height:30,
        width:30,
        borderRadius:20,
    },
    ReelsAreaImageBackgBottomLeftText: {
        marginHorizontal:5,
        fontSize:13,
        fontWeight:'bold',
        color:colors.background, 
    },
    ReelsAreaImageBackgBottomLeftMiddle: {},
    ReelsAreaImageBackgBottomLeftMiddleText: {
        fontSize:12,
        fontWeight:'700',
        color:colors.background,
        width:200,
        height:30,
    }, 
    ReelsAreaImageBackgBottomLeftBottom: {
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    ReelsAreaImageBackgBottomLeftBottomIcon: {},
    ReelsAreaImageBackgBottomLeftBottomText: {
        fontSize:12,
        fontWeight:'500',
        color:colors.background,
        marginLeft:5,
    },
    ReelsAreaImageBackgBottomRight: {
        flexDirection:'column',
    },
    ReelsAreaImageBackgBottomRightIcon: {
        marginTop:10,
    },
    ReelsAreaImageBackgBottomRightText: {
        color:colors.background,
        fontSize:12,
        fontWeight:'600',
        textAlign:'center',
        
    },
});
