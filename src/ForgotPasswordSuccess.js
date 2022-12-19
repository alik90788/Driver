import React from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
// import Text from '@components/common/Text';
import MailIcon from '../assets/mailIcon.svg';
// import R from '@components/utils/R';
// import AuthBoiler from '@components/layout/AuthBoiler';
import BackButton from './components/BackButton';
import { baseStyles, fonts } from './constants/fonts';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { colors } from './constants/colors';
import CustomStatusBar from './components/CustomStatusBar';

function ForgetPasswordSucessScreen(props) {
    const { navigation } = props;

    return (
        <ScrollView
            //   onPress={() => navigation.navigate('Login')}
            //   title={'Forget Password'}
            style={baseStyles.page}
        >
            <CustomStatusBar bg={colors.white}/>
            <View
                style={{
                    ...baseStyles.container
                }}>
                <View
                    style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                >
                    <BackButton style={{ alignSelf: 'flex-start' }} />
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%' }}>
                        {/* <Text style={{ ...fonts.pageTitle, marginLeft: 0 }}>Forgot Password</Text> */}
                        <Text style={[fonts.f12Sm, styles.subtext]}>
                        </Text>
                    </View>
                </View>
                <View style={styles.mainLayout}>
                    <View
                        style={{
                            aspectRatio: 1,
                            height: moderateScale(200),
                            marginLeft: moderateVerticalScale(50),
                        }}>
                        <MailIcon height="100%" width="100%" />
                    </View>
                    <Text
                        style={{ ...fonts.f25B, textAlign: 'center' }}
                    >
                        Link has been sent to your email account
                    </Text>
                    <Text
                        style={{ ...fonts.f12R, textAlign: 'center' }}>
                        Please go to your email to change your password
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
export default ForgetPasswordSucessScreen;

const styles = StyleSheet.create({
    mainLayout: {
        alignItems: 'center',
        justifyContent:'center',
        height:Dimensions.get('window').height * 0.8,
        paddingVertical:moderateVerticalScale(40),
    },
    contentView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
    },
});
