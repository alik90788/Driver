import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ModalSkeleton from '../components/ModalSkeleton'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { useIsFocused } from '@react-navigation/native'
import PaymentLoading from '../../assets/PaymentLoading.svg'


export default function PaymentModal({ show, setShow, navigation }) {
  const [isComp, setIsComp] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsComp(true);
  //     navigation && navigation.navigate('RatePassenger');
  //   }, 3000);
  //   return () => {
  //     setIsComp(false)
  //     setShow(false)
  //   }

  // },
  //   []
  // )

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setIsComp(true);
        setTimeout(() => {
          navigation && navigation.navigate('RatePassenger');
        }, 1000)
      }, 1500);
    }

    return () => {
      setIsComp(false)
    }
  }, [show])


  return (
    <ModalSkeleton show={show} setShow={setShow}>
      <View
        style={{
          backgroundColor: "white",
          width: '94%',
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: moderateVerticalScale(30)
        }}
      >
        {!isComp ?
          <View style={{ width: moderateScale(65), height: moderateScale(65), alignSelf: 'center',marginBottom:moderateScale(10) }}>
            <PaymentLoading width={'100%'} height={'100%'} />
          </View>
          :
          <IonIcon
            name="ios-checkmark-circle-outline"
            size={80}
            color="#F164b2"
          />
        }
        <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "800", display: "flex", textAlign: "center" }}>{isComp ? "Payment Confirmed" : 'Processing Payment'}</Text>
      </View>
    </ModalSkeleton>
  )
}