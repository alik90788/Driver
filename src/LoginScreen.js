import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import BlackButton, { CustomButton } from "./components/BlackButton";
import Logo from '../assets/splash.png';
import IonIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Input from "./components/Input";
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { colors } from "./constants/colors";
import { StatusBar } from "react-native";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ email: '', password: '' })
  function onSubmit() {
    // if(email ==''){
    //   setError({...error,email:'Email can be empty'})
    //   return
    // }
    // console.log("e",!!email.includes('@'))
    // if(!!email.includes('@')){
    //   setError({...error,email:'Invalid Email'})
    //   return
    // }

    // if(password ==''){
    //   setError({...error,password:'Password can be empty'})
    //   return
    // }

    // if(password.length < 8){
    //   setError({...error,password:'Password must be greater than 8'})
    //   return
    // }
    setError({ email: '', password: '' })
    navigation.navigate('RightDrawerScreen')

  }
  return (
    <View
      style={styles.container}
    >
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      />

      <ArrowsBox navigation={navigation} next={'AddProfile'} isPrev={false} />
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtext}>Log in to continue</Text>

      <Input placeholder={"Email"}
        containerStyle={styles.mt20}
        state={email}
        setter={setEmail}
        icon={<IonIcon name={"envelope"} color={"#C8C8C8"} size={26} />}
        errorText={error.email}
        isError={error.email !== ""}
      />
      <Input placeholder={"Password"}
        state={password}
        setter={setPassword}
        icon={<Feather name={"unlock"} color={"#C8C8C8"} size={20} />}
        containerStyle={styles.mt20}
        errorText={error.password}
        isError={error.password !== ""}
        isPassword

      />
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPassword")}>
        Forgot Password?
      </Text>
      <CustomButton style={styles.btn} text={"Login"} onPress={onSubmit} />
      <Text
        style={styles.dontHave}>
        Don't have an Account?
        <Text
          style={styles.create}
          onPress={() => navigation?.navigate('SignUp')}
        >
          {""} Create account
        </Text>
      </Text>

    </View>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flexDirection: "column",
    width: '100%',
    justifyContent: 'center',
    padding: moderateScale(35, 0.3),
    flex: 1,
    // marginTop:StatusBar.currentHeight

  },

  mt20: {
    marginTop: moderateVerticalScale(25, 0.3)
  },
  btn: {
    marginTop: moderateVerticalScale(30, 0.3)
  },
  logo: {
    height: moderateScale(80, 0.3),
    width: '100%',
    marginBottom: moderateVerticalScale(20, 0.3)

  },
  title: {
    fontSize: moderateScale(35),
    lineHeight: moderateScale(45),
    fontFamily: 'PoppinsExtraBold',
    color: colors.black,
  },
  subtext: {
    color: colors.mainColor,
    // marginTop: moderateVerticalScale(10, 0.3),
    fontFamily: 'PoppinsBold',
    // fontWeight: '900'

  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: moderateVerticalScale(10, 0.3),
    fontFamily: 'PoppinsRegular',
    fontWeight: '900'
  },
  dontHave: {
    textAlign: 'center',
    marginTop: moderateVerticalScale(20, 0.3),
    fontFamily: 'PoppinsRegular',
    color: colors.black,
    fontSize: moderateScale(11, 0.3)
  },
  create: {
    color: colors.mainColor,
    fontSize: moderateScale(12, 0.3),
    fontFamily: "PoppinsRegular",
  }

});
