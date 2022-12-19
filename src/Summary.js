import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Feather";
import EmailIcon from "react-native-vector-icons/FontAwesome";
import BlackButton, { CustomButton } from './components/BlackButton';
import { baseStyles, fonts } from "./constants/fonts";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import HeadingWithList from "./components/HeadingWithList";
import { colors } from "./constants/colors";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";

const Summary = ({ navigation }) => {
  return (
    <ScrollView style={baseStyles.page}>
      <ArrowsBox navigation={navigation} next={'AuthCode'} />
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <SafeAreaView style={baseStyles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

          }}
        >
          <BackButton />
          <Text style={{...fonts.pageTitle,textAlign:'center',marginLeft:0,width:'85%'}}>Summary</Text>
        </View>
        <View style={{ marginVertical: moderateVerticalScale(35) }}>
          <HeadingWithList
            heading={'Info'}
            items={[
              { icon: <CustomIcon name="user-plus" color={colors.textGray} style={styles.icon} />, text: 'First & Last Name' },
              { icon: <EmailIcon name="envelope-o" color="#BEBEBE" style={styles.icon} />, text: 'Email Address' },
              { icon: <EmailIcon name="phone" color="#BEBEBE" style={styles.icon} />, text: 'Phone Number' }
            ]}
          />
          <HeadingWithList
            heading={'Documents'}
            items={[
              { text: 'Photo.jpg' },
              { text: 'Driving License.jpg' },
              { text: 'Taxi License' },
              { text: 'PVG.jpg' },
            ]}
          />
          <HeadingWithList
            heading={'Car Details'}
            items={[
              { text: 'Make', value: 'Honda' },
              { text: 'Modal', value: 'Civic' },
              { text: 'Insurance Number', value: 'JU 0000 000 0000' },
              { text: 'Black', value: 'Black' },
            ]}
          />
          <HeadingWithList
            heading={'Bank Details'}
            items={[
              { text: 'First & Last Name' },
              { text: 'Bank Name' },
              { text: 'Bank Account Number' },
              { text: 'Sort Code' },
            ]}
          />



        </View>
        <CustomButton
          text={'Next'}
          onPress={() => navigation.navigate('AuthCode')}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 20,
  },
  icon: {
    width: moderateScale(15, 0.4),
    height: moderateScale(15, 0.4),
  },
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
  },
  text: {
    fontSize: 14,
    color: "#BEBEBE",

  },
  text1: {
    fontSize: 14,
    color: "#BEBEBE",
    marginLeft: 10
  },
  cardetails: {
    fontSize: 14,
    color: "#F164b2",
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 67,
    paddingRight: 67,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 40,
    width: '88%'
  },
  buttonText: {
    color: '#F164b2',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'PoppinsRegular'
  }
});
