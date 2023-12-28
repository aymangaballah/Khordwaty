import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';
import {Styles} from '../styles/Styles';
import {CousreDetails, ImagePreview} from '../components/CourseOverview';
import {GeneralBtn} from '../components/ItemDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CourseOverview = () => {
  const route = useRoute();
  let courseObject = route.params.courseObject;
  let image = JSON.parse(courseObject.CourseImage);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: courseObject.CourseName,
    });
  }, []);

  const onPress = async () => {
    Alert.alert(
      'Congratulations',
      'You Booked' +"\t"+ courseObject.CourseName+"\t" + 'Successfully',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('BookHome')},
      ],
    );
  };
  return (
    <View style={Styles.bigCintainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: PADDINGS.xlPadding}}>
        <ImagePreview
          image={image}
          NumOfStudents={courseObject.NumOfStudents}
          Rating={courseObject.CourseRating}
        />
        <CousreDetails courseObject={courseObject} />
      </ScrollView>
      <GeneralBtn title="Book Now" onPress={onPress} />
    </View>
  );
};

export default CourseOverview;

const styles = StyleSheet.create({});
