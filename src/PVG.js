import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import camera from '../assets/camera.png';
import gallery from '../assets/gallery.png';
import BlackButton, { CustomButton } from "./components/BlackButton";
import BackButton from "./components/BackButton";
import { moderateScale, moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import { colors } from "./constants/colors";
import { baseStyles, fonts } from "./constants/fonts";
import UploadImageCard from "./components/UploadImageCard";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";


const PVG = ({ navigation }) => {
  const [certificate, setCertificate] = useState(null)

  console.log('a',(Dimensions.get('window').width*0.15))

  return (
    <ScrollView style={baseStyles.page}    >
      <ArrowsBox navigation={navigation} next={'CarDetails'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 


      <View style={baseStyles.container}>
        <View
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <BackButton />
          <Text style={{...fonts.pageTitle,textAlign:'center',marginLeft:0,width:'85%'}}>PVG Certificate</Text>

        </View>

        <Text style={[fonts.f12Sm, styles.subtext]}>
          Please add image of your PVG Certificate
        </Text>
        <UploadImageCard boxStyle={{ width: '80%', marginHorizontal: '10%', height: Dimensions.get('screen').height / 2.9 }}
          item={certificate} onUpload={(e) => {
            setCertificate(e)
          }}
          onCancel={() => {
            setCertificate(null)
          }}
        />

        <CustomButton text="Next" onPress={() => { navigation.navigate('CarDetails') }} style={styles.btn} />

      </View>
    </ScrollView>
  )
}

export default PVG

const styles = ScaledSheet.create({

  subtext: {
    color: colors.mainColor,
    textAlign: "center",
    width: '70%',
    marginLeft:Dimensions.get('window').width*0.17,
    marginRight: 'auto',
    // backgroundColor:'red'
  },
  btn: {
    marginTop: moderateVerticalScale(45),
  },
})