import { Text, TouchableOpacity, View } from "react-native"
import { moderateScale, moderateVerticalScale, ScaledSheet } from "react-native-size-matters"
import ModalSkeleton from "../components/ModalSkeleton"
import { colors } from "../constants/colors"
import { fonts } from "../constants/fonts"

export const CancelJobModal = ({ show, setShow, onYes }) => {
    return (
      <ModalSkeleton show={show} setShow={setShow} isShowCancel={false}>
        <View
          style={{
            backgroundColor: "white",
            width: '94%',
            // height: 220,
            alignSelf: "center",
            borderRadius: 10,
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateVerticalScale(30),
          }}
        >
          <Text
            style={{
  
              ...fonts.f20B,
              textAlign: "center",
            }}
          >
            Are you Sure you want to cancel the job?
          </Text>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: moderateVerticalScale(20) }}>
            <TouchableOpacity style={{
              ...styles.buttonyes
            }} onPress={() => { setShow(false) }}>
              <Text style={{ ...styles.buttonTextyes, color: colors.white }}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              ...styles.buttonyes, backgroundColor: 'red'
            }} onPress={onYes}>
              <Text style={{ ...styles.buttonTextyes, color: colors.white }}>Cancel Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalSkeleton>
  
    )
  }
  

  const styles=ScaledSheet.create({
    buttonTextyes: {
        color: "#F164b2",
        fontSize: 15,
        fontWeight: "500",
      },
      buttonyes: {
        backgroundColor:colors.black,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginRight: 10,
        width: '48%'
      },
  })