import { View, Text, Button, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialIconCommunity from "react-native-vector-icons/MaterialIcons";
import CustomIcon from 'react-native-vector-icons/AntDesign'
import { colors } from "./constants/colors";
import { moderateScale, moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import { fonts } from "./constants/fonts";
import { CustomButton } from "./components/BlackButton";
import { SimpleButton } from "./components/BackButton";
import PersonalJobs from "./PersonalJobs";
import ShiftDetail from "./ShiftDetail";
const Drawer = createDrawerNavigator();


const CustomDrawerItem = ({ item, navigation }) => {
  const [expand, setExpand] = useState(false);
  // console.log({ expand })

  return (
    <>
      <DrawerItem
        label={() => (
          <>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Text
                style={styles.itemText}
              >
                {item?.title}
              </Text>
              {item?.isExpandAble ? <SimpleButton
                onPress={() => { setExpand((prev) => !prev) }}
              >
                <Ionicon name={expand ? 'arrow-up-circle-outline' : "arrow-down-circle-outline"} size={20} />
              </SimpleButton> : null}

            </View>
          </>
        )}
        icon={() => item?.icon}
        onPress={() => item?.child ? setExpand(true) : navigation.navigate(item?.link)}

      />
      {(item?.isExpandAble && expand) ?
        <>
          {item?.child?.map((e,i) => (
            <SimpleButton  key={`${e?.title}${i}`} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '75%',marginLeft:'auto',marginTop:5 }} onPress={e?.onPress}>
              <Text
                style={styles.itemChildText}
              >
                {e?.title}
              </Text>
            </SimpleButton>
          ))
          }</> : null}
    </>
  )
}

function CustomDrawerContent({ navigation }) {


  const data = [
    { icon: <FontAwesomeIcon name={"home"} color={colors.iconBlack} size={20} />, title: 'Home', link: 'Dashboard' },
    {
      icon: <FontAwesome5Icon
        name={"compress-arrows-alt"} color={colors.iconBlack} size={20} />, title: 'Base', link: 'Showpanic'
    },
    { icon: <MaterialIcon name={"rectangle-outline"} color={colors.iconBlack} size={20} />, title: 'Panic', link: 'Showpanic' },
    { icon: <MaterialIcon name={"briefcase"} color={colors.iconBlack} size={20} />, title: 'Personal Jobs', link: 'PersonalJobs' },
    {
      icon: <MaterialIconCommunity
        name={"free-breakfast"} color={colors.iconBlack} size={20} />, title: 'Break',
      link: 'ShiftDetail',
      isExpandAble: true,
      child: [
        { title: 'Short Break (10 mins)', onPress:()=>navigation.navigate('ShiftDetail') },
        { title: 'Long Break(1 hour)',onPress:()=>navigation.navigate('ShiftDetail') },
      ]
    },
    { icon: <MaterialIcon name={"image-filter-tilt-shift"} color={colors.iconBlack} size={20} />, title: 'Shift Details', link: 'ShiftDetail', isExpandAble: false },
  ]
  return (
    <SafeAreaView style={{ flex: 1, padding: 0 }} >
      
      <View
        style={{
          // top: 0,
          backgroundColor: colors.black,
          height: moderateVerticalScale(90),
          justifyContent: "center",
          paddingLeft: moderateScale(30)
        }}
      >
        <Text style={[fonts.f18R, { color: colors.white }]}>Command Center</Text>
      </View>
      <DrawerContentScrollView>
     
        {/* <DrawerItemList {...props} /> */}
        {data?.map((item, key) => {
          return (
              <CustomDrawerItem key={item?.title} item={item} navigation={navigation} />
          )
        })}



      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const LeftDrawerScreen = ({ navigation }) => {

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {

        },
        // drawerHideStatusBarOnOpen:true,
        drawerStatusBarAnimation:'fade',
        overlayColor:'transparent',
      
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="PersonalJobs"
        component={PersonalJobs}
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
      />

      <Drawer.Screen name="ShiftDetail" component={ShiftDetail} options={{ headerShown: false, drawerItemStyle: { display: "none" } }} />
    </Drawer.Navigator>
  );
};

export default LeftDrawerScreen;

const styles = ScaledSheet.create({
  itemText: {
    fontSize: moderateScale(16, 0.3),
    color: colors.drawerItemTextColor,
    fontFamily: 'PoppinsRegular',
    fontWeight: '700'
  },
  itemChildText: {
    fontSize: moderateScale(12, 0.3),
    color: colors.drawerItemTextColor,
    fontFamily: 'PoppinsRegular',
    // fontWeight: '700'
  }
})
