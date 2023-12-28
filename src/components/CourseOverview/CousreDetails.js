import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../styles/Styles';
import {COLORS, FONTS, MARGIN, PADDINGS} from '../../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CousreDetails = ({courseObject}) => {
  return (
    <View>
      <Text
        style={[
          Styles.contentText,
          {marginTop: MARGIN.smMargin, fontSize: RFValue(20)},
        ]}>
        {courseObject.CourseName}
      </Text>
      {/* <Text
        style={[
          Styles.contentText,
          {marginTop: MARGIN.mdMargin, marginBottom: MARGIN.xsMargin},
        ]}>
        Description
      </Text> */}
      <Text style={styles.DetailsStyle}>{courseObject.Courseoverview}</Text>

      <Text style={[Styles.contentText,{marginTop:MARGIN.mdMargin}]}>
        How many products will you get by end of this course ?{' '}
      </Text>
      <Text style={styles.DetailsStyle}>
        {courseObject.numberofProductsbyEnding}
      </Text>

      <Text style={Styles.contentText}>Course Price </Text>
      <View style={styles.priceTextsContainer}>
        <Text style={[Styles.DetailsStyle]}>
          {courseObject.PriceNow}
        </Text>
      </View>
    </View>
  );
};

export default CousreDetails;

const styles = StyleSheet.create({
  DetailsStyle: {
    fontSize: RFValue(16),
    color: COLORS.contentColor,
    marginTop: MARGIN.xsMargin,
  },
  priceTextsContainer: {
    flexDirection: 'row',
    // paddingLeft: PADDINGS.mdPadding,
  },
  deletedPrice: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: COLORS.red,
    textDecorationLine: 'line-through',
  },
  alarmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(15),
  },
});
