import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from '../styles/Styles';
import {CoursesList} from '../components/BookHome';
import {CoursesData} from '../utilies/CoursesData';

const BookHome = ({route}) => {
  // let courseObject = route.params.courseObject;
  // console.log(courseObject);
  return (
    <View style={[Styles.bigCintainer, {paddingHorizontal: 0}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CoursesList data={CoursesData} />
      </ScrollView>
    </View>
  );
};

export default BookHome;

const styles = StyleSheet.create({});
