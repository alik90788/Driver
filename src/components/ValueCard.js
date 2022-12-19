import React, { useRef, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { moderateScale, moderateVerticalScale, ScaledSheet } from 'react-native-size-matters'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'
import IonIcon from 'react-native-vector-icons/MaterialIcons'
import { SimpleButton } from './BackButton'

export default function ValueCard({ value, style, label, setter = () => null, disabled = false, inputStyle, focusOnEdit, focusOnEditIcon, ...props }) {
    const [isFocus, setIsFocus] = useState(false)
    const [focus, setfocus] = useState(false)
    const ref = useRef(null)
    return (
        <TouchableOpacity style={[styles.card, style, isFocus && styles.focusBox]} activeOpacity={1}
            onPress={() => {
                if (ref?.current !== undefined) ref?.current?.focus()
            }
            }
        >


            <Text style={[fonts.f12R, styles.label]}>{label}</Text>

            <TextInput
                ref={!disabled ? ref : null}
                onFocus={() => {
                    if (!disabled) {
                        setIsFocus(true)
                    }
                }}
                onBlur={() => {
                    if (!disabled) {
                        setIsFocus(false)
                    }
                }}

                cursorColor={colors.mainColor}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={[fonts.f14Sm, styles.input, focusOnEdit && { paddingRight: moderateScale(50) }, inputStyle]}
                onChangeText={(e) => setter(e)}
                value={value}
                editable={
                    disabled ||
                        focusOnEdit ? focus : true
                }
                {...props}
            />
            {focusOnEdit ?
                focusOnEditIcon ?
                    focusOnEditIcon
                    :
                    <SimpleButton style={styles.editBtn} onPress={() => {
                        setfocus(true)
                        ref?.current?.focus()
                        setIsFocus(true)
                    }}>
                        <IonIcon name="edit" color="#787878" size={18} style={styles.edit}

                        />
                    </SimpleButton> : <></>}
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    card: {
        borderRadius: moderateScale(10),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 4,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.white
    },
    input: {
        paddingTop: moderateVerticalScale(2),
        paddingBottom: moderateVerticalScale(12),
        paddingHorizontal: moderateScale(13, 0.3),
        // paddingTop: moderateVerticalScale(28),
        width: '100%',
        fontFamily: 'PoppinsSemiBold',
        textDecorationLine: 'none',
        fontSize: moderateScale(13, 0.3),
        borderWidth: 0,
        color: colors.mainColor
    },
    focusBox: {
        borderColor: colors.mainColor,
        borderWidth: 1
    },
    label: {
        color: colors.textGray,
        paddingTop: moderateVerticalScale(7),
        paddingHorizontal: moderateScale(13, 0.3),


    },
    editBtn: {
        position: 'absolute',
        top: moderateVerticalScale(30),
        right: moderateScale(20),
        zIndex: 9
    },
    edit: {
    }


})