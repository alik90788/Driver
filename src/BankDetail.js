import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from './components/BackButton';
import BlackButton, { CustomButton } from './components/BlackButton';
import { baseStyles, fonts } from './constants/fonts';
import { moderateVerticalScale, ScaledSheet } from 'react-native-size-matters';
import Input from './components/Input';
import { colors } from './constants/colors';
import ArrowsBox from './components/Arrows';
import ValueCard from './components/ValueCard';
import CustomStatusBar from './components/CustomStatusBar';
const BankDetail = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bankName, setBankName] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [sortCode, setSortCode] = useState('')
  return (
    <ScrollView style={[baseStyles.page]}>
      <ArrowsBox navigation={navigation} next={'Summary'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <View style={[baseStyles.container]}>
        <View
          style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <BackButton style={{ alignSelf: 'flex-start' }} />
          <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%' }}>
            <Text style={{...fonts.pageTitle,marginLeft:0}}>Bank Details</Text>
            <Text style={[fonts.f12Sm, styles.subtext]}>
              Please enter your bank details
            </Text>
          </View>
        </View>

        <View style={styles.mt40}>
          <View
            style={[{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",

            }, styles.mb20]}
          >
  
            <ValueCard label={"First Name"}
              style={{ width: '47%' }}
              state={firstName}
              setter={setFirstName}
            
            />
            <ValueCard label={"Surname"}
              style={{ width: '47%' }}
              state={lastName}
              setter={setLastName}
            />

          </View>

          <ValueCard label={"Bank Name"}
            style={styles.mb20}
            state={bankName}
            setter={setBankName}
          // errorText={error.email}
          // isError={error.email !==""}
          />
          <ValueCard label={"Account Number"}
            style={styles.mb20}
            state={accountNo}
            setter={setAccountNo}
            keyboardType={'number-pad'}
          // errorText={error.email}
          // isError={error.email !==""}
          />
          <ValueCard label={"Sort Code"}
            style={styles.mb20}
            state={sortCode}
            setter={setSortCode}
          // errorText={error.email}
          // isError={error.email !==""}
          />

        </View>
        <CustomButton text="Next" onPress={() => { navigation.navigate('Summary') }} style={styles.btn} />
      </View>
    </ScrollView>
  )
}

export default BankDetail

const styles = ScaledSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'PoppinsBold',
    margin: 10,
    color: "black",
    // marginLeft: 50,

  },
  mt40: {
    marginTop: moderateVerticalScale(40, 0.3)
  },
  btn: {
    marginTop: moderateVerticalScale(50, 0.3)
  },
  subtext: {
    color: colors.mainColor,
    textAlign: 'center',
  },
  inputfields: {
    height: 52,
    width: "48%",
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 10,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4.84,

    elevation: 2,
  },
  inputfield: {
    height: 52,
    width: "85%",
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 10,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4.84,

    elevation: 2,
  },
  mb20: {
    marginBottom: moderateVerticalScale(20, 0.3)
  },

})