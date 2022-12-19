import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomIcon from "react-native-vector-icons/Ionicons";
import BlackButton, { CustomButton } from "./components/BlackButton";
import { baseStyles, fonts } from "./constants/fonts";
import { colors } from "./constants/colors";
import CustomStatusBar from "./components/CustomStatusBar";

const ThankuFeedback = ({navigation}) => {
  return (
    <View style={baseStyles.page}>
       <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <View
        style={{...baseStyles.container, alignItems:'center'}}
      >
        <Text style={fonts.f22R}>Complete Ride</Text>
        <View
          style={{
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
            width:'100%',
          }}
        >
          <CustomIcon
            name="ios-checkmark-circle-outline"
            size={100}
            color="#F164b2"
          />
          <Text style={{...fonts.f18B, textAlign:'center'}}>Thankyou for your feedback</Text>
        </View>
        <CustomButton text="Go to HomePage" onPress={()=>{navigation.navigate('RightDrawerScreen')}}/>
      </View>
      
    </View>
  );
};

export default ThankuFeedback;

const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
});
