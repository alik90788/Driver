import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import cardmap from "../assets/cardmap.png";
import { Avatar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-elements";
import { baseStyles, fonts } from "./constants/fonts";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import Maps from "./components/CustomMap";
import { colors } from "./constants/colors";
import CustomStatusBar from "./components/CustomStatusBar";

const CardDetail = () => {
  return (
    <ScrollView style={baseStyles.page} >
      <View style={{flex:1}}>

       <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 35,
          marginBottom: 20,
          marginHorizontal: 35,
        }}
      >
        <BackButton />
        <Text style={[fonts.pageTitle, { marginLeft: Dimensions.get('window').width*0.14 }]}>Trip Details</Text>
      </View>

      
      <View style={{ width: Dimensions.get('window').width / 3, height: Dimensions.get('window').width / 1.7 }}>
        <Maps />
      </View>

      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 30,
          height: "100%",
        }}
      >

        <View style={styles.inputfield}>
          <Text style={{ ...fonts.f14R, fontWeight: '500' }} >
            {"Pickup location"}
          </Text>
        </View>
        <View style={styles.inputfield}>
          <Text style={{ ...fonts.f14R, fontWeight: '500' }} >
            {"2nd location"}
          </Text>
        </View>
        <View style={styles.inputfield}>
          <Text style={{ ...fonts.f14R, fontWeight: '500' }} >
            {"3rd location"}
          </Text>
        </View>
        <View style={styles.inputfield}>
          <Text style={{ ...fonts.f14R, fontWeight: '500' }} >
            {"Destination"}
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
          />
          <View style={{ width: "100%" }}>
            <View
              style={{
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "space-between",
                justifyContent: 'center',
                paddingLeft: 10
              }}
            >

              <Text style={{ ...fonts.f12R, }}>User Name</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: 'space-between',
                  marginRight: moderateScale(35),
                  // marginBottom: -15
                }}
              >
                <Text style={{ ...fonts.f14R }}>Destination Name</Text>

                <AirbnbRating size={12} reviewSize={0} selectedColor={"#f37bbe"} starContainerStyle={{
                  marginTop: -17

                }} />
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: moderateScale(35),
                marginTop: moderateVerticalScale(10),
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "800" }}>$200.00</Text>
              <Text style={{ fontSize: 12, fontWeight: "600" }}>
                Debit Card
              </Text>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
  inputfield: {
    // height: 45,
    // width: 310,
    // backgroundColor: "#E8E8E8",
    backgroundColor: "#f5f5f5",
    borderWidth: 0,
    // borderRadius: 5,
    // zIndex: 1000,
    marginTop: 20,
    display: "flex",
    padding: 10,
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    // elevation: 2,
  },
});
