import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import { Avatar } from "react-native-elements";
import cardmap from '../../assets/cardmap.png'
import { colors } from '../constants/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { fonts } from '../constants/fonts';
import Maps from './CustomMap';



const Card = ({ navigation, onPress }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: '#F7F7F7', zIndex: 2000, padding: 20, borderRadius: 10, marginTop: 10,
      shadowColor: colors.black,
      shadowOffset: {
        x: 4,
        y: 5,
      },
      shadowOpacity: 0.45,
      shadowRadius: 3.84,

      elevation: 4,
      width:'100%'
    }}
      onPress={onPress}>

      {/* <Image source={cardmap} style={{ width: '100%' }} onPress={() => { navigation.navigate('CardDetail') }} /> */}
      {/* <View style={{ width: Dimensions.get('window').width / 3, height: Dimensions.get('window').width / 1.7 }}> */}
        <Maps
        style={{ width: Dimensions.get('window').width / 1.3, height: Dimensions.get('window').width / 2.4 }}
        />
      {/* </View> */}

      <View style={{
        display: 'flex', flexDirection: 'row', marginTop: 10,
        paddingTop: moderateVerticalScale(10), borderTopColor: colors.textGray, borderTopWidth: 1,
        width: '90%',
        marginHorizontal: '5%',
        justifyContent: 'space-between',
      }}>
        {/* Left */}
        <View style={{
          flexDirection: 'row',
          // backgroundColor:'green'
          // ,
        }}>
          <Avatar
            rounded
            // size="small"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            size={45}
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ ...fonts.f10R, fontSize: moderateScale(9) }}>User Name
              <Text style={{ ...fonts.f10R, fontSize: moderateScale(9), color: colors.ratingOrange }}>{" "}(4.8)</Text>
            </Text>
            <Text style={{ ...fonts.f12B, fontSize: moderateScale(11) }}>Destination Name</Text>
            <Text style={{
              ...fonts.f14Sm, marginTop: moderateVerticalScale(-3),
              fontSize: moderateScale(12)
            }}>01-July-2021</Text>
          </View>
        </View>
        {/* Right */}

        <View style={{}}>
          <Text style={{ ...fonts.f10B, fontSize: moderateScale(11) }}>$20.00</Text>
          <Text style={{
            ...fonts.f12B, fontSize: moderateScale(10), color: colors.mainColor,
            marginTop: moderateVerticalScale(-3)
          }}>Debit card</Text>
          <Text style={{
            ...fonts.f14Sm, marginTop: moderateVerticalScale(-3),
            fontSize: moderateScale(12)
          }}>12:00AM</Text>
        </View>


      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({

})