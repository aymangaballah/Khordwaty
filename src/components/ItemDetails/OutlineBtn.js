import {Pressable, StyleSheet, Text,} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import { COLORS } from '../../constants/Constants';
const OutlineBtn = ({onPress, nameIcon, title}) => {
    return (
      <Pressable
        android_ripple={{color: COLORS.white}}
        onPress={onPress}
        style={{
          width: RFValue(126),
          flexDirection: 'row',
          justifyContent: 'center',
          borderColor: COLORS.PrimaryColor,
          borderWidth: RFValue(2),
          alignItems: 'center',
          borderRadius: RFValue(10),
        }}>
        <Ionicons
          name={nameIcon}
          size={RFValue(22)}
          color={COLORS.PrimaryColor}
        />
        <Text
          style={{
            fontSize: RFValue(16),
            color: COLORS.PrimaryColor,
            marginLeft: RFValue(10),
          }}>
          {title}
        </Text>
      </Pressable>
    );
  };
  
  export default OutlineBtn;
  
  const styles = StyleSheet.create({});