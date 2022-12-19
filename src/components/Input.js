import { Icon } from 'native-base'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { TextInput, View } from 'react-native'
import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { colors } from '../constants/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Input = ({ setter, state, containerStyle, icon, placeholderTextColor = "black", isError = false, errorText = 'Email not found',isPassword, ...props }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.inputfield, containerStyle, isError && styles.errorBox, isFocused && styles.errorBox]}>
            {icon ? <View style={styles.icon}>
                {icon}
            </View> :
                <></>
            }
            <TextInput value={state} style={[styles.input, !icon ? { paddingLeft: moderateScale(14, 0.3) } : {},isPassword &&{paddingRight:moderateScale(45,0.3)}]} onChangeText={(e) => setter(e)} placeholderTextColor={placeholderTextColor}
               
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                cursorColor={colors.mainColor}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                secureTextEntry={!showPassword}

                {...props} />
                {isPassword ?
                <Icon
                name={showPassword ? 'eye' : 'eye-off-sharp'}
                as={Ionicons}
                size={moderateScale(22, 0.6)}
                style={styles.password}
                onPress={()=>setShowPassword(!showPassword)}
              /> :null}
            {isError && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    )
}
const InputWithLabel = ({ setter, state, containerStyle, icon, placeholderTextColor = "black", isError = false, errorText = 'Email not found', label, placeholder, ...props }) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <View style={[styles.inputfield, containerStyle, isError && styles.errorBox, isFocused && styles.errorBox]}>
            {icon ? <View style={styles.icon}>
                {icon}
            </View> :
                <></>
            }
            <TextInput value={state} style={[styles.input, !icon ? { paddingLeft: moderateScale(14, 0.3) } : {}]} onChangeText={(e) => setter(e)} placeholderTextColor={placeholderTextColor}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                cursorColor={colors.mainColor}
                placeholder={state == '' ? label : ""}
                {...props} />
            {isError && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    )
}

export default Input
export { InputWithLabel }

const styles = ScaledSheet.create({
    icon: {
        position: 'absolute',
        top: moderateVerticalScale(24, 0.3),
        left: moderateScale(13, 0.3)
    },
    errorBox: {
        borderColor: colors.mainColor,
        borderWidth: 1
    },
    errorText: {
        fontSize: moderateScale(11, 0.3),
        position: 'absolute',
        bottom: moderateVerticalScale(5, 0.3),
        right: moderateScale(13, 0.3),
        color: colors.mainColor

    },
    inputfield: {
        position: 'relative',
        width: "100%",
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: moderateScale(10, 0.3),
        shadowColor: colors.black,
        shadowOffset: {
            x: 4,
            y: 5,
        },
        // shadowOpacity: 0.45,
        // shadowRadius: 4.84,
        shadowOpacity: 0.45,
        shadowRadius: 3.84,

        elevation: 4,
    },
    input: {
        paddingBottom: moderateScale(15, 0.3),
        paddingRight: moderateScale(13, 0.3),
        paddingTop: moderateVerticalScale(20, 0.3),
        width: '100%',
        paddingLeft: moderateScale(45, 0.3),
        fontFamily: 'PoppinsBold',
        fontWeight: "900",
        textDecorationLine: 'none',
        fontSize: moderateScale(14, 0.3),
        borderWidth: 0
    },
    password:{
        position:'absolute',
        top: moderateVerticalScale(24, 0.3),
        right: moderateScale(13, 0.3),
        color:'#C8C8C8'

    }

})