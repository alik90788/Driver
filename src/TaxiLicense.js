import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import camera from '../assets/camera.png';
import gallery from '../assets/gallery.png';
import BlackButton, { CustomButton } from "./components/BlackButton";
import BackButton from "./components/BackButton";
import { baseStyles, fonts } from "./constants/fonts";
import { moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import { colors } from "./constants/colors";
import { Button, Actionsheet, useDisclose } from "native-base";
import UploadImageCard from "./components/UploadImageCard";
import ArrowsBox from "./components/Arrows";


const TaxiLicense = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [frontSide, setFrontSide] = useState(null)
  const [backSide, setBackSide] = useState(null)

  return (
    <ScrollView style={baseStyles.page}    >
      <ArrowsBox navigation={navigation} next={'PVG'} />

      <View style={baseStyles.container}>
        <View
          style={{ display: "flex", flexDirection: "row", alignItems: "center", }}
        >
          <BackButton />
          <Text style={{...fonts.pageTitle,textAlign:'center',marginLeft:0,width:'85%'}}>Taxi License</Text>
        </View>
        <Text style={[fonts.f12Sm, styles.subtext, {
           marginLeft: Dimensions.get('window').width*0.12, width: '85%'
        }]}>
          Please add images of both sides of your Taxi License
        </Text>
        <UploadImageCard label={'Front Side'} boxStyle={{ width: '100%' }}
          item={frontSide} onUpload={(e) => {
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
        <CustomButton text="Next" onPress={() => { navigation.navigate('PVG') }} style={styles.btn} />

      </View>
    </ScrollView>
  )
}

export default TaxiLicense

const styles = ScaledSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 20,
  },
  subtext: {
    color: colors.mainColor,
    textAlign: "center",
    maxWidth: '80%',
    marginHorizontal: '10%'
  },
  btn: {
    marginTop: moderateVerticalScale(25),
  },
})