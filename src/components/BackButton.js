import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
const BackButton = ({ style, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button, style]} activeOpacity={0.9} onPress={() => { onPress ? onPress() : navigation.goBack() }}>
      <CustomIcon name="chevron-left" color={colors.mainColor} size={30} height={30} />
    </TouchableOpacity>
  )
}
const SimpleButton = ({ style, children, onPress = () => null,...props }) => {
  return (
    <TouchableOpacity style={[style]} activeOpacity={0.9} onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default BackButton
export { SimpleButton }

const styles = ScaledSheet.create({
  button: {
    zIndex: 1000,
    borderRadius: moderateScale(38, 0.3),
    width: moderateScale(38, 0.3),
    height: moderateScale(38, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    border: 0,
    shadowOpacity: 0.4,
    shadowRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 12,
  }
})