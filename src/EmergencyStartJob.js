import React, { useState } from 'react'
import { Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ArrowsBox from './components/Arrows'
import Maps from './components/CustomMap'
import CustomStatusBar from './components/CustomStatusBar'
import { colors } from './constants/colors'
import { baseStyles, fonts } from './constants/fonts'
import Profile from "../assets/Profile.png"
import { Avatar } from "react-native-elements";
import { SimpleButton } from './components/BackButton'
import { Icon, Link } from 'native-base'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import GreenButton from './components/GreenButton'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import OrangeButton from './components/OrangeButton'
import { CustomButton } from './components/BlackButton'
import IncreaseWaitingTimeModal from './Modals/IncreaseWaitingTimeModal'
import MapHeader from './components/MapHeader'
import CustomIcon from "react-native-vector-icons/Ionicons";
import { CancelJobModal } from './Modals/CancelJobModal'

const onCall = () => {
    Linking.openURL('tel:+12233')
}

const Overlay = ({ children }) => (
    <View
        style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: colors.white,
            width: "100%",
            paddingTop: '5%',
            paddingBottom: '5%',
            paddingLeft: '5%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 5,
            shadowColor: colors.black,
            shadowOpacity: 0.9,
            shadowRadius: 4.5,
            shadowOffset: {
                width: 2,
                height: 2
            }
        }}
    >
        {children}
    </View>
)
const PickingUp = ({ onDetail, navigation }) => {
    const [details, setDetails] = useState(false)
    return (
        <Overlay>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ width: "80%" }}>
                    <Text
                        style={[fonts.f18B, styles.head]}

                    >
                        {'Job in Progress'}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "700",
                            display: "flex",
                            color: "black",
                            padding: 3,
                        }}
                    >
                        12 Thomas Streetff
                    </Text>
                </View>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 5,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <FontAwesomeIcon name="credit-card" color="#BEBEBE" size={14} />
                    <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                        Cash
                    </Text>
                    <View
                        style={{
                            marginLeft: 15,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <MaterialIcon name="group" color="#BEBEBE" size={14} />
                        <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                            2
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                <SimpleButton style={[styles.button, { flexDirection: 'row' }]} onPress={onCall}>
                    <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
                </SimpleButton>
                <GreenButton
                    text={!details ? 'Arrived' : "Start"}
                    onPress={() => {
                        //    !details ? :navigation?.navigate('Showpanic',{isShowPanic:false})
                        onDetail()
                    }}
                />
            </View>
            {!details ? <SimpleButton onPress={() => {
                onDetail()
                // setDetails(!details)
            }}><Text style={{ ...fonts.f12B, textAlign: 'center', marginTop: 5 }}>See details</Text></SimpleButton> : null}
        </Overlay>
    )
}

const Waiting = ({ navigation }) => {
    const [isShow, setIsShow] = useState(false)
    const [increaseModal, setIncreaseModal] = useState(false)

    return (
        <>
            <Overlay
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ width: "80%" }}>
                        <Text style={[fonts.f18B, styles.head]}
                            onPress={() => setIncreaseModal(!increaseModal)}
                        >Waiting</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
                            <Avatar
                                rounded
                                source={Profile}
                                size={50}
                            />
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "700",
                                            display: "flex",
                                            color: "black",
                                            padding: 3,
                                        }}
                                    >
                                        User Name
                                    </Text>
                                    <Text style={[fonts.f10R, { color: colors.ratingOrange }]}>{" "}(4.5)</Text>
                                </View>

                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "500",
                                        display: "flex",
                                        color: "black",
                                        padding: 3,
                                    }}
                                >
                                    Center Street
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
                        <FontAwesomeIcon name="credit-card" color={colors.textLightBE} size={14} />
                        <Text style={[fonts.f12B, { color: colors.textLightBE, marginLeft: 5, marginBottom: moderateScale(-2) }]}>
                            Cash
                        </Text>
                        <View style={{ marginLeft: moderateScale(15), display: "flex", flexDirection: "row", alignItems: 'center' }}>
                            <MaterialIcon name="group" color={colors.textLightBE} size={18} />
                            <Text style={[fonts.f12B, { color: colors.textLightBE, marginLeft: 5, marginBottom: moderateScale(-2) }]}>
                                2
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: moderateVerticalScale(7) }}>
                    <SimpleButton style={[styles.button, { flexDirection: 'row', marginRight: '2%' }]} onPress={onCall}>
                        <Feather name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={20} /><Text style={styles.buttonText}>Call</Text>
                    </SimpleButton>
                    <GreenButton
                        text={"Start"}
                        onPress={() => {
                            // setIsShow(false)
                            navigation?.navigate('Showpanic', { isShowPanic: false })
                        }}
                    />

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            color: "#F164b2",
                            fontWeight: "500",
                            fontSize: 12,
                            marginBottom: 5
                        }}
                    >
                        Pick Up
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        12 Thomas Street
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        Heswell
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        BOURNEMOUTH
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        BHI 1AA
                    </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            color: "#F164b2",
                            fontWeight: "500",
                            fontSize: 12,
                            marginBottom: 5
                        }}
                    >
                        Destination
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        02 Center Street
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        Heswell
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        BOURNEMOUTH
                    </Text>
                    <Text
                        style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                    >
                        CHI 1AA
                    </Text>
                </View>
                <Text
                    style={{
                        color: "#BEBEBE",
                        width: 130,
                        marginTop: 10,
                        paddingLeft: -10,
                    }}
                >
                    Special Note for driver will display here
                </Text>

            </Overlay>

            {/* Modal */}
            <IncreaseWaitingTimeModal show={increaseModal} setShow={setIncreaseModal}
                onYes={() => {
                    setIncreaseModal(false)
                }}
                time={'01:00'}
                btns={
                    <>
                        <CustomButton text={'Increase Time'} textStyle={{ color: colors.white }} style={{ width: '48%' }} onPress={() => setIncreaseModal(false)} />
                        <CustomButton text={'Cancel Job'} style={{ width: '48%', backgroundColor: 'red' }} onPress={() => {
                            setIncreaseModal(false)
                            setIsShow(true)

                        }}
                            textStyle={{ color: colors.white }}
                        />
                    </>
                }
            />
            <CancelJobModal show={isShow} setShow={setIsShow} onYes={() => {
                setIsShow(false)
                navigation.navigate('Dashboard')
            }} />
            {/* Modal */}


        </>
    )
}

