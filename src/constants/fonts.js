import { ScaledSheet, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { colors } from './colors'


export const fonts = ScaledSheet.create({
    pageTitle: {
        fontSize: moderateScale(24, 0.3),
        // height: '100%',
        color: colors.black,
        marginLeft: moderateScale(15),
        fontFamily: "PoppinsBold",
    },
    f10R:{
        color: colors.black, 
        fontSize: moderateScale(10,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    f10B:{
        color: colors.black, 
        fontSize: moderateScale(10,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f12R:{
        color: colors.black, 
        fontSize: moderateScale(12,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    f12B:{
        color: colors.black, 
        fontSize: moderateScale(12,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f12Sm:{
        color: colors.black, 
        fontSize: moderateScale(12,0.3), 
        fontFamily: "PoppinsSemiBold", 
    },
    f14R:{
        color: colors.black, 
        fontSize: moderateScale(14,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    f14B:{
        color: colors.black, 
        fontSize: moderateScale(14,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f14Sm:{
        color: colors.black, 
        fontSize: moderateScale(14,0.3), 
        fontFamily: "PoppinsSemiBold", 
    },
    f18B:{
        color: colors.black, 
        fontSize: moderateScale(18,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f18R:{
        color: colors.black, 
        fontSize: moderateScale(18,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    f22R:{
        color: colors.black, 
        fontSize: moderateScale(22,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    f16B:{
        color: colors.black, 
        fontSize: moderateScale(16,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f16SB:{
        color: colors.black, 
        fontSize: moderateScale(16,0.3), 
        fontFamily: "PoppinsSemiBold", 
    },
    f22B:{
        color: colors.black, 
        fontSize: moderateScale(22,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f25R:{
        color: colors.black, 
        fontSize: moderateScale(25,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    f25B:{
        color: colors.black, 
        fontSize: moderateScale(25,0.3), 
        fontFamily: "PoppinsBold", 
    },
    f25Sm:{
        color: colors.black, 
        fontSize: moderateScale(25,0.3), 
        fontFamily: "PoppinsSemiBold", 
    },
    f30Sm:{
        color: colors.black, 
        fontSize: moderateScale(30,0.3), 
        fontFamily: "PoppinsSemiBold", 
    },
    f20B:{
        color: colors.black, 
        fontSize: moderateScale(20,0.3), 
        fontFamily: "PoppinsSemiBold", 
    },
    
    f16R:{
        color: colors.black, 
        fontSize: moderateScale(16,0.3), 
        fontFamily: "PoppinsRegular", 
    },
    
})
export const baseStyles = ScaledSheet.create({
    container: {
        paddingVertical: moderateScale(35),
        paddingHorizontal: moderateScale(20),
        backgroundColor:colors.white,
        height:'100%',
        flex:1

    
      },
      page: {
        backgroundColor: colors.white,
        flex: 1,
        width: '100%',
    
      },
      pickupEllipse: {
        borderRadius: 100,
        backgroundColor: colors.white,
        height: moderateScale(20),
        width: moderateScale(20),
        borderWidth: 0.5,
        borderColor:'#8A8A8A',
        marginBottom: moderateVerticalScale(4),
      },
    
    
})