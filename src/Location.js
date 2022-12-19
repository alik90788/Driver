import { StyleSheet, Text, View, TouchableOpacity, Linking, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { Avatar } from "react-native-elements";
import GreenButton from "./components/GreenButton";
import MapHeader from "./components/MapHeader";
import { colors } from "./constants/colors";
import { SimpleButton } from "./components/BackButton";
import IncreaseWaitingTimeModal from "./Modals/IncreaseWaitingTimeModal";
import PanicModal from "./Modals/PanicModal";
import Maps from "./components/CustomMap";
import { fonts } from "./constants/fonts";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import Profile from "../assets/Profile.png"
import { FourBtnPopup } from "./showpanic";
import { useIsFocused } from "@react-navigation/native";
import ArrowsBox from "./components/Arrows";
import ModalSkeleton from "./components/ModalSkeleton";
import { CustomButton } from "./components/BlackButton";
import CustomStatusBar from "./components/CustomStatusBar";


export const CancelJobModal = ({ show, setShow, onYes }) => {
  return (
    <ModalSkeleton show={show} setShow={setShow} isShowCancel={false}>
      <View
        style={{
          backgroundColor: "white",
          width: '94%',
          // height: 220,
          alignSelf: "center",
          borderRadius: 10,
          paddingHorizontal: moderateScale(15),
          paddingVertical: moderateVerticalScale(30),
        }}
      >
        <Text
          style={{

            ...fonts.f20B,
            textAlign: "center",
          }}
        >
          Are you Sure you want to cancel the job?
        </Text>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: moderateVerticalScale(20) }}>
          <TouchableOpacity style={{
            ...styles.buttonyes
          }} onPress={() => { setShow(false) }}>
            <Text style={{ ...styles.buttonTextyes, color: colors.white }}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            ...styles.buttonyes, backgroundColor: 'red'
          }} onPress={onYes}>
            <Text style={{ ...styles.buttonTextyes, color: colors.white }}>Cancel Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalSkeleton>

  )
}


