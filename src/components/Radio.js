import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniIcon from "react-native-vector-icons/Ionicons";
import { colors } from '../constants/colors';


function Radio({ label, state, setter,style }) {
    return (
        <TouchableOpacity
            style={[styles.box,style]}
            activeOpacity={1}
            onPress={()=>setter(label)}
        >
            {state==label ?
           <IoniIcon name="radio-button-on" color={colors.black} size={20} /> 
            :<IoniIcon name="radio-button-off-sharp" color={colors.black} size={20} />}
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Radio

const styles = ScaledSheet.create({
    box: {
        alignItems: 'center',
        flexDirection: "row",
    },
    text: {
        marginLeft: moderateScale(15),
        fontSize: moderateScale(15, 0.3),
        fontFamily: 'PoppinsSemiBold'
    }
})