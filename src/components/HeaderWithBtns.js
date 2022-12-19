import React from "react";
import { Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import BackButton, { SimpleButton } from "./BackButton";
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { baseStyles, fonts } from "../constants/fonts";
import { colors } from "../constants/colors";


export default function HeaderWithBtns({ onPress1, onPress2, title }) {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // paddingTop: 20,
                width: "100%",
                backgroundColor: 'white',
                alignItems: 'center',
                // ...styles.mb20
            }}
        >
            <BackButton />
            <Text style={fonts.pageTitle}>{title}</Text>
            <SimpleButton
                onPress={onPress2}
                style={{
                    borderRadius: moderateScale(38, 0.3),
                    // paddingVertical: moderateScale(10, 0.3),
                    paddingHorizontal: moderateScale(12, 0.3),
                    height: moderateScale(38, 0.3),
                    width: moderateScale(38, 0.3),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.white,
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

                <View
                    style={{
                        width: 7,
                        height: 2,
                        backgroundColor: colors.mainColor,
                        marginBottom: 3,
                        alignSelf:'flex-start',
                    }}
                ></View>
                <View
                    style={{
                        width: 16,
                        height: 2,
                        backgroundColor: colors.mainColor,
                        marginBottom: 3,
                        alignSelf:'flex-start',

                    }}
                ></View>
                <View
                    style={{
                        width: 10,
                        height: 2,
                        backgroundColor: colors.mainColor,
                        marginBottom: 3,
                        alignSelf:'flex-start',

                    }}
                ></View>
                {/* <MIcon
                    name={'menu'}
                    size={25}
                    color={colors.mainColor}
                /> */}
            </SimpleButton>
        </View>

    )
}