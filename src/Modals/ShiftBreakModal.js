import React from 'react'
import ModalSkeleton from '../components/ModalSkeleton'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { CustomButton } from '../components/BlackButton'
import { Image, Text, View } from 'react-native'

export default function ShiftBreakModal({ show, setShow, onYes }) {
    return (
        <ModalSkeleton show={show} setShow={setShow} isShowCancel={true}>
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
                        ...fonts.f25Sm,
                        textAlign: "center",
                        marginTop: moderateVerticalScale(15),
                    }}
                >Do you want a
                    shift break
                </Text>
                <Text
                    style={{
                        ...fonts.f14R,
                        textAlign: "center",
                        marginBottom: moderateVerticalScale(10),

                    }}
                >
                    Kindly confirm by clicking
                </Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', }}>
                    <CustomButton text={'Yes'} style={{ width: '48%' }} onPress={() => onYes()} />
                    <CustomButton text={'No'} style={{ width: '48%' }} onPress={() => setShow(false)} />

                </View>
            </View>
        </ModalSkeleton>
    )
}