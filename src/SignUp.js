import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from '../assets/splash.png';
import BlackButton, { CustomButton } from "./components/BlackButton";
import Feather from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/EvilIcons";
import { TouchableOpacity } from "react-native";
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'

import Input from "./components/Input";
import { ScrollView } from "react-native";
import { colors } from "./constants/colors";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";
const SignUp = ({ navigation }) => {
  const [email, setemail] = useState();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState({ email: '', password: '' })


  return (

    <ScrollView
      contentContainerStyle={styles.container}
    >
       <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <ArrowsBox navigation={navigation} next={'AuthCode'} />

      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>
      <View
        style={[{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",

        }, styles.mb20]}
      >
        <Input placeholder={"First Name"}
          containerStyle={{ width: '48%' }}
          state={firstName}
          setter={setFirstName}
          icon={<Feather name="user" color="#C8C8C8" size={16} />}
        // errorText={error.email}
        // isError={error.email !==""}
        />
        <Input placeholder={"Surname"}
          containerStyle={{ width: '48%' }}
          state={lastName}
          setter={setLastName}
          icon={<Feather name="user" color="#C8C8C8" size={16} />}
        // errorText={error.email}
        // isError={error.email !==""}
        />
        {/* <View style={styles.inputfields}>
          <Feather name="user" color="#C8C8C8" size={16} />
          <TextInput
            placeholder={"First Name"}
            placeholderTextColor="black"
            style={styles.input}
          />
        </View>
        <View style={styles.inputfields}>
          <Feather name="user" color="#C8C8C8" size={16} />
          <TextInput
            placeholder={"Surname"}
            placeholderTextColor="black"
            style={styles.input}
          />
        </View> */}
      </View>
      <Input placeholder={"Email"}
        containerStyle={styles.mb20}
        state={email}
        setter={setemail}
        icon={<IonIcon name="envelope" color="#C8C8C8" size={24} />}
      // errorText={error.email}
      // isError={error.email !==""}
      />
      <Input placeholder={"Phone Number"}
        containerStyle={styles.mb20}
        state={phone}
        setter={setPhone}
        icon={<Feather name="phone" color="#C8C8C8" size={20} />}
        keyboardType={'number-pad'}
      // errorText={error.email}
      // isError={error.email !==""}
      />
      <Input placeholder={"Password"}
        containerStyle={styles.mb20}
        state={password}
        setter={setPassword}
        icon={<Feather name={"unlock"} color={"#C8C8C8"} size={20} />}
        isPassword
      // errorText={error.email}
      // isError={error.email !==""}
      />
      <Input placeholder={"Confirm Password"}
        containerStyle={styles.mb20}
        state={cpassword}
        setter={setCPassword}
        icon={<Feather name={"unlock"} color={"#C8C8C8"} size={20} />}
        isPassword
      // errorText={error.email}
      // isError={error.email !==""}
      />
      <CustomButton
        text={"Sign Up"}
        onPress={() => {
          navigation.navigate("AddProfile");
        }}
      />
      <View style={styles.lastLine}>
        <Text
          style={styles.haveAn}
        >
          If you have account?
        </Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.create}
            onPress={() => navigation?.navigate('Login')}
          >{' '}Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flexDirection: "column",
    width: '100%',
    justifyContent: 'center',
    padding: moderateScale(35, 0.3),
    flex: 1,

  },
  mb20: {
    marginBottom: moderateVerticalScale(20, 0.3)
  },
  logo: {
    height: moderateScale(80, 0.3),
    width: '100%',
    marginBottom: moderateVerticalScale(20, 0.3)

  },
  title: {
    fontSize: moderateScale(25),
    lineHeight: moderateScale(28),
    fontFamily: 'PoppinsExtraBold',
    color: colors.black,
    marginBottom: moderateVerticalScale(25)
  },
  lastLine: {
    marginTop: moderateVerticalScale(20, 0.3),
    width: "100%", flexDirection: 'row', alignItems: "center", justifyContent: 'center'
  },
  haveAn: {
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    color: colors.black,
    fontSize: moderateScale(14, 0.3),
  },
  loginBtn: {

  },
  create: {
    color: colors.mainColor,
    fontSize: moderateScale(14, 0.3),
    fontFamily: "PoppinsBold",
  }

});
