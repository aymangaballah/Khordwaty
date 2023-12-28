import {StyleSheet, Text, View,Alert} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, MARGIN, PADDINGS, RADIUS} from '../../constants/Constants';
import PointsAndRecycledBtns from './PointsAndRecycledBtns';
import { useNavigation } from '@react-navigation/native';
const HomeCard = ({Points,numberRecycled}) => {
  const navigation= useNavigation()
  function onPress(){
  }
  return (
    <View style={styles.Card}>
      <PointsAndRecycledBtns icon={'coins'} title="Points" number={Points} />
      <PointsAndRecycledBtns icon={'trash'} title="Recycled" number={numberRecycled} onPress={onPress}  />
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  Card: {
    width: '100%',
    height: RFValue(150),
    borderRadius: RADIUS.mdRadius,
    backgroundColor: COLORS.PrimaryColor,
    marginVertical: MARGIN.xlMargin,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
