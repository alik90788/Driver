import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import { fonts } from "../constants/fonts";

const GreenButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  )
}

export default GreenButton

const styles = ScaledSheet.create({
    button:{
        backgroundColor:'#bcf763',
        paddingVertical:moderateVerticalScale(10),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:moderateScale(8),
        width:'46%',
        marginRight:'4%'
    },
    buttonText:{
      ...fonts.f16SB,
        color:'white',
       
     }
})