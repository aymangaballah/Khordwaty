import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Styles} from '../styles/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';
import {WasteorBookImage} from '../constants/Images';
import WasteAndBookBtns from '../components/WasteAndBookBtns';

const WasteorBook = props => {
  const {navigation} = props;
  return (
    <>
      <View style={[Styles.bigCintainer, {paddingTop: RFValue(50)}]}>
        <ScrollView
          contentContainerStyle={{paddingBottom: RFValue(20)}}
          showsVerticalScrollIndicator={false}>
          <Image
            source={WasteorBookImage}
            style={styles.WasteorBookImageStyle}
            resizeMode="cover"
          />
          <View style={styles.text_btnsContiner}>
            <Text style={[Styles.TextTitle, {color: COLORS.PrimaryColor}]}>
              I need...
            </Text>
            <View style={styles.btnsContainer}>
              <WasteAndBookBtns
                title="Donate My Waste"
                backgroundColor={COLORS.PrimaryColor}
                textColor={COLORS.white}
                onPress={() => {
                  navigation.navigate('WasteHome');
                }}
              />
              <WasteAndBookBtns
                title="Book Course"
                backgroundColor={COLORS.PrimaryColor}
                textColor={COLORS.white}
                onPress={() => {
                  navigation.navigate('BookHome');
                }}
              />
               <WasteAndBookBtns
                title="Buy Sustainable Products"
                backgroundColor={COLORS.PrimaryColor}
                textColor={COLORS.white}
                onPress={() => {
                  navigation.navigate('ProductsPage');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default WasteorBook;

const styles = StyleSheet.create({
  btnsContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: RFValue(30),
    // backgroundColor:"#f0f"
  },
  WasteorBookImageStyle: {
    width: '95%',
    height: RFValue(200),
    alignSelf: 'center',
  },
  text_btnsContiner: {
    width: '100%',
    marginTop: RFValue(50),
  },
  textbtns: {
    fontSize: FONTS.h4,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: RFValue(30),
  },
});
