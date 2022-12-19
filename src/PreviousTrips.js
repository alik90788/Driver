import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import BackButton from './components/BackButton'
import Card from './components/Card';
import { baseStyles } from './constants/fonts';
import HeaderWithBtns from './components/HeaderWithBtns';
import { moderateScale } from 'react-native-size-matters';
import { colors } from './constants/colors';
import CustomStatusBar from './components/CustomStatusBar';

const PreviousTrips = ({ navigation }) => {

  return (
    <ScrollView style={baseStyles.page}>
       <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <View style={[baseStyles.container, { paddingHorizontal: moderateScale(20) }]}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <HeaderWithBtns
            title={'Previous Trips'}
            onPress2={() => navigation?.openDrawer()}
          />
        </View>
        <View >
          <Card onPress={() => { navigation.navigate('CardDetail') }} />
          <Card onPress={() => { navigation.navigate('CardDetail') }} />
          <Card onPress={() => { navigation.navigate('CardDetail') }} />
        </View>
      </View>
    </ScrollView>
  )
}

export default PreviousTrips

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
})