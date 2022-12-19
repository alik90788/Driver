import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import BackButton from './components/BackButton';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderWithBtns from './components/HeaderWithBtns';
import { baseStyles, fonts } from './constants/fonts';
import { colors } from './constants/colors';
import CustomStatusBar from './components/CustomStatusBar';

const Settings = ({ navigation }) => {
  const [isChecked, setIsChecked]=useState(false)
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%", ...baseStyles.container }}>
      <CustomStatusBar
        barStyle={'light-content'}
        bg={colors.white}
      /> 

      <View
      // style={baseStyles.container}
      >
        <HeaderWithBtns title={'Settings'}
          onPress2={() => navigation?.openDrawer()}
        />
      </View>
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ ...fonts.f14B }}>Brightness</Text>
          <View style={{ marginVertical: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <View >
              <MaterialCommunityIcons name="moon-waxing-crescent" color="#DCDCDC" size={20} />
            </View>
            <Slider
              maximumValue={1}
              minimumValue={0}
              minimumTrackTintColor="#F164b2"
              maximumTrackTintColor="grey"
              thumbTintColor="white"
              step={0.1}
              width={170}
            />
            <FontAwesome name="gear" color={"gear"} size={23} />
            {/* <IonIcon name="md-checkbox-outline" size={23} style={{ marginLeft: 5 }} /> */}
            <MaterialCommunityIcons name={isChecked ? "checkbox-blank-outline" :"checkbox-outline"} size={23} style={{ marginLeft: 5 }} onPress={()=>setIsChecked(!isChecked)} />
            <Text style={{ ...fonts.f10B, marginLeft: 5 }}>Automatic</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#eaeaea' }}>

        </View>
      </View>
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ ...fonts.f14B }} onPress={() => { navigation.navigate('ChooseTheme') }}>Theme</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Feather name={'moon'} color="#DCDCDC" size={18} />
            <Text style={{ ...fonts.f12B, marginLeft: 10, marginBottom: -2 }}>Night</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#eaeaea' }}>

        </View>
      </View>
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ ...fonts.f14B }}>Font Size</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <FontAwesome5 name={'font'} color="#DCDCDC" size={16} />
            <Text style={{ ...fonts.f12B, marginLeft: 10, marginBottom: -2 }}>Normal</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#eaeaea' }}>
        </View>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
})