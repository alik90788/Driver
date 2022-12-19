import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateVerticalScale, ScaledSheet } from 'react-native-size-matters';
import { CustomButton } from '../components/BlackButton';
import ModalSkeleton from '../components/ModalSkeleton';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

export default function IncreaseWaitingTimeModal({ show, setShow, onYes, time = false, btns }) {
    return (
        <ModalSkeleton show={show} setShow={setShow}>
            <View
                style={{
                    backgroundColor: colors.white,
                    alignSelf: "center",
                    borderRadius: moderateScale(15),
                    paddingHorizontal: moderateScale(20),
                    paddingVertical: moderateVerticalScale(40),
                    width: '94%'

                }}
            >
                <Text
                    style={{
                        ...fonts.f22B,
                        textAlign: 'center',
                    }}
                >
                    Increase Waiting Time
                </Text>
                <Text
                    style={{
                        ...fonts.f12R,
                        textAlign: "center",
                        paddingHorizontal: moderateScale(30),
                    }}
                >
                    Time increase by 1:00 min maximum
                </Text>
                <View style={{ ...fonts.f25R }}>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 36,
                            textAlign: "center",
                            marginTop: 0,
                        }}
                    >
                        {time ? time : '00.00'}
                    </Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: moderateVerticalScale(10) }}>
                    {btns ? btns :
                        <>
                            <CustomButton text={'Yes'} style={{ width: '48%' }} onPress={() => onYes()} />
                            <CustomButton text={'No'} style={{ width: '48%' }} onPress={() => setpanicModal(false)} />
                        </>}

                </View>
            </View>
        </ModalSkeleton>
    )
}

const styles = ScaledSheet.create({
    head: {
        fontSize: 20,
        fontWeight: "800",
        display: "flex",
        color: "#F164b2",
        padding: 2,
    },
    topbar: {
        position: "absolute",
        top: 0,
        zIndex: 1000,
        display: "flex",
        backgroundColor: "#F164b2",
        width: "100%",
        height: 130,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
    },
    button: {
        backgroundColor: "black",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 45,
        paddingRight: 45,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        width: 150,
        marginRight: 10,
    },
    buttontext: {
        backgroundColor: "black",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        width: 150,
        marginRight: 10,
    },
    buttonyes: {
        backgroundColor: "black",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        width: 120,
        marginRight: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
    },
    buttonTextstart: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
    },
    buttonTextyes: {
        color: "#F164b2",
        fontSize: 15,
        fontWeight: "500",
    },
});