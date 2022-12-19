import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from './components/BackButton';
import BlackButton, { CustomButton } from './components/BlackButton';
import { TextInput } from 'react-native-gesture-handler';
import ValueCard from './components/ValueCard';
import { moderateScale, moderateVerticalScale, ScaledSheet } from 'react-native-size-matters';
import { baseStyles, fonts } from './constants/fonts';
import { colors } from './constants/colors';
import ArrowsBox from './components/Arrows';
import CustomStatusBar from './components/CustomStatusBar';
const CarDetails = ({ navigation }) => {
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [regNo, setRegNo] = useState("")
  const [color, setColor] = useState("")
  const [] = useState()
  const data = {
    make: 'Honda',
    model: 'Civic',
    registerNo: 'JU 0000 0000 000 0000',
    color: 'black'
  }
  return (
    <ScrollView style={baseStyles.page}>
      <ArrowsBox navigation={navigation} next={'BankDetail'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <View style={[baseStyles.container]}>
        <View
          style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <BackButton style={{ alignSelf: 'flex-start' }} />
          <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '85%', }}>
            <Text style={{...fonts.pageTitle,marginLeft:0}}>Car Details</Text>
            <Text style={[fonts.f12Sm, styles.subtext]}>
              Please enter your car details
            </Text>

          </View>
        </View>
        <View style={{ marginTop: moderateVerticalScale(35) }}>
          <ValueCard
            label={'Make'}
            value={make}
            setter={setMake}
            style={styles.mb15}
          />
          <ValueCard
            label={'Model'}
            value={model}
            setter={setModel}
            style={styles.mb15}

          />
          <ValueCard
            label={'Number'}
            value={regNo}
            setter={setRegNo}
            style={styles.mb15}

          />
          <ValueCard
            label={'Color'}
            value={color}
            setter={setColor}
            style={styles.mb15}

          />

        </View>
        <CustomButton text={"Next"} onPress={() => { navigation.navigate('BankDetail') }} style={styles.btn} />
      </View>
    </ScrollView>
  )
}

export default CarDetails

const styles = ScaledSheet.create({
  mb15: {
    marginBottom: moderateVerticalScale(15)
  },
  title: {
    fontSize: 24,
    fontFamily: 'PoppinsBold',
    margin: 10,
    color: "black",
    // marginLeft: 60,
    textAlign: 'center'
  },
  subtext: {
    color: colors.mainColor,
    textAlign: 'center',
  },
  btn: {
    marginTop: moderateVerticalScale(45)
  }
})