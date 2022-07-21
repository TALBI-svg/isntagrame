import React from 'react'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,ImageBackgroundBase,Image,StatusBar,TextInput, FlatList, ScrollView, ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function SelectCountry() {
  
    
  return (  
    <View style={styles.containner}>
       {/*Header*/}
       <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <TouchableOpacity>
                      <Feather name="arrow-left" size={20} color={colors.textDark} style={styles.HeaderLeftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderLeftText}>Select Your Country</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.HeaderRight}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/*NameArea*/}
        <View style={styles.WrapperNameArea}>
           <Feather name="search" size={18} color={colors.lightOne} style={styles.NameAreaIcon} />
           <TextInput
            style={styles.NameAreaInput}
            keyboardType="email-address"
            placeholder='Search country name or code '
            placeholderTextColor={colors.lightOne}
           />
        </View>
        {/*ContentArea*/}
        <ScrollView showsVerticalScrollIndicator>
        <View style={styles.WrapperContentArea}>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Afghanistan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Aland Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Albania</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Algeria</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>American Samoa</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Andorra</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Angola</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Anguilla</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Antarctica</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Antigua and Barbuda</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Argentina</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Armenia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Aruba</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Australia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Austria</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Azerbaijan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bahamas</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bahrain</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bangladesh</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Barbados</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Belarus</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Belgium</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Belize</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Benin</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bermuda</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bhutan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bolivia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bonaire, Sint Eustatius and Saba</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bosnia and Herzegovina</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Botswana</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bouvet Island</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Brazil</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>British Indian Ocean Territory</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Brunei Darussalam</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Bulgaria</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Burkina Faso</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Burundi</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cambodia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cameroon</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Canada</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cape Verde</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cayman Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Central African Republic</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Chad</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Chile</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>China</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Christmas Island</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cocos (Keeling) Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Colombia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Comoros</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Congo</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Congo, Democratic Republic of the Congo</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cook Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Costa Rica</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cote D'Ivoire</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Croatia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cuba</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Curacao</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Cyprus</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Czech Republic</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Denmark</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Djibouti</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Dominica</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Dominican Republic</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Ecuador</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Egypt</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>El Salvador</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Equatorial Guinea</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Eritrea</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Estonia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Ethiopia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Falkland Islands (Malvinas)</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Faroe Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Fiji</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Finland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>France</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>French Guiana</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>French Polynesia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>French Southern Territories</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Gabon</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Gambia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Georgia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Germany</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Ghana</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Gibraltar</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Greece</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Greenland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Grenada</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guadeloupe</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guam</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guatemala</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guernsey</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guinea</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guinea-Bissau</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Guyana</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Haiti</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Heard Island and Mcdonald Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Holy See (Vatican City State)</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Honduras</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Hong Kong</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Hungary</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Iceland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>India</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Indonesia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Iran, Islamic Republic of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Iraq</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Ireland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Isle of Man</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Israel</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Italy</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Jamaica</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Japan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Jersey</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Jordan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Kazakhstan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Kenya</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Kiribati</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Korea, Democratic People's Republic of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Korea, Republic of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Kosovo</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Kuwait</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Kyrgyzstan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Lao People's Democratic Republic</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Latvia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Lebanon</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Lesotho</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Liberia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Libyan Arab Jamahiriya</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Liechtenstein</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Lithuania</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Luxembourg</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Macao</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Macedonia, the Former Yugoslav Republic of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Madagascar</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Malawi</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Malaysia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Maldives</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mali</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Malta</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Marshall Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Martinique</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mauritania</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mauritius</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mayotte</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mexico</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Micronesia, Federated States of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Moldova, Republic of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Monaco</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mongolia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Montenegro</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Montserrat</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Morocco</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Mozambique</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Myanmar</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Namibia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Nauru</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Nepal</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Netherlands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Netherlands Antilles</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>New Caledonia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>New Zealand</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Nicaragua</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Niger</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Nigeria</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Niue</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Norfolk Island</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Northern Mariana Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Norway</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Oman</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Pakistan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Palau</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Palestinian Territory, Occupied</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Panama</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Papua New Guinea</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Paraguay</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Peru</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Philippines</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Pitcairn</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Poland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Portugal</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Puerto Rico</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Qatar</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Reunion</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Romania</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Russian Federation</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Rwanda</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Barthelemy</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Helena</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Kitts and Nevis</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Lucia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Martin</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Pierre and Miquelon</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saint Vincent and the Grenadines</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Samoa</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>San Marino</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Sao Tome and Principe</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Saudi Arabia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Senegal</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Serbia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Serbia and Montenegro</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Seychelles</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Sierra Leone</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Singapore</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Sint Maarten</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Slovakia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Slovenia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Solomon Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Somalia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>South Africa</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>South Georgia and the South Sandwich Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>South Sudan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Spain</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Sri Lanka</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Sudan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Suriname</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Svalbard and Jan Mayen</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Swaziland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Sweden</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Switzerland</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Syrian Arab Republic</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Taiwan, Province of China</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Tajikistan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Tanzania, United Republic of</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Thailand</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Timor-Leste</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Togo</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Tokelau</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Tonga</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Trinidad and Tobago</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Tunisia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Turkey</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Turkmenistan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Turks and Caicos Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Tuvalu</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Uganda</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Ukraine</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>United Arab Emirates</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>United Kingdom</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>United States</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>United States Minor Outlying Islands</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Uruguay</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Uzbekistan</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Vanuatu</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Venezuela</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Viet Nam</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Virgin Islands, British</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Virgin Islands, U.s.</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Wallis and Futuna</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Western Sahara</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Yemen</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Zambia</Text></TouchableOpacity>
    <TouchableOpacity>
            <Text style={styles.ContentAreaText}>Zimbabwe</Text></TouchableOpacity>

        
        </View>
        </ScrollView>
      
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
      flexDirection:'row',
      //justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:10,
      marginTop:30,
      marginBottom:10,
      backgroundColor:colors.lightTwo,
      borderRadius:13,

  },
  NameAreaIcon: {
      marginHorizontal:10,
  },
  NameAreaInput: {
      borderRadius:5,
      padding:0,
      paddingHorizontal:10,
      paddingVertical:1,
      width:'80%',
  },
  WrapperContentArea: {
    marginVertical:10,
    marginHorizontal:10,
  },
  ContentAreaText: {
    fontSize:14,
    color:colors.textDark,
    marginLeft:5,
    paddingVertical:10,
  },


});
