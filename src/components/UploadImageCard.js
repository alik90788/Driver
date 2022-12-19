import React, { useState, useRef } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, moderateVerticalScale, ScaledSheet } from 'react-native-size-matters';
import CustomIcon from "react-native-vector-icons/Ionicons";
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { fonts } from '../constants/fonts';
import { Button, Actionsheet, useDisclose, Toast } from "native-base";
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';
import { launchImageLibraryAsync, MediaTypeOptions} from 'expo-image-picker';
import { Video, AVPlaybackStatus } from 'expo-av';


function UploadImageCard({ item, onUpload, onCancel, label, boxStyle, isAllowImage = false, actionSheetTitle = 'Profile photo/Video' }) {
    const { isOpen, onOpen, onClose } = useDisclose();
    const video = useRef(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await launchImageLibraryAsync({
            mediaTypes: isAllowImage ? MediaTypeOptions.Images : MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.canceled) {
            if (result.assets[0]?.type == 'image' || result.assets[0]?.type == 'video') {
                onUpload(result.assets[0]);
            } else {
                Toast.show(isAllowImage ? 'Sorry! Only photo is allowed' : 'Sorry! Only photo and video is allowed')
            }
        }
        onClose()
    };
    return (
        <>
            <View style={[styles.main, boxStyle]}>
                {item == null ? (<TouchableOpacity style={styles.mainImg}
                    onPress={() => {
                        onOpen()
                    }}>
                    <CustomIcon name="ios-camera-outline" size={50} color="#E8E8E8" />
                </TouchableOpacity>)
                    :
                    (<View style={styles.uploaded}>
                        <TouchableOpacity onPress={onCancel} activeOpacity={0.9} style={styles.iconBtn}>
                            <Icon name='cancel' style={styles.cancelIcon} />
                        </TouchableOpacity>
                        {item?.type == 'image' ?
                            <Image style={styles.img} source={
                                {
                                    uri: typeof item?.uri ? item?.uri :
                                        ""
                                }}
                                resizeMode={'cover'} />
                            :
                            <Video
                                ref={video}
                                style={styles.img}
                                source={{
                                    uri: item?.uri ? item?.uri : '',
                                }}
                                useNativeControls
                                resizeMode="cover"
                                isLooping
                            />
                        }
                    </View>)
                }
            </View>
            {label && <Text style={[fonts.f14B, styles.mt15]}>{label}</Text>}
            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content style={{ backgroundColor: colors.black }}>
                    <Text style={[fonts.f16B, styles.actionHead]}>
                        {actionSheetTitle}
                    </Text>
                    <View style={{ display: "flex", flexDirection: 'row', marginTop: moderateScale(20), width: '100%' }}>
                        <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
                            <Image source={gallery} style={styles.icon} />
                            <Text style={[fonts.f14R, styles.iconText]}>Galley</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: moderateScale(30), alignItems: 'center' }}>
                            <Image source={camera} style={styles.icon} />
                            <Text style={[fonts.f14R, styles.iconText]}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}
export default UploadImageCard

const styles = ScaledSheet.create({
    main: {
        marginTop: moderateVerticalScale(35, 0.3),
        width: Dimensions.get('window').width / 1.8,
        height: Dimensions.get('window').width / 2,
        borderWidth: 1,
        backgroundColor: "transparent",
        borderRadius: moderateScale(10, 0.3),
        borderColor: colors.lightGray,

    },
    mt15: {
        marginTop: moderateVerticalScale(13, 0.3),
        textAlign: 'center'
    },
    uploaded: {
        width: '100%',
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(10, 0.3),


    },
    mainImg: {
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
    },
    cancelIcon: {
        color: 'red',
        fontSize: moderateScale(23, 0.3),
    },
    iconBtn: {
        position: 'absolute',
        right: -5,
        top: -7,
        zIndex: 2
    },
    label: {
        marginTop: moderateVerticalScale(15, 0.3),
        // fontSize:moderateVerticalScale(15,0.3),
    },
    iconText: {
        color: colors.white,

    },
    icon: {
        width: moderateScale(45),
        height: moderateScale(45),
    },
    actionHead: {
        textAlign: 'left',
        color: colors.white,
        alignSelf: 'flex-start'
    }
})

