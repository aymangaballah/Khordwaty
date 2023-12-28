import {StyleSheet, Text, View, Pressable, Image,Alert} from 'react-native';
import React from 'react';
import {Coins} from '../../constants/Images';
import {Styles} from '../../styles/Styles';
import {COLORS, ICONS, PADDINGS} from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
const PointsAndRecycledBtns = (props) => {
    const {icon,title,number,onPress}=props
  return (
    <Pressable style={styles.btn}
    onPress={
      onPress
   }
    >
      <FontAwesome5 name={icon} size={ICONS.lgIcon} color={COLORS.yellow} />
      <Text style={[Styles.TextTitle, {color: COLORS.white}]}>{title}</Text>
      <Text style={[Styles.TextTitle, {color: COLORS.white}]}>{number}</Text>
    </Pressable>
  );
};

export default PointsAndRecycledBtns;

const styles = StyleSheet.create({
  btn: {
    width: '45%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: PADDINGS.mdPadding,
    justifyContent: 'space-evenly',
  }
});
