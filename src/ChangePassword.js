import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import BackButton from "./components/BackButton";
import BlackButton, { CustomButton } from "./components/BlackButton";
import { baseStyles, fonts } from "./constants/fonts";
import ValueCard from "./components/ValueCard";
import { colors } from "./constants/colors";
import { moderateVerticalScale, ScaledSheet } from "react-native-size-matters";

const ChangePassword = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  return (
    <ScrollView style={baseStyles.page}>
      <View style={baseStyles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: moderateVerticalScale(40),
            // marginHorizontal: 20,
          }}
        >
          <BackButton />
          <Text style={fonts.pageTitle}>Change Password</Text>
        </View>
        <ValueCard label={'Current Password'}
          setter={setPassword}
          value={password}
          inputStyle={{color:colors.black}}
          cursorColor={colors.black}
          style={styles.mb20}
        />
        <ValueCard label={'New Password'}
          setter={setNewPassword}
          value={newPassword}
          inputStyle={{color:colors.black}}
          cursorColor={colors.black}
          style={styles.mb20}

        />
        <ValueCard label={'Retype Password'}
          setter={setRePassword}
          value={rePassword}
          inputStyle={{color:colors.black}}
          cursorColor={colors.black}
          style={styles.mb20}

        />
      
     
          <CustomButton text={"Save"} onPress={() => { navigation.navigate('VerificationCode') }} style={styles.mt20} />

      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = ScaledSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
  inputfield: {
    height: 65,
    width: 310,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  mb20:{
    marginBottom:moderateVerticalScale(20)
  },
  mt20:{
  marginTop:moderateVerticalScale(20)
  }
});
