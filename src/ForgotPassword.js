import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import BackButton from './components/BackButton';
import { CustomButton } from './components/BlackButton';
import ValueCard from './components/ValueCard';
import { colors } from './constants/colors';
import { baseStyles, fonts } from './constants/fonts';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import R from '@components/utils/R';
// import AuthBoiler from '@components/layout/AuthBoiler';
// import TextInput from '@components/common/TextInput';
// import Button from '@components/common/Button';

function ForgetPasswordScreen(props) {
    const { navigation } = props;

    const [authUser, setAuthUser] = useState({
        email: '',
    });
    const [errorField, setErrorField] = useState({
        email: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        navigation.navigate('ForgotPasswordDone');
    };

    return (
        <View style={baseStyles.container}>
            <View
                style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: moderateVerticalScale(20) }}
            >
                <BackButton style={{ alignSelf: 'flex-start' }} />
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '85%' }}>
                    <Text style={{ ...fonts.pageTitle, marginLeft: 0,width:'100%',textAlign:'center' }}>Forgot Password</Text>                  
                </View>

            </View>

            <View style={{ alignItems: 'center', height: '90%', justifyContent: 'center' }}>
                <Text style={[fonts.f14B, { alignSelf: 'flex-start', marginBottom: 10,color:colors.mainColor }]}> Enter Email to reset your password</Text>

                <ValueCard
                    label={'Email'}
                    setter={text => {
                        setAuthUser({ ...authUser, email: text });
                    }}
                    style={{
                        width: '100%',
                        marginBottom: 30
                    }}
                />
                <CustomButton
                    text="Reset"
                    onPress={onSubmit}
                />
            </View>
        </View>
    );
}
export default ForgetPasswordScreen;

const styles = StyleSheet.create({
    mainLayout: {
        backgroundColor: colors.white,
        // paddingTop: unit.scale(150),
        // paddingHorizontal: unit.scale(10),
    },
    contentView: {
        justifyContent: 'center',
        // marginTop: unit.scale(200),
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
    },
});
