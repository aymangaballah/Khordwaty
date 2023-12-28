import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../../styles/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  COLORS,
  FONTS,
  MARGIN,
  PADDINGS,
  RADIUS,
} from '../../constants/Constants';

import {Rating} from 'react-native-stock-star-rating';
import {CoursesData} from '../../utilies/CoursesData';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Svg, {Path} from 'react-native-svg';
const CoursesList = () => {
  const navigation = useNavigation();
  const sortedArray = CoursesData.sort(compare);
  function compare(a, b) {
    const ARating = a.CourseRating;
    const BRating = b.CourseRating;
    return BRating - ARating;
  }
  const [textInput, setTextInput] = useState('');
  const [ArrayFilterd, setArrayFilterd] = useState(sortedArray);

  const textInputHandler = enteredText => {
    setTextInput(enteredText);
    setArrayFilterd(
      CoursesData.filter(i =>
        i.CourseName.toLowerCase().includes(enteredText.toLowerCase()),
      ),
    );
  };
  console.log(textInput);

  return (
    <>
      <View style={[styles.top]}>
        <Svg
          height={RFValue(250)}
          width={'100%'}
          viewBox="0 0 1440 320"
          style={styles.topWave}>
          <Path
            fill={COLORS.PrimaryColor}
            d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,229.3C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <Text
            style={{
              fontSize: RFValue(30),
              fontWeight: 'bold',
              lineHeight: RFValue(40),
              color: COLORS.white,
              marginTop: MARGIN.xlMargin,
              marginLeft: MARGIN.mdMargin,
            }}>
            Find Your Favorite Course
          </Text>
        </Svg>
      </View>
      <View style={styles.container}>
        {/* <Text */}
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.textInput}
            value={textInput}
            onChangeText={textInputHandler}
            placeholder="Find Your Course "
          />
          <Pressable
            style={styles.searchIcon}
            onPress={() => {
              textInputHandler;
            }}>
            <FontAwesome
              name="search"
              color={COLORS.white}
              size={RFValue(20)}
            />
          </Pressable>
        </View>
        <Text
          style={[
            Styles.contentText,
            {alignSelf: 'flex-start', marginLeft: RFValue(5)},
          ]}>
          Our Courses
        </Text>
        <FlatList
          contentContainerStyle={{
            padding: RFValue(4),
            marginTop: MARGIN.mdMargin,
          }}
          data={ArrayFilterd}
          renderItem={({item, index}) => (
            <Pressable
              style={styles.btnContainer}
              android_ripple={{color: COLORS.lightGray}}
              onPress={() => {
                navigation.navigate(
                  'CourseOverview',
                  {
                    courseObject: ArrayFilterd[index],
                  },
                  'Image',
                  item.CourseImage,
                );
              }}>
              <View
                style={{
                  width: '100%',
                  height: RFValue(200),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.CourseImage}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: RFValue(50),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: PADDINGS.mdPadding,
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    Styles.contentText,
                    {maxWidth: RFValue(160), maxHeight: RFValue(20)},
                  ]}>
                  {item.CourseName}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Rating
                    stars={item.CourseRating}
                    maxStars={5}
                    size={RFValue(20)}
                  />
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default CoursesList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: PADDINGS.mdPadding,
  },

  btnContainer: {
    width: '100%',
    height: RFValue(250),
    borderRadius: RADIUS.mdRadius,
    backgroundColor: COLORS.white,
    elevation: RFValue(5),
    marginBottom: RFValue(20),
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: RADIUS.mdRadius,
    borderTopRightRadius: RADIUS.mdRadius,
  },
  TextInputContainer: {
    width: '100%',
    height: RFValue(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: MARGIN.xlMargin,
  },
  searchIcon: {
    width: RFValue(60),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PrimaryColor,
    borderRadius: RADIUS.mdRadius,
  },
  textInput: {
    width: '75%',
    height: '100%',
    backgroundColor: '#EBEBEB',
    borderRadius: RADIUS.mdRadius,
    paddingLeft: PADDINGS.mdPadding,
    color:COLORS.black
  },
  top: {
    marginBottom: RFValue(80),
    height: RFValue(100),
    backgroundColor: COLORS.PrimaryColor,
  },

  topWave: {},
});
