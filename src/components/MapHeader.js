import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';
// import R from '@components/utils/R';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';


function MapHeader({ onPress, navigation,iconName = 'menu', isHideRightIcon = true,isWaiting }) {

    // StatusBar.setBackgroundColor(colors.mainColor);
    // StatusBar.setHidden(false, 'none');
    return (
        <View style={styles.main}>
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={()=>{onPress ? onPress() : navigation?.goBack()}}
                    activeOpacity={0.9}
                    style={styles.iconView}>
                    <Icon
                        name={'chevron-back'}
                        type={'Ionicons'}
                        size={25}
                        color={colors.mainColor}
                    />
                </TouchableOpacity>

                <View style={[styles.headingBox, isHideRightIcon ? { width: '40%' } : {}]}>
                    <Text
                        style={[styles.textHeadingStyles, fonts.f14B, { color: colors.white, textAlign: 'left' }]}
                        color={colors.white}
                    > Fare
                    </Text>
                    <Text
                        style={[fonts.f30Sm, { color: colors.white, textAlign: 'left' }]}
                        color={colors.white}
                    >
                        00.00
                    </Text>
                </View>

                <View style={[styles.headingBox, isHideRightIcon ? { width: '40%' } : {}]}>
                    <Text
                        style={[styles.textHeadingStyles, fonts.f14B, { color: colors.white, textAlign: 'left' },]}
                    >
                        Miles
                    </Text>
                    <Text
                        style={[fonts.f30Sm, { color: colors.white, textAlign: 'left' }]}
                    >
                        00.00
                    </Text>
                </View>

                {!isHideRightIcon ? <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.9}
                    style={styles.iconView}>
                    <MIcon
                        name={iconName}
                        size={25}
                        color={colors.mainColor}
                    />
                </TouchableOpacity> : null}

            </View>
            {isWaiting ?<Text style={styles.time}>Waiting Time</Text> :null}

        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        zIndex: 99999,
        position: 'absolute',
        top: 0,
        backgroundColor: colors.mainColor,
        width:'100%',


    },
    headerView: {
        width: '100%',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateVerticalScale(30),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    iconView: {
        padding: moderateScale(7),
        borderRadius: moderateScale(30),
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingBox: {
        borderWidth: 1,
        borderColor: colors.white,
        width: '33%',
        paddingVertical: moderateVerticalScale(3),
        paddingTop: moderateVerticalScale(6),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeadingStyles: {
        position: 'absolute',
        top: -10,
        backgroundColor: colors.mainColor,
        paddingHorizontal: moderateScale(3),
        marginBottom: moderateVerticalScale(4),
        zIndex: 2,
        color: colors.white
    },
    time: {
        position: 'absolute',
        bottom: 5,
        ...fonts.f12B,
        paddingLeft: '25%',
        color: colors.white
    },
});

export default MapHeader;
