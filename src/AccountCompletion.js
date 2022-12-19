import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import BlackButton, { CustomButton } from "./components/BlackButton";
import { colors } from "./constants/colors";
import { moderateScale } from "react-native-size-matters";
import { baseStyles } from "./constants/fonts";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";

const AccountCompletion = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[baseStyles.page]}
    >
      <ArrowsBox navigation={navigation} next={'RightDrawerScreen'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 


      <View style={[baseStyles.container,
      {
        height: "100%",
        width: "100%",
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent:'center'
      }
      ]}>
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <CustomIcon
            name="ios-checkmark-circle-outline"
            size={moderateScale(90)}
            color={colors.mainColor}
          />
          <Text style={styles.head}>Account Created</Text>
        </View>
        <CustomButton
          text={"Login"}
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btn}
        />
      </View>



    </SafeAreaView>
  );
};

export default AccountCompletion;

const styles = StyleSheet.create({
  head: {
    fontSize: moderateScale(20, 0.3),
    fontFamily: "PoppinsBold",
    display: "flex",
  },
  btn: {
    position:'absolute',
    bottom:moderateScale(70)
  }
});
