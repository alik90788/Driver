import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BackButton, { SimpleButton } from "./components/BackButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { baseStyles, fonts } from "./constants/fonts";
import { colors } from "./constants/colors";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";

const CustomRadio = ({ label, checked, setter, state }) => {
    return (
        <SimpleButton onPress={() => setter(checked)} style={{
            display: 'flex', flexDirection: 'row', marginBottom: 20,
            alignItems: 'center'
        }}>
            <MaterialCommunityIcons name={checked == state ? "radiobox-marked" : 'radiobox-blank'} color={colors.mainColor} size={22} />
            {label}
        </SimpleButton>
    )
}

const ChooseTheme = () => {
    const [isNight, setIsNight] = useState(false)
    const [isFont, setIsFont] = useState('Normal')
    return (
        <ScrollView style={baseStyles.page}>
            <View style={baseStyles.container}>
                <View style={{ marginBottom: 30 }}>
                    <BackButton />
                </View>
                <View style={styles.box}>
                    <Text style={styles.head}>
                        Choose Theme
                    </Text>
                    <CustomRadio setter={() => setIsNight(true)}
                        state={isNight}
                        label={<Text style={{ ...styles.label }}>Night</Text>} checked={true} />
                    <CustomRadio setter={() => setIsNight(false)}
                        state={isNight}
                        label={<Text style={{ ...styles.label }}>Morning</Text>} checked={false} />

                </View>
                <View style={styles.box}>
                    <Text style={styles.head}>
                        Choose Font Size
                    </Text>
                    <CustomRadio setter={() => setIsFont('Normal')}
                        state={isFont}
                        label={<Text style={{ ...styles.label }}>Normal</Text>} checked={'Normal'} />
                    <CustomRadio setter={() => setIsFont('Small')}
                        state={isFont}
                        label={<Text style={{ ...styles.label }}>Small</Text>} checked={'Small'} />
                    <CustomRadio setter={() => setIsFont('Large')}
                        state={isFont}
                        label={<Text style={{ ...styles.label }}>Large</Text>} checked={'Large'} />

                </View>
               
            </View>
        </ScrollView>
    );
};

export default ChooseTheme;

const styles = StyleSheet.create({
    head: {
        ...fonts.f22B,
        marginBottom: moderateVerticalScale(15),
        paddingTop: moderateVerticalScale(10),
    },
    box: {
        width: '100%',
        borderRadius: 30,
        paddingVertical: moderateVerticalScale(15),
        paddingHorizontal: moderateScale(30),
        backgroundColor: colors.white, marginTop: 20,
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
    label: {
        ...fonts.f16SB,
        color: colors.textLightBE,
        marginLeft: 15

    }
});
