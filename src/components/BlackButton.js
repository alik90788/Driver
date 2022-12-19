import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { colors } from "../constants/colors";

const BlackButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:67,
        paddingRight:67,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        width:'85%'
    },
    buttonText:{
        color:'#F164b2',
        fontSize:14,
        fontWeight:'500',
        fontFamily:'PoppinsRegular'
     }
})






const CustomButton = ({text,onPress,style,activeOpacity=0.8, textStyle}) => {
  return (
    <TouchableOpacity style={[customStyles.button,style]} activeOpacity={activeOpacity} onPress={onPress}>
      <Text style={[customStyles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}



const customStyles = ScaledSheet.create({
    button:{
        backgroundColor:colors.black,
        paddingVertical:moderateVerticalScale(15,0.3),
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:moderateScale(5,0.3),
        width:'100%'
    },
    buttonText:{
        color:colors.mainColor,
        fontSize:moderateScale(15,0.3),
        fontWeight:'700',
        fontFamily:'PoppinsRegular'
     }
})
export default BlackButton
export {CustomButton}