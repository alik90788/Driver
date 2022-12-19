import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import BlackButton, { CustomButton } from "./components/BlackButton";
import CustomIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { baseStyles, fonts } from "./constants/fonts";
import ArrowsBox from "./components/Arrows";
import PaymentModal from "./Modals/PaymentModal";
import { useIsFocused } from "@react-navigation/native";
import CustomStatusBar from "./components/CustomStatusBar";
import { colors } from "./constants/colors";

const FareDetail = ({ navigation }) => {
  const [paymentconfirmed, setpaymentconfirmed] = useState(false);
  const isFocused=useIsFocused()

  useEffect(()=>{
    console.log({isFocused})
return()=>{
  setpaymentconfirmed(false)
}
  },[isFocused])
// setpaymentconfirmed

  return (
    <>
      <ArrowsBox navigation={navigation} next={'RatePassenger'} />

      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <ScrollView style={baseStyles.page}>

        <View style={baseStyles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: 'center'
            }}
          >
            <BackButton />

            <Text style={{ ...fonts.pageTitle, alignItems: 'center', justifyContent: 'center', width: '80%' }}>
            Fare Details
          </Text>

          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",

              marginTop: moderateVerticalScale(30),
              width: '100%',
              flexDirection: 'row'
            }}
          >
            <Text style={{ ...fonts.f20B }}>Total</Text>
            <Text style={{ ...fonts.f20B }}>$70.00</Text>
          </View>
          <View >
            <Text style={{ marginVertical: 10, ...fonts.f12R }}>
              You have travelled 10miles in 20min
            </Text>

          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingHorizontal: moderateVerticalScale(30),
              marginTop: 10,
              width: '100%',
              flexDirection: 'row'
            }}
          >
            <Text style={{ ...fonts.f12B }}>Base Fare</Text>
            <Text style={{ ...fonts.f12B }}>$00.00</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingHorizontal: moderateVerticalScale(30),
              marginTop: 10,
              width: '100%',
              flexDirection: 'row'
            }}
          >
            <Text style={{ ...fonts.f12B }}>Distance (0.50 x 10)</Text>
            <Text style={{ ...fonts.f12B }}>$3.00</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingHorizontal: moderateVerticalScale(30),
              marginTop: 10,
              width: '100%',
              flexDirection: 'row'
            }}
          >
            <Text style={{ ...fonts.f12B }}>Time</Text>
            <Text style={{ ...fonts.f12B }}>05.00 hrs</Text>
          </View>


          <View
            style={{
              height: 2,
              backgroundColor: "grey",
              width: 300,
              paddingHorizontal: 20,
              alignSelf: 'center',
              marginTop: 15
            }}
          ></View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 10,
              width: '100%',
              flexDirection: 'row'
            }}
          >
            <Text style={{ ...fonts.f18B }}>Total Payable</Text>
            <Text style={{ ...fonts.f18B }}>$70.00</Text>
          </View>
          <View style={{ marginTop: 190 }}>
            <Text style={{ marginVertical: 10, ...fonts.f14B }}>
              Payment method selected
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <View style={{
              display: "flex", flexDirection: "row",
              alignItems: 'center'
            }}>
              <FontAwesome5Icon name="check-circle" color="#F164b2" />
              <Text style={{ ...fonts.f10B, marginLeft: 20 }}>Cash</Text>
            </View>
            {/* <Image source={card} 
            style={{width:moderateScale(20),height:moderateScale(20)}} /> */}
            <CustomIcon name='cash'
              size={20}
              color={'green'}
            />
          </View>
          <CustomButton text={"Confirm Payment"} onPress={() => { setpaymentconfirmed(true) }}
            style={{ marginTop: moderateVerticalScale(30) }}
          />
        </View>
        <PaymentModal
          show={paymentconfirmed}
          setShow={setpaymentconfirmed}
          navigation={navigation}
        />
      </ScrollView>

    </>
  );
};
const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
    marginLeft: 50,
    fontFamily: 'PoppinsBold'
  },
});

export default FareDetail;
