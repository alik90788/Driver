import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/Ionicons";
import { CustomButton } from "./components/BlackButton";
import camera from '../assets/camera.png';
import gallery from '../assets/gallery.png';
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { fonts } from "./constants/fonts";
import { colors } from "./constants/colors";
import { Button, Actionsheet, useDisclose } from "native-base";
import UploadImageCard from "./components/UploadImageCard";
import ProfilePic from '../assets/Profile.png'
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";

const AddProfile = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [media, setMedia] = useState([null])
  const [index, setIndex] = useState(0)
  return (
    <ScrollView style={styles.page}>
      <ArrowsBox navigation={navigation} next={'DriverLicense'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
          <BackButton />
          <Text style={styles.title}>Add Photo/Video</Text>
        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          {
            media?.map((item, key) => {
              return (
                <UploadImageCard item={item} key={key} onUpload={(e) => {
                  const newImgs = [...media]
                  newImgs.splice(key, 1, e)
                  setMedia(newImgs)
                  // setIndex(key)
                  // onOpen()
                }}
                  onCancel={() => {
                    const newItems = [...media]
                    newItems.splice(key, 1, null)
                    setMedia(newItems)
                  }}
                />
              )
            })
          }
        </View>
        <View style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <View style={{ marginTop: 55, width: '100%', alignItems: 'center' }}>
            <CustomButton text="Next"
              onPress={() => { navigation.navigate('DriverLicense') }}
            />
          </View>
          <View style={{ marginTop: 7, width: '100%', alignItems: 'center' }}>
            <CustomButton text="Add More" onPress={() => setMedia(prev => [...prev, null])} />
          </View>
        </View>
      </View>
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "black",
          height: 150,
          width: "100%",
          justifyContent: 'center',
          paddingLeft: 20,
        }}
      > */}
      <Actionsheet isOpen={isOpen} onClose={onClose} >
        <Actionsheet.Content style={{ backgroundColor: colors.black }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: '500' }}>
            Profile Photo/Video
          </Text>
          <View style={{ display: "flex", flexDirection: 'row', marginTop: 20, width: '100%' }}>
            <TouchableOpacity >
              <Image source={gallery} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <Image source={camera} />
            </TouchableOpacity>
          </View>
        </Actionsheet.Content>
      </Actionsheet>

      {/* </View> */}
    </ScrollView>
  );
};

export default AddProfile;

const styles = ScaledSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    width: '100%',


  },
  container: {
    padding: moderateScale(35, 0.3),
    // marginTop:StatusBar.currentHeight

  },
  title: {
    fontSize: moderateScale(24, 0.3),
    height: '100%',
    color: colors.black,
    marginLeft: moderateScale(15),
    fontFamily: "PoppinsBold",
  },

  view: {
    marginTop: 80,
    width: 160,
    height: 160,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 7,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
  },
});
