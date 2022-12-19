import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements";
import BlackButton, { CustomButton } from "./components/BlackButton";
import Maps from "./components/CustomMap";
import { fonts } from "./constants/fonts";
import Profile from "../assets/Profile.png"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { colors } from "./constants/colors";
import MapHeader from "./components/MapHeader";
import IncreaseWaitingTimeModal from "./Modals/IncreaseWaitingTimeModal";
import PanicModal from "./Modals/PanicModal";
import { CancelJobModal } from "./Location";
import CustomStatusBar from "./components/CustomStatusBar";
import ShiftBreakModal from "./Modals/ShiftBreakModal";
import { useIsFocused } from "@react-navigation/native";


export function FourBtnPopup({ onClick1, onClick2, onClick3, onClick4, setprogressJobs }) {
  const isFocused=useIsFocused()
  const [isShiftBreak, setIsShiftBreak] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(()=>{
    return()=>{
      setIsEnd(false)
    }
  },[isFocused])


  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        backgroundColor: "white",
        width: "100%",
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={styles.head}
            onPress={() => {
              setIsShiftBreak(true);
            }}
          >
            In Progress
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Avatar
              rounded
              source={Profile}
              size={moderateScale(50)}
            />
            <View style={{ justifyContent: 'center', marginLeft: moderateScale(8) }}>
              <Text
                style={[fonts.f12R]}
              >
                User Name
                <Text style={[fonts.f10R, { color: colors.ratingOrange }]}>{" "}(4.5)</Text>
              </Text>
              <Text
                style={[fonts.f14R]}
              >
                Center Street
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon name="credit-card" color="#BEBEBE" size={14} />
          <Text style={[fonts.f12R, { color: colors.textLightBE, marginLeft: 5 }]}>
            Cash
          </Text>
          <View
            style={{
              marginLeft: 15,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcon name="group" color={colors.textLightBE} size={18} />
            <Text style={[fonts.f12R, { color: colors.textLightBE, marginLeft: 5, marginBottom: moderateVerticalScale(-3) }]}>
              2
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{ display: "flex", flexDirection: "row", marginTop: moderateVerticalScale(10), justifyContent: 'space-between' }}
      >
        <CustomButton
          text={isEnd ? 'End' :'End Stop Point'}
          onPress={()=>{
            if(!isEnd){
              setIsEnd(true)
              return
            }
            onClick1()
          }}
          style={{ width: '49%' }}
          textStyle={{ color: colors.white }}
        />
        <CustomButton
          text={'Live Streaming'}
          onPress={onClick2}
          style={{ width: '49%' }}
          textStyle={{ color: colors.white }}
        />

      </View>
      <View
        style={{ display: "flex", flexDirection: "row", marginTop: moderateVerticalScale(10), justifyContent: 'space-between' }}
      >

        <CustomButton
          text={'Panic'}
          onPress={onClick3}
          style={{ width: '49%' }}
          textStyle={{ color: colors.white }}
        />
        <CustomButton
          text={'Base'}
          onPress={onClick4}
          style={{ width: '49%' }}
          textStyle={{ color: colors.white }}
        />
      </View>
      <ShiftBreakModal show={isShiftBreak} setShow={setIsShiftBreak} onYes={()=>setIsShiftBreak(false)}/>
    </View>
  )
}


const Showpanic = ({ navigation, route }) => {
  const isShowPanic = route?.params?.isShowPanic
  console.log({ p: route?.params })
  const [waiting, setwaiting] = useState(false);
  const [inProgress, setinProgress] = useState(false);
  const [panicModal, setpanicModal] = useState(isShowPanic !== undefined ? isShowPanic : true);
  const [showwaitingModal, setshowwaitingModal] = useState(false);
  const [isCancel, setisCancel] = useState(false);
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.mainColor}
      />

      <MapHeader navigation={navigation} />

      {!waiting ? (
        <></>
      ) : (
        <View style={styles.topbar}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
            </TouchableOpacity>
            <View
              style={{
                paddingRight: 25,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 36 }}>00.00</Text>
            </View>
          </View>
        </View>
      )}
      <View style={{ height: "100%" }}>
        <Maps />
      </View>
      <FourBtnPopup
        navigation={navigation}
        onClick1={() => navigation.navigate('FareDetail')}
        onClick2={() => navigation.navigate('Livestreaming')}
        onClick3={() => setpanicModal(true)}
        onClick4={() => null}
      />

      <IncreaseWaitingTimeModal show={showwaitingModal} setShow={setshowwaitingModal}
        onYes={() => {
          setshowwaitingModal(false); setinProgress(true)
        }}
      />
      <PanicModal show={panicModal} setShow={setpanicModal} onYes={() => setpanicModal(false)} />
      <CancelJobModal show={isCancel} setShow={setisCancel}
        onYes={() => setisCancel(false)}
      />

    </SafeAreaView>
  )
}

export default Showpanic

const styles = StyleSheet.create({
  head: {
    ...fonts.f18B,
    color: "#F164b2",
  },
  topbar: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    display: "flex",
    backgroundColor: "#F164b2",
    width: "100%",
    height: 130,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 45,
    paddingRight: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: 150,
    marginRight: 10,
  },
  buttontext: {
    backgroundColor: "black",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: 150,
    marginRight: 10,
  },
  buttonyes: {
    backgroundColor: "black",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: 120,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonTextstart: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonTextyes: {
    color: "#F164b2",
    fontSize: 15,
    fontWeight: "500",
  },
});