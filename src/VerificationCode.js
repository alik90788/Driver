import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "./components/BackButton";
import BlackButton, { CustomButton } from "./components/BlackButton";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { colors } from './constants/colors';
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native';
import { fonts } from './constants/fonts';



const VerificationCode = ({ navigation }) => {
const CELL_COUNT=4
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ display: "flex", flexDirection: "row",alignItems:'center',
      }}
      >
        <BackButton />
        <Text style={styles.title}>Verification Code</Text>
      </View>
      <Text style={styles.subtext}>
        Please enter the code provided by the Company you will be working with.
      </Text>
      {/* <Text style={styles.subtitle}>Please Enter the Code</Text> */}


      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeInput}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

        <CustomButton
          text={"Done"}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        />
    </SafeAreaView>
  );
};

export default VerificationCode;

const styles = ScaledSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    flex:1,
    backgroundColor:colors.white,
    padding: moderateScale(35, 0.3),
  },
  title: {
    fontSize: moderateScale(24,0.3),
    height:'100%',
    color: colors.black,
    marginLeft: moderateScale(15),
    fontFamily: "PoppinsBold",
  },
  subtitle: {
    fontSize: moderateScale(16,0.3),
    fontFamily: "PoppinsBold",
    color: colors.black,
    marginLeft: moderateScale(15),
    textAlign: "center",

  },
  subtext: {
    maxWidth:'90%',
    marginHorizontal:'5%',
    textAlign: "center",
    marginBottom: moderateVerticalScale(18,0.3),
    marginTop:moderateVerticalScale(10),
    ...fonts.f12R,
    color: colors.mainColor,



    
  },
  codeInput:{
    marginTop:moderateVerticalScale(20),
    marginBottom:moderateVerticalScale(35),
  },
  inputfield: {
    height: 45,
    margin: 7,
    width: 65,
    height: 65,
    backgroundColor: "white",
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  cell: {
    // width: moderateScale(60,0.3),
    // height: moderateScale(60,0.3),
    width: Dimensions.get('screen').width/5.8,
    height: Dimensions.get('screen').width/5.8,
    fontSize: moderateScale(25,0.3),
    lineHeight: moderateScale(25,0.3),
    textAlign: 'center',
    textAlignVertical:'center',
    backgroundColor:colors.white,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    borderRadius: moderateScale(10,0.3),


  },
  focusCell: {
    borderColor: colors.mainColor,
    borderWidth:1
  },
});
