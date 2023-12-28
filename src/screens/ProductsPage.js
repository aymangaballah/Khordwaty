import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {ProductsData} from '../utilies/ProductsData';
import {RFValue} from 'react-native-responsive-fontsize';
import {Styles} from '../styles/Styles';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';

const ProductsPage = ({navigation}) => {
  const onPress = async () => {
    Alert.alert('Congratulations', 'Product purchased successfully', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK'},
    ]);
  };
  return (
    <View style={[Styles.bigCintainer,{paddingHorizontal:0}]}>
      <FlatList
        contentContainerStyle={{
          padding: RFValue(2),
          marginTop: MARGIN.mdMargin,
          paddingBottom: RFValue(30),
          paddingLeft: MARGIN.mdMargin,
        }}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={ProductsData}
        renderItem={({item, index}) => (
          <>
            <View style={styles.ProductsContainer}>
              <Image
                source={item.image}
                style={styles.imageStyle}
                resizeMode="cover"
              />
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: PADDINGS.smPadding,
                }}>
                <View style={{ paddingTop: 10}}>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      color:COLORS.contentColor
                    }}>
                    {item.name}
                  </Text>
                </View>

                <Pressable
                  onPress={() => {
                    onPress(item);
                  }}
                  style={{
                    backgroundColor: COLORS.PrimaryColor,
                    width: RFValue(100),
                    height: RFValue(60),
                    borderRadius: RADIUS.mdRadius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop:MARGIN.smMargin
                  }}>
                  <Text style={[styles.textBtn, {lineHeight: RFValue(24)}]}>
                    Buy Now
                  </Text>
                  <Text style={styles.textBtn}>{item.price} L.E</Text>
                </Pressable>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default ProductsPage;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: RFValue(170),
    borderTopRightRadius: RADIUS.mdRadius,
    borderTopLeftRadius: RADIUS.mdRadius,
  },
  ProductsContainer: {
    width: '45%',
    borderRadius: RADIUS.mdRadius,
    elevation: RFValue(5),
    backgroundColor: COLORS.white,
    marginBottom: MARGIN.lgMargin,
    paddingBottom: RFValue(10),
    marginRight: '4.5%',
    marginBottom: MARGIN.mdMargin,
  },
  textBtn: {
    color: COLORS.white,
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
});
