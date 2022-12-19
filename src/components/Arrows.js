import React from 'react'
import { View } from 'react-native'
import { SimpleButton } from './BackButton'
import IoniIcons from 'react-native-vector-icons/Ionicons'
import { ScaledSheet } from 'react-native-size-matters'
import { colors } from '../constants/colors'

function ArrowsBox({ navigation,isPrev=true, next }) {


    return (
        <View style={{ position: 'absolute', top: '55%', left: '5%', right: '5%', flexDirection: 'row', justifyContent: 'space-between', zIndex: 3 ,flex:1}} >
            {isPrev ? <SimpleButton onPress={() => navigation?.goBack()} style={[styles.iconBox]}>
                <IoniIcons name='arrow-back' size={20} color={colors.mainColor} />
            </SimpleButton> : <View/>}
            <SimpleButton onPress={() => navigation?.push(next)} style={styles.iconBox}>
                <IoniIcons name='arrow-forward' size={20} color={colors.mainColor} />
            </SimpleButton>
        </View>
    )
}

export default ArrowsBox

const styles = ScaledSheet.create({
    iconBox: {
        backgroundColor: colors.black,
        padding: 6,
        borderRadius: 25
    },
    icon: {
        color: colors.mainColor,
    },
})