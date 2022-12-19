import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BackButton from './components/BackButton'
import { baseStyles, fonts } from './constants/fonts'
import { moderateScale, ScaledSheet } from 'react-native-size-matters'
import { useIsFocused } from '@react-navigation/native'
import { colors } from './constants/colors'
import CustomStatusBar from './components/CustomStatusBar'

const LiveStreaming = ({navigation}) => {
 
  return (
    <View style={baseStyles.page}>
       <CustomStatusBar
          barStyle={'light-content'}
          backgroundColor={colors.white}
        />

      <View style={baseStyles.container}>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
        <BackButton style={styles.btn} onPress={()=>navigation.goBack()} />
        <Text style={{ ...fonts.f16R ,textAlign:'center'}}>Live streaming link has been sent to your selected contact</Text>
        </View>
      </View>
    </View>
  )
}

export default LiveStreaming

const styles = ScaledSheet.create({
  btn: {
    position: 'absolute',
    top:0,
    left:0
  }
})