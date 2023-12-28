import {FlatList, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Styles} from '../../styles/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, MARGIN, PADDINGS, RADIUS} from '../../constants/Constants';
import {MaterialData} from '../../utilies/MaterialsData';
import {useRoute, useNavigation} from '@react-navigation/native';
const MaterialList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={[
          Styles.contentText,
          {alignSelf: 'flex-start'},
        ]}>
        Materials
      </Text>
      <FlatList
        contentContainerStyle={{
          padding: RFValue(4),
          marginTop: MARGIN.mdMargin,
        }}
        numColumns={2}
        data={MaterialData}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('ItemDetails', {
                MaterialData: MaterialData[index],
              });
            }}
            style={styles.btnContainer}
            key={index}>
            <View
              style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={item.itemImage}
                style={styles.itemImage}
                resizeMode="center"
              />
            </View>
            <View style={{flex:0.2,}}>

            <Text style={Styles.contentText}>{item.itemName}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default MaterialList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: MARGIN.mdMargin,
    alignItems: 'center',
  },
  btnContainer: {
    width: '46%',
    height: RFValue(170),
    borderRadius: RADIUS.mdRadius,
    backgroundColor: COLORS.white,
    elevation: RFValue(4),
    marginRight: '5%',
    marginBottom: RFValue(20),
    alignItems: 'center',
    paddingVertical: PADDINGS.mdPadding,
  },
  itemImage: {
    maxWidth: RFValue(100),
    maxHeight: RFValue(100),
    marginBottom: RFValue(7),
  },
});
