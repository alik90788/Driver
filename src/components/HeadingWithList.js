import React from "react";
import { Text, View } from "react-native";
import { moderateScale, moderateVerticalScale, ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";


export default function HeadingWithList({ heading, items }) {
    return (
        <View style={styles.box}>
            <Text style={styles.heading}>{heading}</Text>
            {items?.map((item,key) => {
                return (
                    <View key={key} style={styles.listItem}>
                        {item?.icon}
                        <Text style={[fonts.f14R, { color: colors.textGray }, item?.icon ? styles.text : {}]}>{item?.text}{item?.value ? ":":'' }</Text>
                        {item?.value ?
                            <Text style={[fonts.f14R, { color: colors.mainColor, paddingLeft: moderateScale(8) }]}>{item?.value}</Text>
                            :
                            <></>
                        }
                    </View>
                )
            })}

        </View>
    )

}


const styles = ScaledSheet.create({
    heading: {
        fontSize: moderateScale(20, 0.3),
    },
    box: {
        paddingBottom: moderateVerticalScale(10)
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateVerticalScale(5),


    },
    text: {
        paddingLeft: moderateScale(10)
    }
})