const Header = ({ isWaiting, navigation, isShow }) => {
    return (<>
        {isShow ?
            <MapHeader isHideRightIcon isWaiting={isWaiting} navigation={navigation} />
            :
            <View style={styles.topbar}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                        }}
                    >
                        <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
                    </TouchableOpacity>
                    <View
                        style={{
                            paddingRight: 25,
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 36 }}>02.59</Text>
                    </View>
                </View>
            </View>
        }
    </>)
}

function EmergencyStartJob({ navigation }) {
    const [isStarting, setIsStarting] = useState(false)
    const [isInitial, setIsInitial] = useState('picking')
    console.log({ isInitial })
    return (
        <View style={{ ...baseStyles.container, paddingHorizontal: 0, paddingVertical: 0 }}>
            <CustomStatusBar
                barStyle={'light-content'}
                bg={colors.white}
            />
            <Header isShow={isInitial !== 'waiting'} />
            {isInitial == 'picking' ? <PickingUp onDetail={() => setIsInitial('waiting')} navigation={navigation} /> : <Waiting navigation={navigation} />}
            <ArrowsBox navigation={navigation} />

            <Maps style={{ width: '100%', height: '100%' }} />


            {isStarting ?
                <View
                    style={{
                        position: "absolute",
                        bottom: 0,
                        zIndex: 1000,
                        display: "flex",
                        backgroundColor: "white",
                        width: "100%",
                        // height: '30%',
                        paddingTop: 30,
                        paddingBottom: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,

                    }}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <View style={{ width: "100%" }}>
                            <Text
                                style={styles.head}
                            // onPress={() => {
                            //     setshowwaitingModal(true);
                            // }}
                            >
                                Waiting
                            </Text>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Avatar
                                    rounded
                                    source={Profile}
                                    size={50}
                                />
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "700",
                                                display: "flex",
                                                color: "black",
                                                padding: 3,
                                            }}
                                        >
                                            User Name
                                        </Text>
                                        <Text style={[fonts.f10R, { color: colors.ratingOrange }]}>{" "}(4.5)</Text>
                                    </View>

                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "500",
                                            display: "flex",
                                            color: "black",
                                            padding: 3,
                                        }}
                                    >
                                        Center Street
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon name="credit-card" color="#BEBEBE" size={14} />
                            <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                                Cash
                            </Text>
                            <View
                                style={{
                                    marginLeft: 15,
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Icon as={MaterialIcon} name="group" color="#BEBEBE" size={14} />
                                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                                    2
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}
                    >
                        <SimpleButton style={[styles.button, { flexDirection: 'row' }]} onPress={() => Linking.openURL('tel:+1324424')}>
                            <Icon as={Feather} name='phone-call' color={colors.mainColor} style={{ marginRight: 5 }} size={3} /><Text style={styles.buttonText}>Call</Text>
                        </SimpleButton>
                        <GreenButton
                            text={"Start"}
                            onPress={() => {
                                setIsStarting(false)
                            }}
                        />
                    </View>
                </View>

                : null}
        </View>
        // <div>EmergencyStartJob</div>
    )
}

export default EmergencyStartJob


const styles = StyleSheet.create({
    head: {
        // fontSize: 20,
        // fontWeight: "800",
        // display: "flex",
        color: "#F164b2",
        // padding: 2,
    },
    button: {
        backgroundColor: colors.black,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        width: '48%',
        marginRight: 10,
        color: colors.white
    },


    topbar: {
        position: "absolute",
        top: 0,
        zIndex: 1000,
        display: "flex",
        backgroundColor: "#F164b2",
        width: "100%",
        // height: 130,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
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
        borderRadius: 5,
        // width: 120,
        marginRight: 10,
        width: '48%'
    },
    buttonText: {
        ...fonts.f16SB,
        color: colors.white,

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
