import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Styles } from '../../styles/Styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS,FONTS,RADIUS,MARGIN } from '../../constants/Constants';
const Quantity = ({number,setnumber}) => {

    
    const addnumber = () => {
      setnumber(number + 1);
    };
    const minusnumber = () => {
      if (number > 1) {
        setnumber(number - 1);
      }
    };
  return (
    <>
    <Text style={[Styles.contentText, {marginVertical: RFValue(20)}]}>
    Quantity
  </Text>
  <View style={styles.QuantityConatiner}>
    <Pressable style={styles.plus_minusBtns} onPress={addnumber}>
      <AntDesign name="plus" size={RFValue(20)} color={COLORS.white} />
    </Pressable>
    <Text style={[Styles.TextTitle, {alignSelf: 'center'}]}>{number}</Text>
    <Pressable style={styles.plus_minusBtns} onPress={minusnumber}>
      <AntDesign name="minus" size={RFValue(20)} color={COLORS.white} />
    </Pressable>
  </View>
    </>
  )
}

export default Quantity

const styles = StyleSheet.create({
    textStyle: {
        fontSize: RFValue(18),
        color: '#737373',
        marginVertical: RFValue(20),
        fontWeight: 'bold',
      },
      QuantityConatiner: {
        flexDirection: 'row',
        width: RFValue(170),
        height: RFValue(50),
        borderRadius: RADIUS.mdRadius,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        marginBottom: RFValue(20),
        justifyContent: 'space-between',
      },
      plus_minusBtns: {
        alignItems: 'center',
        justifyContent: 'center',
        width: RFValue(50),
        height: '100%',
        backgroundColor: COLORS.PrimaryColor,
        borderRadius: RADIUS.mdRadius,
      },
      number: {
        fontSize: FONTS.h5,
        fontWeight: 'bold',
      },
})