import React from 'react'
import Modal from "react-native-modal";
import { SimpleButton } from './BackButton';
import CustomIcon from "react-native-vector-icons/Ionicons";
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { colors } from '../constants/colors';
import { View } from 'react-native';

function ModalSkeleton({ show, setShow, children, style, isShowCancel=true }) {
    return (
        <Modal isVisible={show} style={[style]}>
            <View style={{
                borderRadius: 10,
            }}>
                {isShowCancel ? <SimpleButton onPress={() => setShow(false)} style={styles.iconBtn}>
                    <CustomIcon name={'ios-close'} size={moderateScale(20)} color={colors.white} />
                </SimpleButton> : null}
                {children}
            </View>
        </Modal>
    )
}

export default ModalSkeleton


const styles = ScaledSheet.create({
    iconBtn: {
        position: 'absolute',
        top: moderateScale(-12),
        right: moderateScale(15),
        backgroundColor: colors.black,
        alignSelf: 'flex-end',
        borderRadius: moderateScale(20),
        padding: moderateScale(3),
        zIndex: 2
    }
})