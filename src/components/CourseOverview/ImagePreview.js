import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  COLORS,
  FONTS,
  MARGIN,
  PADDINGS,
  RADIUS,
} from '../../constants/Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ImagePreview = ({image, NumOfStudents, Rating}) => {
  return (
    <View style={styles.ImageContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.iconContainer}>
            <FontAwesome
              name="users"
              color={COLORS.contentColor}
              size={RFValue(15)}
            />
          </View>
          <Text style={styles.textStyle}>{NumOfStudents}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={[
              styles.iconContainer,
              {marginRight: 0, width: RFValue(20)},
            ]}>
            <FontAwesome name="star" color={COLORS.star} size={RFValue(15)} />
          </View>
          <Text style={styles.textStyle}>{Rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  ImageContainer: {
    width: '100%',
    height: RFValue(300),
    marginVertical: MARGIN.mdMargin,
    borderRadius: RADIUS.mdRadius,
    backgroundColor: COLORS.white,
    elevation: RFValue(5),
  },
  image: {
    width: '100%',
    height: RFValue(250),
    borderTopLeftRadius: RADIUS.mdRadius,
    borderTopRightRadius: RADIUS.mdRadius,
  },
  textContainer: {
    width: '45%',
    height: RFValue(50),
    // backgroundColor: '#ff0',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PADDINGS.mdPadding,
  },
  textStyle: {
    fontSize: FONTS.h6,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: RFValue(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
