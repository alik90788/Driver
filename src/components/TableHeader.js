import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { SimpleButton } from './BackButton';
import { colors } from '../constants/colors';



export default function TableHeader({ setshowCall, navigation }) {
    return (
        <View
            style={styles.header}
        >

            <SimpleButton style={styles.dotsBtn} onPress={() => navigation.openDrawer()}>
                <CustomIcon name="ellipsis-vertical" color={colors.mainColor} size={moderateScale(20)} />
            </SimpleButton>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <SimpleButton
                    style={{ paddingRight: moderateScale(20) }}
                    onPress={() => {
                        setshowCall(true);
                    }}
                    activeOpacity={0.8}

                >
                    <FontAwesomeIcon name="phone" color="white" size={20} />
                </SimpleButton>
                <SimpleButton style={{ paddingRight: moderateScale(20) }} onPress={() => {
                    navigation?.navigate('EmergencyStartJob')
                }} activeOpacity={0.8}>
                    <FontAwesome5Icon name="walking" color="white" size={20} />
                </SimpleButton>
                <SimpleButton style={{ paddingRight: moderateScale(20) }} activeOpacity={0.8}>
                    <MaterialIcon name="chat-bubble" color="white" size={20} />
                </SimpleButton>
                <SimpleButton style={{ paddingRight: moderateScale(20) }} activeOpacity={0.8}>
                    <MaterialIcon name="arrow-back-ios" color="white" size={20} />
                </SimpleButton>
                <SimpleButton
                    activeOpacity={0.8}
                    style={styles.dotsBtn} onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
                    <View >
                        <View style={{ width: 6, height: 2, backgroundColor: '#ed359b', marginBottom: 1 }}></View>
                        <View style={{ width: 13, height: 2, backgroundColor: '#ed359b', marginBottom: 1 }}></View>
                        <View style={{ width: 9, height: 2, backgroundColor: '#ed359b', marginBottom: 1 }}></View>
                    </View>
                </SimpleButton>
            </View>
        </View>
    )
}
export function TableStickyHeader({ navigation }) {
    return (
        <View
            style={staticStyles.header}
        >
            <Text
                style={[staticStyles.heading12, { width: '20%', textAlign: 'center' }]}
            >
                Miles
            </Text>
            <Text
                style={[staticStyles.heading12, { width: '40%' }]}
            >
                Zone Name
            </Text>
            <View style={{ alignItems: 'center', width: '10%' }}>
                <Feather name="clock" size={12} color="white" />
                <Text style={staticStyles.text}>15</Text>
            </View>
            <View style={{ alignItems: 'center', width: '10%' }}>
                <Feather name="clock" size={12} color="white" />
                <Text style={staticStyles.text}>30</Text>
            </View>
            <View style={{ alignItems: 'center', width: '20%' }}>
                <CustomIcon name="car" size={25} color={colors.lightPink} />
                <Text style={staticStyles.smlText}>Driver</Text>
            </View>
        </View>
    )
}


const styles = ScaledSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        padding: moderateScale(15),
        justifyContent: "space-between",

    },
    dotsBtn: {
        backgroundColor: colors.white,
        width: moderateScale(31),
        height: moderateScale(31),
        borderRadius: moderateScale(31),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

})
const staticStyles = ScaledSheet.create({
    header: {
        backgroundColor: colors.black,
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-evenly",
        paddingTop: moderateScale(10),
        // backgroundColor:'red',
        alignItems: 'flex-end',
        width: '100%'
    },
    heading12: {
        fontSize: moderateScale(14, 0.3),
        color: colors.white,
        fontFamily: 'PoppinsBold',
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: moderateScale(12, 0.3),
        color: colors.mainColor,
        fontFamily: 'PoppinsBold'
    },
    smlText: {
        color: colors.lightPink,
        fontSize: moderateScale(9, 0.3),
        fontFamily: 'PoppinsBold',
        marginTop:-5


    }


})