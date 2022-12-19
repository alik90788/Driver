import { StyleSheet, Text, View, TextInput, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-elements";
import BackButton from "./components/BackButton";
import BlackButton, { CustomButton } from "./components/BlackButton";
import IonIcon from 'react-native-vector-icons/Ionicons'
import { baseStyles, fonts } from "./constants/fonts";
import ProfilePic from '../assets/Profile.png'
import HeaderWithBtns from "./components/HeaderWithBtns";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import ValueCard from "./components/ValueCard";
import { InputWithLabel } from "./components/Input";
import { colors } from "./constants/colors";
import CustomStatusBar from "./components/CustomStatusBar";

const CreateProfile = ({ navigation }) => {
  const [address, setAddress] = useState('No 23, 6th Lane, Colombo 03')
  const [phone, setPhone] = useState('000 0000 0000')

  const data = {
    email: 'johndoe@gmail.com'
  }
  return (
    <ScrollView style={baseStyles.page}>
      <View style={baseStyles.container}>
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

        <View
          style={{

            marginBottom: moderateVerticalScale(20),
          }}
        >
          <HeaderWithBtns title={"Profile"}
            onPress2={() => navigation?.openDrawer()}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            rounded
            size="large"
            source={ProfilePic}
            style={styles.avatar}

          />
          <Text
            style={[fonts.f16B]}
          >
            Hi there John Doe!
          </Text>
        </View>
        <View style={{ backgroundColor: "white", height: "100%" }}>
          <View style={{ marginTop: 20 }}>
            <ValueCard label={'Name'} value={'John Doe'} cursorColor={colors.black}
              disabled={true}
              style={{ marginBottom: moderateVerticalScale(20) }}
              inputStyle={{ color: colors.black }}
            />
            <ValueCard label={'Email'} value={data?.email} cursorColor={colors.black}
              setter={setAddress}
              style={{ marginBottom: moderateVerticalScale(20) }}
              inputStyle={{ color: colors.black }}
              disabled={true}
            />
            <ValueCard label={'Mobile No'} value={phone} cursorColor={colors.black}
              // disabled={true}
              setter={setPhone}
              focusOnEdit
              keyboardType={'number-pad'}
              style={{ marginBottom: moderateVerticalScale(20) }}
              inputStyle={{ color: colors.black }}

            />
            <ValueCard label={'Address'} value={address} cursorColor={colors.black}
              // disabled={true}
              setter={setAddress}
              focusOnEdit
              style={{ marginBottom: moderateVerticalScale(20) }}
              inputStyle={{ color: colors.black }}

            />
            <ValueCard label={'Password'} value={'********'} cursorColor={colors.black}
              // setter={setAddress}
              focusOnEdit
              style={{ marginBottom: moderateVerticalScale(20) }}
              inputStyle={{ color: colors.black }}
              focusOnEditIcon={<Text style={
                {
                  position: 'absolute',
                  top: moderateVerticalScale(30),
                  right: moderateScale(20),
                  zIndex: 9,
                  ...fonts.f12B,
                  color: colors.mainColor,
                }
              } onPress={() => { navigation.navigate('ChangePassword') }}>Change</Text>}

            />

          </View>
          <CustomButton text={"Save"} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
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
  avatar: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(120),
  }
});
