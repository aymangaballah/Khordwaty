import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Styles } from '../../styles/Styles'
import { COLORS, MARGIN, RADIUS } from '../../constants/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { MaterialData } from '../../utilies/MaterialsData'

const GeneralBtn = ({onPress,title}) => {
  return (
    <Pressable style={styles.ConfirmedBtn}
    onPress={onPress}
    >
        <Text style={[Styles.TextTitle, {color: COLORS.white}]}>{title}</Text>
      </Pressable>
  )
}

export default GeneralBtn

const styles = StyleSheet.create({
    ConfirmedBtn: {
        width: '100%',
        height: RFValue(60),
        borderRadius: RADIUS.mdRadius,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.PrimaryColor,
        marginBottom:MARGIN.smMargin
      },
})