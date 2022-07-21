import React, { useState } from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RadioButton } from 'react-native-paper';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'



export default function Gender() {
    const [checked, setChecked] = React.useState('first');
  
  
  return (  
    <View style={styles.containner}>
       {/*Header*/}
       <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <TouchableOpacity>
                      <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderLeftText}>Gender</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.HeaderRight}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/*NameArea*/}
        <View style={styles.WrapperNameArea}>
          <View style={styles.NameAreaTop}>  
            <Text>Male</Text>
            <RadioButton
             value="first"
             color={colors.primary}
             status={ checked === 'first' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('first')}
            />
          </View>
          <View style={styles.NameAreaTop}>  
            <Text>Female</Text>
            <RadioButton
             value="second"
             color={colors.primary}
             status={ checked === 'second' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('second')}
            />
          </View>
          <View style={styles.NameAreaTopOne}>  
            <Text>Custom</Text>
            <RadioButton
             value="third"
             color={colors.primary}
             status={ checked === 'third' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('third')}
            />
            
          </View>
          <View style={styles.NameAreaTop}>  
            <Text>Prefer Not To Say</Text>
            <RadioButton
             value="fourth"
             color={colors.primary}
             status={ checked === 'fourth' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('fourth')}
            />
          </View>
          
          
      
        </View>
      
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
  WrapperNameArea: {
      flexDirection:'column',
      marginHorizontal:10,
      marginTop:30,

  },
  NameAreaTop: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
  },
  NameAreaTopOne: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',

  },


});