const Location = ({ navigation }) => {
  const isFocused = useIsFocused()
  const [progressJobs, setprogressJobs] = useState(false);
  const [pickup, setpickup] = useState(true);
  const [pickingUp, setpickingUp] = useState(false);
  const [waiting, setwaiting] = useState(false);
  const [inProgress, setinProgress] = useState(false);
  const [panicModal, setpanicModal] = useState(false);
  const [showwaitingModal, setshowwaitingModal] = useState(false);
  const [isCancel, setisCancel] = useState(false);
  const [isFourBtn, setIsFourBtn] = useState(false);

  const [isJobDetail, setIsJobDetail] = useState(false);

  // StatusBar.setHidden(true, "none");
  // console.log(navigation.params)

  useEffect(() => {
    // StatusBar.setBackgroundColor(colors.mainColor);
    // StatusBar.setHidden(false, 'none');



  }, [isFocused])

  function onCall() {
    Linking.openURL(`tel:+144434454544`)
  }


  // 1 pickup
  // 2 progressJobs
  // 3 pickingUp
  // 4 
  // 5 waiting
  // 5 inProgress


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

      <ArrowsBox navigation={navigation} next={'FareDetail'} />


      {/* <ModalSkeleton show={isCancel} setShow={setisCancel} isShowCancel={false}>
        <View
          style={{
            backgroundColor: "white",
            width: '94%',
            // height: 220,
            alignSelf: "center",
            borderRadius: 10,
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateVerticalScale(30),
          }}
        >
          <Text
            style={{

              ...fonts.f20B,
              textAlign: "center",
            }}
          >
            Are you Sure you want to cancel the job?
          </Text>
          <View style={{ display: "flex", flexDirection: "row", padding: 5, paddingLeft: 15 }}>
            <TouchableOpacity style={styles.buttonyes} onPress={() => { navigation.navigate('Livestreaming') }}>
              <Text style={styles.buttonTextyes}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonyes} onPress={() => { setisCancel(false); setshowwaitingModal(false), setpanicModal(true) }}>
              <Text style={styles.buttonTextyes}>Cancel Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalSkeleton> */}

      <CancelJobModal show={isCancel} setShow={setisCancel}
        onYes={() => setisCancel(false)}
      />


      {
        pickup ?
          <MapHeader isHideRightIcon isWaiting={isFourBtn} navigation={navigation} />
          :

          !waiting ? (
            <MapHeader isHideRightIcon isWaiting={isFourBtn} navigation={navigation} />
            // <View style={styles.topbar}>
            //   <View style={{ display: "flex", flexDirection: "row" }}>
            //     <TouchableOpacity
            //       style={{
            //         backgroundColor: "white",
            //         width: 30,
            //         height: 30,
            //         borderRadius: 20,
            //         display: "flex",
            //         alignItems: "center",
            //         justifyContent: "center",
            //         marginTop: 10,
            //       }}
            //     >
            //       <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
            //     </TouchableOpacity>
            //     <View
            //       style={{
            //         borderWidth: 1,
            //         paddingLeft: 25,
            //         paddingRight: 25,
            //         borderColor: "white",
            //         marginLeft: 10,
            //         borderRadius: 5,
            //       }}
            //     >
            //       <Text style={{ color: "white", fontSize: 36 }}>02.59</Text>
            //     </View>
            //     <View
            //       style={{
            //         borderWidth: 1,
            //         paddingLeft: 20,
            //         paddingRight: 20,
            //         borderColor: "white",
            //         marginLeft: 10,
            //         borderRadius: 5,
            //       }}
            //     >
            //       <Text style={{ color: "white", fontSize: 36 }}>00.00</Text>
            //     </View>
            //   </View>
            // </View>
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
                  <Text style={{ color: "white", fontSize: 36 }}>02.59</Text>
                </View>
              </View>
            </View>
          )}
      {/* <View style={{ height: "100%" }}> */}
      {/* <Image source={map} /> */}
      {/* </View> */}
      <Maps />

      {progressJobs ? (
        <>
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
              // height: '23%',
              paddingTop: '5%',
              paddingBottom: '5%',
              paddingLeft: '5%',
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
              <View style={{ width: "80%" }}>
                <Text
                  style={styles.head}
                  onPress={() => {
                    setprogressJobs(true);
                  }}
                >
                  Job In Progress
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    display: "flex",
                    color: "black",
                    padding: 3,
                  }}
                >
                  12 Thomas Streetff
                </Text>
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
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
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
                  <MaterialIcon name="group" color="#BEBEBE" size={14} />
                  <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                    2
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <SimpleButton style={[styles.button, { flexDirection: 'row' }]} onPress={onCall}>
                <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
              </SimpleButton>
              <GreenButton
                text={"Start"}
                onPress={() => {
                  setpickup(!pickup);
                }}
              />
            </View>
          </View>
          {pickup ? (

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
                // height: 430,
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
                      setprogressJobs(true);
                    }}
                  >
                    Job In Progress
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
                  >
                    12 Thomas Street
                  </Text>
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
                  <FontAwesomeIcon
                    name="credit-card"
                    color="#BEBEBE"
                    size={14}
                  />
                  <Text
                    style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}
                  >
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
                    <MaterialIcon name="group" color="#BEBEBE" size={14} />
                    <Text
                      style={{
                        color: "#BEBEBE",
                        fontSize: 14,
                        marginLeft: 5,
                      }}
                    >
                      2
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <SimpleButton style={[styles.button, { flexDirection: 'row' }]} onPress={onCall}>
                  <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
                </SimpleButton>
                <GreenButton
                  text={"Start"}
                  onPress={() => {
                    setpickup(false);
                    setprogressJobs(!progressJobs);
                    setpickingUp(!pickingUp);
                  }}
                />
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <View>
                    <Text
                      style={{
                        color: "#F164b2",
                        fontWeight: "500",
                        fontSize: 14,
                      }}
                    >
                      Pick Up
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      12 Thomas Street
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      Heswell
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      BOURNEMOUTH
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      BHI 1AA
                    </Text>
                </View>
                <View>
                      <TouchableOpacity onPress={()=>Linking.openURL("https://what3words.com/")}>
                        <Text
                          style={{ color: "black", fontWeight: "500", fontSize: 14, textDecorationLine:"underline", color:"blue" }}
                        >
                          handlebar.reunion.boost
                        </Text>
                      </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: 10, flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
                <View>
                <Text
                  style={{
                    color: "#F164b2",
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Destination
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  02 Center Street
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  Heswell
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  BOURNEMOUTH
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  CHI 1AA
                </Text>
              </View>
              <View>
                  <TouchableOpacity onPress={()=>Linking.openURL("https://what3words.com/")}>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14, textDecorationLine:"underline", color:"blue" }}
                    >
                      handlebar.reunion.boost
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  color: "#BEBEBE",
                  width: 130,
                  marginTop: 10,
                  paddingLeft: -10,
                }}
              >
                Special Note for driver will display here
              </Text>
              
            </View>

          ) : (
            <View></View>
          )}

        </>
      ) : (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            // height: '17%',
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
            <View style={{ width: "80%" }}>
              <Text
                style={styles.head}
                onPress={() => {
                  setprogressJobs(true);
                }}
              >
                Job Offer
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  display: "flex",
                  color: "black",
                  padding: 3,
                }}
              >
                12 Thomas Street
              </Text>
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
              <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
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
                <MaterialIcon name="group" color="#BEBEBE" size={14} />
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                  2
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
      {pickingUp ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            paddingVertical: 30,
            // paddingBottom: 10,
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
                  setprogressJobs(true);
                }}
              >
                Pick Up
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  display: "flex",
                  color: "black",
                  padding: 3,
                }}
              >
                12 Thomas Street
              </Text>
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
              <Text style={{ ...fonts.f12R, color: colors.textLightBE, marginLeft: 5 }}>
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
                <MaterialIcon name="group" color="#BEBEBE" size={18} />
                <Text style={{ ...fonts.f12R, color: colors.textLightBE, marginBottom: moderateVerticalScale(-3), marginLeft: 5 }}>
                  2
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={{ padding: 10 }}>
            <Text style={{ ...fonts.f10B, color: colors.mainColor }}>
              Pickup
            </Text>
            <Text style={{ ...fonts.f14R }}>
              12 Thomas Street Haswall MOURNEMOUTH BHI 1AA
            </Text>
          </View> */}
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <SimpleButton style={[styles.button, { flexDirection: 'row' }]} onPress={onCall}>
              <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
            </SimpleButton>
            <GreenButton
              text={"Arrived"}
              onPress={() => {
                setpickup(false);
                setprogressJobs(false);
                setpickingUp(!pickingUp);

                setwaiting(true);
              }}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {waiting ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            // height: '30%',
            paddingTop: 30,
            paddingBottom: 20,
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
                  setshowwaitingModal(true);
                }}
              >
                Waiting
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar
                  rounded
                  source={Profile}
                  size={50}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
                    onPress={() => {
                      setpickingUp(true)
                      setIsJobDetail(!isJobDetail)
                    }}
                  >
                    User Name
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
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
              <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
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
                <MaterialIcon name="group" color="#BEBEBE" size={14} />
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                  2
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}
          >
            <SimpleButton style={[styles.button, { flexDirection: 'row' }]} onPress={onCall}>
              <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
            </SimpleButton>
            <GreenButton
              text={"Start"}
              onPress={() => {
                setpickup(false);
                setprogressJobs(false);
                setpickingUp(false);
                setwaiting(false);
                setinProgress(false);
                setIsFourBtn(true)
              }}
            />
          </View>
          
          {isJobDetail ? <>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <View>
                    <Text
                      style={{
                        color: "#F164b2",
                        fontWeight: "500",
                        fontSize: 14,
                      }}
                    >
                      Pick Up
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      12 Thomas Street
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      Heswell
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      BOURNEMOUTH
                    </Text>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                      BHI 1AA
                    </Text>
                </View>
                <View>
                      <TouchableOpacity onPress={()=>Linking.openURL("https://what3words.com/")}>
                        <Text
                          style={{ color: "black", fontWeight: "500", fontSize: 14, textDecorationLine:"underline", color:"blue" }}
                        >
                          handlebar.reunion.boost
                        </Text>
                      </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: 10, flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
                <View>
                <Text
                  style={{
                    color: "#F164b2",
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Destination
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  02 Center Street
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  Heswell
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  BOURNEMOUTH
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                >
                  CHI 1AA
                </Text>
              </View>
              <View>
                  <TouchableOpacity onPress={()=>Linking.openURL("https://what3words.com/")}>
                    <Text
                      style={{ color: "black", fontWeight: "500", fontSize: 14, textDecorationLine:"underline", color:"blue" }}
                    >
                      handlebar.reunion.boost
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  color: "#BEBEBE",
                  width: 130,
                  marginTop: 10,
                  paddingLeft: -10,
                }}
              >
                Special Note for driver will display here
              </Text>
          </>:<></>}
          
        </View>
      ) : (
        <View></View>
      )}
      
      {inProgress ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            // height: '37%',
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
                  setprogressJobs(true);
                }}
              >
                Waiting
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar
                  rounded
                  source={Profile}
                  size={50}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
                  >
                    User Name
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
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
              <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
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
                <MaterialIcon name="group" color="#BEBEBE" size={14} />
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                  2
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <TouchableOpacity style={styles.buttontext} onPress={() => null}>
              <Text style={styles.buttonTextstart} >End Stop Point</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttontext}
              onPress={() => {
                navigation.navigate('Livestreaming')
              }}
            >
              <Text style={styles.buttonTextstart}>Live Streaming</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <TouchableOpacity style={styles.buttontext} onPress={() => {
              setpanicModal(true);
            }}>
              <Text style={styles.buttonTextstart}>Panic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttontext}>
              <Text style={styles.buttonTextstart}>Base</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {isFourBtn ? <FourBtnPopup
        onClick1={() => setisCancel(true)}
        onClick2={() => navigation.navigate('Livestreaming')}
        onClick3={() => setpanicModal(true)}
        onClick4={() => null}
        setprogressJobs={setinProgress}
      /> : null}
      <IncreaseWaitingTimeModal show={showwaitingModal} setShow={setshowwaitingModal}
        onYes={() => {
          setshowwaitingModal(false);
          setisCancel(true)
        }}
        time={'01:00'}
        btns={
          <>
            <CustomButton text={'Increase Time'} textStyle={{ color: colors.white }} style={{ width: '48%' }} onPress={() => setshowwaitingModal(false)} />
            <CustomButton text={'Cancel Job'} style={{ width: '48%', backgroundColor: 'red' }} onPress={() => {
              setshowwaitingModal(false)
              setisCancel(true)
            }}
              textStyle={{ color: colors.white }}
            />
          </>
        }
      />
      <PanicModal show={panicModal} setShow={setpanicModal} onYes={() => setpanicModal(false)} />
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    color: "#F164b2",
    padding: 2,
  },
  topbar: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    display: "flex",
    backgroundColor: "#F164b2",
    width: "100%",
    // height: 130,
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
    // paddingLeft: 45,
    // paddingRight: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: '48%',
    marginRight: 10,
    color: colors.white
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
    borderRadius: 5,
    // width: 120,
    marginRight: 10,
    width: '48%'
  },
  buttonText: {
    ...fonts.f16SB,
    color: "white",

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
