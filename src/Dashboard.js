import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import redtoggle from "../assets/redtoggle.png";
import greentoggle from "../assets/greentoggle.png";
import BlackButton, { CustomButton } from "./components/BlackButton";
import GreenButton from "./components/GreenButton";
import OrangeButton from "./components/OrangeButton";
import TableHeader, { TableStickyHeader } from "./components/TableHeader";
import { colors } from "./constants/colors";
import { moderateScale, moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import { windowWidth } from "./constants/dimensions";
import Radio from "./components/Radio";
import ModalSkeleton from "./components/ModalSkeleton";
import { fonts } from "./constants/fonts";
import { Switch } from "react-native-elements";
import { SimpleButton } from "./components/BackButton";
import { useIsFocused } from "@react-navigation/native";
import ArrowsBox from "./components/Arrows";
import CustomStatusBar from "./components/CustomStatusBar";

const TableContent = ({ miles, zoneName, time1, time2, driver, color }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        display: "flex",
        flexDirection: "row",
        width: '100%',
        // justifyContent: "space-evenly",
        paddingBottom: 5,
        paddingTop: 5,
      }}
    >
      <Text style={[styles.tabletext, { width: '20%', textAlign: 'center' }]}>0.3</Text>
      <Text style={[styles.tabletext, { width: '40%' }]}>Thomas Street</Text>
      <View style={{ width: '10%', }}>
        <Text style={[styles.tabletext, { textAlign: 'center' }]}>0</Text>
      </View>
      <View style={[{ width: '10%' }]}>
        <Text style={[styles.tabletext, { textAlign: 'center' }]}>0</Text>
      </View>
      <View style={[{ width: '20%' }]}>
        <Text style={[styles.tabletext, { textAlign: 'center' }]}>0</Text>
      </View>
    </View>
  )
}

const JobOfferPopup = ({navigation}) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          zIndex: 1000,
          display: "flex",
          backgroundColor: colors.white,
          width: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: moderateVerticalScale(25),
          paddingHorizontal: moderateVerticalScale(25),
          left: 0,
          right: 0,
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
            <Text style={[fonts.f18B, styles.head]} onPress={() => setIsShow(!isShow)}>Job Offer</Text>
            <Text
              style={fonts.f14Sm}
            >
              12 Thomas Street
            </Text>
          </View>
          <View
            style={{
              width: moderateScale(59),
              height: moderateScale(59),
              borderWidth: 2,
              borderColor: "black",
              alignItems: "center",
              borderRadius: moderateScale(59),
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            <Text style={[fonts.f18R, { lineHeight: moderateScale(20), marginBottom: moderateScale(-5) }]}>20s</Text>
          </View>


        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
            <FontAwesomeIcon name="credit-card" color={colors.textLightBE} size={14} />
            <Text style={[fonts.f12B, { color: colors.textLightBE, marginLeft: 5, marginBottom: moderateScale(-2) }]}>
              Cash
            </Text>
            <View style={{ marginLeft: moderateScale(15), display: "flex", flexDirection: "row", alignItems: 'center' }}>
              <MaterialIcon name="group" color={colors.textLightBE} size={18} />
              <Text style={[fonts.f12B, { color: colors.textLightBE, marginLeft: 5, marginBottom: moderateScale(-2) }]}>
                2
              </Text>
            </View>
          </View>
          <Text style={[fonts.f12B]}>Time is accept</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: moderateVerticalScale(7) }}>
          {isShow ?
            <>
              <SimpleButton style={[styles.button, { flexDirection: 'row',marginRight:'2%' }]} onPress={()=>{
                Linking.openURL('tel:+12232322')
              }}>
                <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
              </SimpleButton>
              <GreenButton
                text={"Start"}
                onPress={() => {
                  setIsShow(false)
                  navigation?.navigate('EmergencyStartJob')
                }}
              />
            </>
            :
            <>
              <GreenButton text={"Accept"} onPress={() => navigation?.navigate('EmergencyStartJob')} />
              <OrangeButton text={"Decline"} onPress={() => setshowCall(false)} />
            </>
          }
        </View>
        {isShow ?
          <>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  color: "#F164b2",
                  fontWeight: "500",
                  fontSize: 12,
                  marginBottom: 5
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
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  color: "#F164b2",
                  fontWeight: "500",
                  fontSize: 12,
                  marginBottom: 5
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
          </>
          : <></>}
      </View>




    </>
  )
}

