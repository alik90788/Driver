import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import image from '../assets/sort.png'
import HeaderWithBtns from "./components/HeaderWithBtns";
import { baseStyles, fonts } from "./constants/fonts";
import { moderateScale } from "react-native-size-matters";
import { colors } from "./constants/colors";
import CustomStatusBar from "./components/CustomStatusBar";
import { useIsFocused } from "@react-navigation/native";

const Box = ({ title, tagline, amount }) => {
  return (
    <View style={styles.whitebutton}>
      <Text style={[fonts.f14B]}>{title}</Text>
      <Text style={[fonts?.f12Sm,{marginTop:-4}]}>
        {tagline}
      </Text>
      <Text style={[fonts.f22B,{marginTop:-6}]}>{amount}</Text>
    </View>
  )
}
const PaddingBox = ({ children }) => {
  return (
    <View style={{ paddingHorizontal: moderateScale(20) }}>
      {children}
    </View>
  )
}

const ShiftDetail = ({navigation}) => {
  const isFocused=useIsFocused()
  const [Earning, setEarning] = useState(true);
  const [Bides, setBides] = useState(false);
  const [Break, setBreak] = useState(false);
  // StatusBar.setHidden(false, "none");
  useEffect(()=>{
return ()=>{
  setBides(false)
  setBreak(false)
  setEarning(true)
}
  },[isFocused])
  return (
    <ScrollView style={baseStyles.page}>
       {isFocused ? <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      />: null }

      <View style={[baseStyles.container, { paddingHorizontal: 0, paddingBottom: 0 }]}>
        <PaddingBox>
          <HeaderWithBtns title={'Shift Details'}
            onPress2={() => navigation?.openDrawer()}
          />
          <View
            style={{
              // marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // marginLeft: 40,
              // marginRight: 40,
            }}
          >
            <Box
              title={'Today'}
              tagline={'Total Earnings'}
              amount={'£100'}
            />
            <View style={{ width: 2, height: 40, backgroundColor: '#707070', alignSelf: 'center' }} />
            <Box
              title={'Today'}
              tagline={'Total Rides'}
              amount={'5'}
            />

          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ ...fonts.f14B }}>Shift Start Time:</Text>
            <Text style={{ ...fonts.f14B }}>7:00AM</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ ...fonts.f14B }}>Shift End Time:</Text>
            <Text style={{ ...fonts.f14B }}>4:00PM</Text>
          </View>
        </PaddingBox>


        <View style={{ width: "100%", paddingRight: 20, paddingBottom: 10, display: "flex", flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>

          <Text style={{ fontFamily: 'PoppinsSemiBold' }}>Sort By</Text>
          <Image source={image} />
        </View>
        {Earning ? (
          <>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34%",
                  backgroundColor: "#f164b2",
                }}

              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBides(false); setEarning(true); setBreak(false) }}>
                  Earnings
                </Text>
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: "center",

                  justifyContent: "center",
                  width: "33%",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBides(true); setEarning(false); setBreak(false) }}>
                  Rides
                </Text>
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: "center",

                  width: "33%",
                  justifyContent: "center",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBreak(true); setBides(false); setEarning(false) }}>
                  Break
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  {" "}
                  Passenger Name
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  Payment Type
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  marginRight: 1,
                  width: "27%",
                  justifyContent: "center",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  Amount
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Passenger Name</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 8, fontFamily: 'PoppinsSemiBold' }}>Cash</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>$20</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Passenger Name</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 8, fontFamily: 'PoppinsSemiBold' }}>Debit Card(*****00)</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>$20</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Passenger Name</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Cash</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>$20</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Passenger Name</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Cash</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>$20</Text>
              </View>
            </View>
          </>
        ) : (
          <View></View>
        )}
        {Bides ? (
          <>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34%",
                  backgroundColor: "#E0E0E0",
                }}

              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBides(false); setEarning(true); setBreak(false) }}>
                  Earnings
                </Text>
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "33%",
                  backgroundColor: "#f164b2",
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBides(true); setEarning(false); setBreak(false) }}>
                  Rides
                </Text>
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: "center",

                  width: "33%",
                  justifyContent: "center",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBreak(true); setBides(false); setEarning(false) }}>
                  Break
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "19%",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  {" "}
                  Time
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "40%",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  Passenger Name
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  marginRight: 1,
                  width: "40%",
                  justifyContent: "center",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  Breaks
                </Text>
              </View>
            </View>

            {[1, 2, 4, 5]?.map(item => <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
              key={item}
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "19%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 8, fontFamily: 'PoppinsSemiBold' }}>12:00</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "40%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Passenger Name</Text>
              </View>

              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "40%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Street one to Street two</Text>
              </View>
            </View>)}
          </>
        ) : (
          <View></View>
        )}
        {Break ? (
          <>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34%",
                  backgroundColor: "#E0E0E0",
                }}

              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBides(false); setEarning(true); setBreak(false) }}>
                  Earnings
                </Text>
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: "center",

                  justifyContent: "center",
                  width: "33%",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBides(true); setEarning(false); setBreak(false) }}>
                  Rides
                </Text>
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: "center",

                  width: "33%",
                  justifyContent: "center",
                  backgroundColor: "#f164b2",
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: 'PoppinsBold' }} onPress={() => { setBreak(true); setBides(false); setEarning(false) }}>
                  Break
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  {" "}
                  Types of Break
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  Start Time
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  alignItems: "center",
                  marginRight: 1,
                  width: "27%",
                  justifyContent: "center",
                  backgroundColor: "#D0D0D0",
                }}
              >
                <Text style={styles.tableHead}>
                  End Time
                </Text>
              </View>
            </View>
            {[1, 2, 3, 4]?.map(item => <View
            key={item}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 1,
                  width: "45%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>Long</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 8, fontFamily: 'PoppinsSemiBold' }}>1:00PM</Text>
              </View>
              <View
                style={{
                  height: 55,
                  alignItems: "center",
                  marginRight: 1,
                  justifyContent: "center",
                  width: "27%",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: 'PoppinsSemiBold' }}>2:00PM</Text>
              </View>
            </View>)}



          </>
        ) : (
          <View></View>
        )}
      </View>
    </ScrollView>
  );
};

export default ShiftDetail;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
  whitebutton: {
    // height: 100,
    width: "40%",
    borderRadius: 35,
    backgroundColor: "white",
    zIndex: 1000,
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginVertical: 30,
    alignItems: "center",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  tableHead: {
    ...fonts.f12B
  }
});
