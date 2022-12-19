import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import BackButton, { SimpleButton } from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/Feather";
import MIcon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import BlackButton, { CustomButton } from "./components/BlackButton";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { colors } from "./constants/colors";
import ModalSkeleton from "./components/ModalSkeleton";
import { baseStyles, fonts } from "./constants/fonts";
import Input from "./components/Input";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import HeaderWithBtns from "./components/HeaderWithBtns";
import ValueCard from "./components/ValueCard";
import { useIsFocused } from "@react-navigation/native";
import CustomStatusBar from "./components/CustomStatusBar";
const PersonalJobs = ({ navigation }) => {
  const isFocused = useIsFocused()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setemail] = useState();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [pick, setPick] = useState('')
  const [dest, setDest] = useState([''])
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    setDest([''])
  }, [isFocused])
  useEffect(() => {
    if(isModalVisible){
      setTimeout(() => {
        setIsModalVisible(false)
      }, 3000)  
    }
  }, [isModalVisible])

  // StatusBar.setHidden(false, "none");
  // StatusBar.setBackgroundColor(colors.white, false);
  return (
    <>
   
      <ModalSkeleton show={isModalVisible} setShow={setIsModalVisible}>
     

        <View
          style={{
            backgroundColor: "white",
            width: '94%',
            alignSelf: "center",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: moderateScale(40),
            paddingVertical: moderateScale(40),
          }}
        >
          <IonIcon
            name="ios-checkmark-circle-outline"
            size={80}
            color="#F164b2"
          />
          <Text style={styles.head} onPress={() => setIsModalVisible(false)}>Your Booking is Confirmed</Text>
        </View>
      </ModalSkeleton>
      <ScrollView style={baseStyles.page}>
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

        <View style={baseStyles.container}>
          <HeaderWithBtns
            title={'Personal Jobs'}
            onPress2={() => navigation?.openDrawer()}
          />
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // paddingTop: 20,
              width: "100%",
              backgroundColor: 'white',
              alignItems:'center',
              ...styles.mb20
            }}
          >
            <BackButton />
            <Text style={styles.head}>Personal Jobs</Text>
            <SimpleButton
              style={{
                borderRadius: moderateScale(38, 0.3),
                width: moderateScale(38, 0.3),
                height: moderateScale(38, 0.3),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:colors.white,
                border: 0,
                shadowOpacity: 0.4,
                shadowRadius: 15,
                shadowColor: colors.black,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 12,

              }}
            >
              <MIcon
                name={'menu'}
                size={25}
                color={colors.mainColor}
              />
            </SimpleButton>
          </View> */}

          <View
            style={{
              display: "flex",
              // flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,

            }}
          >


            <View
              style={[{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",

              }, styles.mb20]}
            >
              <ValueCard label={"First Name"}
                style={{ width: '48%' }}
                state={firstName}
                setter={setFirstName}
                cursorColor={colors.black}
              // icon={<CustomIcon name="user" color="#C8C8C8" size={16} />}
              // errorText={error.email}
              // isError={error.email !==""}
              />
              <ValueCard label={"Surname"}
                style={{ width: '48%' }}
                state={lastName}
                setter={setLastName}
                cursorColor={colors.black}

              // icon={<CustomIcon name="user" color="#C8C8C8" size={16} />}
              // errorText={error.email}
              // isError={error.email !==""}
              />

            </View>
            <ValueCard label={"Mobile Number"}
              style={styles.mb20}
              state={phone}
              setter={setPhone}
              keyboardType={'number-pad'}
              cursorColor={colors.black}

            // icon={<IonIcon name="envelope" color="#C8C8C8" size={24} />}
            // errorText={error.email}
            // isError={error.email !==""}
            />
            <ValueCard label={"Pickup"}
              style={styles.mb20}
              state={pick}
              setter={setPick}
              cursorColor={colors.black}
            // icon={<CustomIcon name="phone" color="#C8C8C8" size={20} />}
            // keyboardType={'number-pad'}
            // errorText={error.email}
            // isError={error.email !==""}
            />
            <Text style={{ ...fonts.f16SB, color: colors.mainColor, alignSelf: 'flex-end', ...styles.mb20 }}
              onPress={() => setDest(prev => [...prev, ''])}
            >Add Stop Point</Text>
            {dest?.map((item, i) => <ValueCard key={i} label={"Destination"}
              style={styles.mb20}
              state={item}
              setter={(e) => {
                const newItems = [...dest]
                newItems.splice(i, 1, e)
                setDest(newItems)
              }}
              cursorColor={colors.black}
            // icon={<CustomIcon name="phone" color="#C8C8C8" size={20} />}
            // keyboardType={'number-pad'}
            // errorText={error.email}
            // isError={error.email !==""}
            />)}
            <View
              style={[{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",

              }, styles.mb20]}
            >
              <View style={{
                width: '48%',
              }}>
                <Text style={{ ...fonts.f12B, color: colors.black, }}>Time</Text>
                <ValueCard label={"hh:mm:ss"}
                  state={time}
                  setter={setTime}
                  cursorColor={colors.black}
                />
              </View>
              <View style={{
                width: '48%',
              }}>
                <Text style={{ ...fonts.f12B, color: colors.black, }}>Date</Text>
                <ValueCard label={"dd-mm-yy"}
                  state={date}
                  setter={setDate}
                  cursorColor={colors.black}
                />
              </View>
            </View>
          </View>




          <CustomButton
            text={"Book Now"}
            onPress={() => {
              setIsModalVisible(true);
            }}
            style={{ marginTop: moderateVerticalScale(20) }}
          />
        </View>

      </ScrollView>
    </>
  );
};

export default PersonalJobs;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
  },
  icon: {
    transform: [{ skewY: "180deg" }],
  },
  inputfields: {
    height: 55,
    width: 150,
    backgroundColor: "white",
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },

  inputfield: {
    height: 45,
    width: 310,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
  mb20: {
    marginBottom: moderateVerticalScale(20)
  }
});
