import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Avatar } from "react-native-elements";
import React, { useState } from "react";
import { Rating, AirbnbRating } from 'react-native-elements';
import BlackButton, { CustomButton } from "./components/BlackButton";
import { baseStyles, fonts } from "./constants/fonts";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import Profile from "../assets/Profile.png"
import { colors } from "./constants/colors";
import Stars from "./components/StarRating";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";


const RatePassenger = ({ navigation }) => {
  const [rating, setRating] = useState(3)
  const [text, setText] = useState('')

  return (
    <ScrollView
      style={baseStyles.page}
    >
      <ArrowsBox navigation={navigation} next={'ThankuFeedback'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 


      <View style={[baseStyles.container]}>
        <View style={{ alignItems: 'center' }}>
          <Text style={[fonts.f22R]}>Rate The Passenger</Text>
          <View style={{ marginVertical: moderateVerticalScale(40), alignItems: 'center' }}>
            <Image
              // source={R.image.userPin()}
              style={styles.profileImage}
              resizeMode={'cover'}
              source={
                Profile
              }
            />
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text style={[fonts.f16B, { marginTop: 5 }]}>USER NAME
              </Text>
              <Text style={[fonts.f12B, { color: colors.ratingOrange, marginBottom: moderateVerticalScale(-4) }]}>{" "}(4.8)</Text>
            </View>

          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={fonts.f18R}>Rate the Ride</Text>
            {/* <AirbnbRating reviews={["", ""]} reviewColor={colors.mainColor}/> */}
            <Stars
              ratingCallBack={() => null}
              starSize={20}
              containerStyle={{ width: 100 }}
              stars={4}
              disabled={true}
              state={rating}
              setter={setRating}
            />
          </View>
          <TextInput
            style={styles.textArea}
            numberOfLines={6}
            placeholder={'Share your reviews about ride here'}
            value={text}
            onChangeText={(e) => setText(e)}
            multiline={true}


          />
          {/* <View style={{ marginTop: 20, height: 180, width: 320, marginLeft: 30, marginRight: 30, borderRadius: 15, borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingTop: 14 }}>
            <Text style={{ color: 'grey' }}>Show your views and comment about ride</Text>
          </View> */}
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: moderateVerticalScale(30), width: '100%' }}>
            <CustomButton text={'Submit'} onPress={() => { navigation.navigate('ThankuFeedback') }} style={{ width: '47%' }} />
            <CustomButton text={'Skip'} onPress={() => { navigation.navigate('RightDrawerScreen') }}
              style={{ width: '47%' }}
            />

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RatePassenger;

const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
  button: {
    backgroundColor: 'black',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 47,
    paddingRight: 47,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 150,
    marginRight: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#F164b2',
    fontSize: 15,
    fontWeight: '500'
  },
  profileImage: {
    width: moderateScale(115),
    height: moderateScale(115),
    borderRadius: moderateScale(120),
  },
  textArea: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textGray,
    width: '100%',
    padding: 10,
    // alignSelf:'flex-start'
    textAlignVertical: 'top',
    // flexWrap: 'wrap',

  }
});
