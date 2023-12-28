import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, FONTS, RADIUS} from '../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
const WasteAndBookBtns = props => {
  const {title, backgroundColor,textColor,onPress} = props;
  return (
    <Pressable
    onPress={onPress}
      style={[styles.wasteBtn, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.textbtns,{color:textColor}]}>{title}</Text>
    </Pressable>
  );
};

export default WasteAndBookBtns;

const styles = StyleSheet.create({
  wasteBtn: {
    width: '100%',
    height: RFValue(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.mdRadius,
    marginBottom:10
  },
  textbtns: {
    fontSize: FONTS.h4,
    fontWeight: 'bold',
    color: COLORS.white,
    lineHeight: RFValue(31),
  },
});
