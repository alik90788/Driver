import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LeftDrawerScreen from "./LeftDrawerScreen";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import CustomIcon from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIconCommunity from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { fonts } from "./constants/fonts";
import { colors } from "./constants/colors";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { CustomButton } from "./components/BlackButton";
import { SimpleButton } from "./components/BackButton";
import PersonalJobs from "./PersonalJobs";
import CreateProfile from "./CreateProfile";
import PreviousTrips from "./PreviousTrips";
import Settings from "./Settings";
import ChangePassword from "./ChangePassword";
import CustomStatusBar from "./components/CustomStatusBar";

const CustomItem = ({route, navigation, icon, title}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={[styles.twoItemsRow, styles.menuItemLayout]}>
      <View style={{marginRight:moderateScale(15)}}>{icon}</View>
      <Text style={{...fonts.f14R,color: "#878787",alignItems:'center',width:'100%'}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const RightDrawer = createDrawerNavigator();
function RightDrawerContent({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <ScrollView style={{ flex: 1, padding: 0 }}>
        <View>
          <SimpleButton
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.mainColor,
              borderRadius: moderateScale(25),
              width: moderateScale(25),
              height: moderateScale(25),
              marginTop: 5,
              marginLeft: 5,
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <CustomIcon name={'ios-close'} size={moderateScale(22)} color={colors.textBlack} />
          </SimpleButton>
          <View style={{ marginTop: moderateScale(30), marginLeft: moderateScale(30) }}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              }}
            />
            <Text style={{ ...fonts.f22B, lineHeight: moderateVerticalScale(30) }}>
              John Doe
            </Text>
            <Text style={{ ...fonts.f12B, color: colors.ratingOrange, }}>
              GB 000XC
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="star" color={colors.mainColor} size={15} />
              <Text style={{ ...fonts.f12B, marginBottom: moderateVerticalScale(-3) }}>{" "}(4.8)</Text>
            </View>
            <View style={{ width: '100%', height: 1, marginLeft: '-5%', backgroundColor: '#D0D0D0', marginTop: 30 }}>

            </View>
          </View>
        </View>
        <DrawerContentScrollView style={{paddingHorizontal:moderateScale(20)}}>
          <CustomItem
          route={'CreateProfile'}
          title={'Profile'}
          icon={<Feather name={"user-x"} color="black" size={20} />}
          navigation={navigation}
          />
          <CustomItem
          route={'PreviousTrips'}
          title={'Previous Trips'}
          icon={<Entypo name={"back-in-time"} color="black" size={20} />}
          navigation={navigation}

          />
          <CustomItem
          route={'ShiftDetail'}
          title={'Total Earnings'}
          icon={<FontAwesome5Icon name={"money-bill-wave"} color="black" size={16} />}
          navigation={navigation}

          />
          <CustomItem
          route={'Settings'}
          title={'Settings'}
          icon={<FontAwesomeIcon name={"gear"} color="black" size={20} />}
          navigation={navigation}

          />
          <CustomItem
          route={'Livestreaming'}
          title={'Share live streaming'}
          icon={ <FontAwesomeIcon name={"share-alt"} color="black" size={20} />}
          navigation={navigation}

          />
          <CustomItem
          route={'Login'}
          title={'Log out'}
          icon={<Feather name={"log-out"} color="black" size={20} />}
          navigation={navigation}
          />
        
        </DrawerContentScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const RightDrawerScreen = ({ navigation }) => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        // drawerHideStatusBarOnOpen:true
      }}
    // drawerHideStatusBarOnOpen={true}
    >
      <RightDrawer.Screen
        name="LeftDrawerScreen"
        component={LeftDrawerScreen}
      />
      {/* <RightDrawer.Screen
        name="LeftDrawerScreen"
        component={LeftDrawerScreen}
      /> */}
      <RightDrawer.Screen name="CreateProfile" component={CreateProfile} options={{ headerShown: false }} />
      <RightDrawer.Screen name="PreviousTrips" component={PreviousTrips} options={{ headerShown: false }} />
      <RightDrawer.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <RightDrawer.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />


    </RightDrawer.Navigator>
  );
};

export default RightDrawerScreen;

const styles = StyleSheet.create({
  twoItemsRow:{
    flexDirection:'row',
    alignItems:'center'
  },
  menuItemLayout: {
    paddingVertical:moderateScale(15),
    alignItems: 'center',
  },

});
