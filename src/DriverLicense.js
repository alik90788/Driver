import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import camera from '../assets/camera.png';
import gallery from '../assets/gallery.png';
import BlackButton, { CustomButton } from "./components/BlackButton";
import BackButton from "./components/BackButton";
import { baseStyles, fonts } from "./constants/fonts";
import UploadImageCard from "./components/UploadImageCard";
import { Button, Actionsheet, useDisclose } from "native-base";
import { colors } from "./constants/colors";
import { moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";

const DriverLicense = ({ navigation }) => {
  const [frontSide, setFrontSide] = useState(null)
  const [backSide, setBackSide] = useState(null)


  return (
    <ScrollView style={baseStyles.page}    >
       <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <ArrowsBox navigation={navigation} next={'TaxiLicense'} />
      <View style={baseStyles.container}>
        <View
          style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <BackButton />
          <Text style={{ ...fonts.pageTitle, textAlign: 'center', marginLeft: 0, width: '85%' }}>Driver's License</Text>
        </View>
        <Text style={[fonts.f12Sm, styles.subtext, {
           marginLeft: Dimensions.get('window').width*0.12, width: '85%'
        }]}>
          Please add images of both sides of your Driver's License
        </Text>

        <UploadImageCard label={'Front Side'} boxStyle={{ width: '100%' }}
          item={frontSide}
          onUpload={(e) => {
            setFrontSide(e)
          }}
          onCancel={() => {
            setFrontSide(null)
          }}
        />
        <UploadImageCard label={'Back'} boxStyle={{ width: '100%' }}
          item={backSide} onUpload={(e) => {
            setBackSide(e)
          }}
          onCancel={() => {
            setBackSide(null)
          }}

        />
        <CustomButton text="Next" onPress={() => { navigation.navigate('TaxiLicense') }} style={styles.btn} />


      </View>
    </ScrollView>
  );
};

export default DriverLicense;

const styles = ScaledSheet.create({
  subtext: {
    color: colors.mainColor,
    textAlign: "center",
    maxWidth: '80%',
    marginHorizontal: '10%',

  },

  btn: {
    marginTop: moderateVerticalScale(25),
  },
});
