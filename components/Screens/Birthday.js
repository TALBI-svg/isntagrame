import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


export default function Birthday() {
  return (
    <View style={styles.containner}>
    {/*Header*/}
    <SafeAreaView>
         <View style={styles.WrapperHeader}>
             <View style={styles.HeaderLeft}>
                 <TouchableOpacity>
                   <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                 </TouchableOpacity>
                 <Text style={styles.HeaderLeftText}>Birthday</Text>
             </View>
             <TouchableOpacity>
               <Text style={styles.HeaderRight}>Save</Text>
             </TouchableOpacity>
         </View>
    </SafeAreaView>
    {/*NameArea*/}
    <View style={styles.WrapperNameArea}>
    <Text style={styles.NameAreaTitle}><Text>Day</Text> <Text>Month</Text> <Text>Year</Text></Text>

    </View>
    {/*SelectDateArea*/}
    <View style={styles.WrapperSelectDateArea}>
      <View style={styles.SelectDateAreaTop}>
        <Feather name="calendar" size={20} color={colors.textDark} style={styles.SelectDateAreaTopIcon}/>
        <Text style={styles.SelectDateAreaTopText}>Birthday</Text>
      </View>
      <View style={styles.SelectDateAreaContent}>
      <View style={styles.SelectDateAreaContentTop}>
      <ScrollView showsVerticalScrollIndicator={false}> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>3</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>4</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>5</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>6</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>7</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>8</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>9</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>10</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>11</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>12</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>13</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>14</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>15</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>16</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>17</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>18</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>19</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>20</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>21</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>22</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>23</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>24</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>25</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>26</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>27</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>28</Text></TouchableOpacity> 
        
      </ScrollView>
      </View>
      <View style={styles.SelectDateAreaContentTop}>
      <ScrollView showsVerticalScrollIndicator={false}>        
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Jan</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Feb</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Mar</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Apr</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>May</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Jun</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Jul</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Aug</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Sep</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Oct</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Nov</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>Dec</Text></TouchableOpacity>
        
      </ScrollView>
      </View>
      <View style={styles.SelectDateAreaContentTop}>
      <ScrollView showsVerticalScrollIndicator={false}><TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2022</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2021</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2020</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2019</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2018</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2017</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2016</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2015</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2014</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2013</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2012</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2011</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2010</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2009</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2008</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2007</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2006</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2005</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2004</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2003</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2002</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2001</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>2000</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1999</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1998</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1997</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1996</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1995</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1994</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1993</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1992</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1991</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1990</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1989</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1988</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1987</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1986</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1985</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1984</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1983</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1982</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1981</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1980</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1979</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1978</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1977</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1976</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1975</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1974</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1973</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1972</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1971</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1970</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1969</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1968</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1967</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1966</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1965</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1964</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1963</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1962</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1961</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1960</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1959</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1958</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1957</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1956</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1955</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1954</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1953</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1952</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1951</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1950</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1949</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1948</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1947</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1946</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1945</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1944</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1943</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1942</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1941</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1940</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1939</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1938</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1937</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1936</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1935</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1934</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1933</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1932</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1931</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1930</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1929</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1928</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1927</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1926</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1925</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1924</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1923</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1922</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1921</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1920</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1919</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1918</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1917</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1916</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1915</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1914</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1913 </Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1912</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1911</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1910</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1909</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1908</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1907</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1906</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1905</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1904</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1903</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1902</Text></TouchableOpacity> 
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1901</Text></TouchableOpacity>
      <TouchableOpacity><Text  style={styles.SelectDateAreaContentTopText}>1900</Text></TouchableOpacity>

      </ScrollView>
      </View>
        
       

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
NameAreaTitle: {
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
WrapperSelectDateArea: {
   marginTop:443,
   marginHorizontal:10,
},
SelectDateAreaTop: {
   flexDirection:'row',
   alignItems:'center',
}, 
SelectDateAreaTopIcon: {},
SelectDateAreaTopText: {
   marginHorizontal:10,
   fontSize:14,
   fontWeight:'bold',
   color:colors.textDark,
},
SelectDateAreaContent: {
   flexDirection:'row',
   justifyContent: 'center',
   alignItems:'center',
   marginTop:5,
   borderTopWidth:1,
   borderTopColor:colors.light,
},
SelectDateAreaContentTop: {
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   marginHorizontal:50,
   marginBottom:140,
},
SelectDateAreaContentTopText: {
   marginVertical:7,
   fontSize:16,
   fontWeight:'bold',
   textAlign:'center',
},


});