const Dashboard = ({ navigation }) => {
  const isFocused = useIsFocused()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showGreen, setshowGreen] = useState(false);
  const [showCall, setshowCall] = useState(false);

  const [radio, setRadio] = useState('');


  useEffect(() => {
    // StatusBar.setBackgroundColor(colors.black, false);

    return () => {
      setshowCall(false)
      setshowGreen(false)
    }
  }, [isFocused])
  return (
    <>
      <ArrowsBox navigation={navigation} next={'Location'} />

      {isFocused ? <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.black}
      /> : null}
      <ModalSkeleton show={isModalVisible} setShow={setIsModalVisible} >
        <View
          style={{
            backgroundColor: colors.white,
            alignSelf: "center",
            borderRadius: moderateScale(15),
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateVerticalScale(50),
            width: '94%'
          }}
        >

          <Radio state={radio} setter={setRadio} label={'Short Break'} style={styles.mb15} />
          <Radio state={radio} setter={setRadio} label={'Long Break'} style={styles.mb15} />
          <Radio state={radio} setter={setRadio} label={'End Shift'} style={styles.mb15} />
          <Radio state={radio} setter={setRadio} label={'Recover'} style={styles.mb15} />
          <CustomButton
            onPress={() => {
              setIsModalVisible(!isModalVisible);
              if (radio !== "") {
                setshowGreen(false);
              }
            }}
            text={'Confirm'}
          />
        </View>
      </ModalSkeleton>
      <SafeAreaView
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
        }}
      >

        {/* <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 25,
                height: 25,
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.openDrawer()}
            >
              <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => {
                setshowCall(true);
              }}
            >
              <FontAwesomeIcon name="phone" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }}  onPress={() => {navigation.navigate('Location')}}>
              <FontAwesome5Icon name="walking" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <MaterialIcon name="chat-bubble" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <MaterialIcon name="arrow-back-ios" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ width:20,height:20,borderRadius:15,backgroundColor:'white',justifyContent:'center',alignItems:'center'}} onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
             <View >
               <View style={{width:6,height:2,backgroundColor:'#ed359b',marginBottom:1}}></View>
               <View style={{width:13,height:2,backgroundColor:'#ed359b',marginBottom:1}}></View>
               <View style={{width:9,height:2,backgroundColor:'#ed359b',marginBottom:1}}></View>
             </View>
            </TouchableOpacity>
          </View>
        </View> */}
        <TableHeader navigation={navigation} setshowCall={setshowCall} />
        <ScrollView style={{ backgroundColor: "white" }}>
          <TableStickyHeader />
          {/* <View
            style={{
              backgroundColor: colors.black,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                fontFamily:'PoppinsSemiBold',
                paddingTop: 12,

              }}
            >
              Miles
            </Text>
            <Text
              style={{
                fontFamily:'PoppinsSemiBold',
                color: "white",
                fontSize: 12,
                paddingTop: 12,
              }}
            >
              Zone Name
            </Text>
            <View>
              <Feather name="clock" size={12} color="white" />
              <Text style={styles.text}>15</Text>
            </View>
            <View>
              <Feather name="clock" size={12} color="white" />
              <Text style={styles.text}>20</Text>
            </View>
            <View>
              <CustomIcon name="car" size={18} color="pink" />
              <Text style={{fontWeight: "600",color: "pink",fontSize: 10,}}>Driver</Text>
            </View>
          </View> */}
          {/* <TableContent color={colors.lightPink} />
          <TableContent color={colors.mediumPink} />
          <TableContent color={colors.lightPink} />
          <TableContent color={colors.mediumPink} /> */}

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23]?.map((item, i) => (
            <TableContent key={item} color={i % 2 == 0 ? colors.tableColLightBlue : colors.tableColBlue} />
          ))}





        </ScrollView>
        {!showGreen ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1000,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "black",
              width: "100%",
              justifyContent: "space-between",
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={[fonts.f22B, styles.head]}

            >
              Start Shift
            </Text>
            <Switch
              value={showGreen}
              onValueChange={(value) => setshowGreen(true)}
              color={'red'}
              trackColor={{ true: 'red', false: colors.white }}
              thumbColor={'red'}

            />
            {/* <TouchableOpacity onPress={() => setshowGreen(true)}>
              <Image source={redtoggle} style={{ width: 50 }} />
            </TouchableOpacity> */}
          </View>
        ) : (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1000,
              display: "flex",

              backgroundColor: "black",
              width: "100%",

              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: "center",
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                // display: "flex",
                // justifyContent: "center",
                // flexDirection: "row",
                // width: "100%",
                // justifyContent: "space-between",
              }}
            >
              <Text style={[fonts.f22B, styles.head]}>Current Location</Text>
              <Text style={styles.location}>Vessy location</Text>


              {/* <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
                <Image source={greentoggle} />
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Switch
                value={isModalVisible}
                onValueChange={(value) => setIsModalVisible(!isModalVisible)}
                color={'green'}
                trackColor={{ true: 'green', false: colors.white }}
                thumbColor={'green'}

              />
              <SimpleButton  >
                <MaterialIcon name="refresh" color="white" size={22} />
              </SimpleButton>
            </View>
          </View>
        )}
        {showCall ? (
          <JobOfferPopup navigation={navigation} />
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = ScaledSheet.create({
  head: {
    // fontSize: 20,
    // fontWeight: "800",
    // display: "flex",
    color: "#F164b2",
  },
  location: {
    ...fonts.f16B,
    color: "white",
  },
  text: {
    fontFamily: 'PoppinsBold',
    color: "#F164b2",
    fontSize: 12,
  },
  tabletext: {
    fontFamily: 'PoppinsSemiBold',
    color: colors.black,
    fontSize: moderateScale(12, 0.3),
  },
  button: {
    backgroundColor: colors.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width:'48%'
  },
  buttonText: {
    ...fonts.f16SB,
    color: colors.white,
  },

  mb15: {
    marginBottom: moderateVerticalScale(15)
  }
});
