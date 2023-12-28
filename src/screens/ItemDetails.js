import {StyleSheet, Text, View, ScrollView, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Styles} from '../styles/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {GeneralBtn, ImagePicker, Quantity} from '../components/ItemDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ItemDetails = () => {
  const route = useRoute();
  const MaterialObject = route.params.MaterialData;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: MaterialObject.itemName,
    });
  }, []);

  const [takedImage, settakeImage] = useState();
  const takeImageHandler = imageUri => {
    settakeImage(imageUri);
  };
  const [number, setnumber] = useState(1);
  //   const [points, setPoints] = useState(0);
  //   // const obj = {
  //   //   takedImage: takedImage,
  //   //   number: number,
  //   // };
  //   // const setWaste = async () => {
  //   //   await AsyncStorage.setItem('waste', JSON.stringify(obj));
  //   // };
  //   // const getWaste = async () => {
  //   //   let waste = await AsyncStorage.getItem('waste');
  //   //   if (waste !== null) {
  //   //     JSON.parse(waste);
  //   //   }
  //   // };

  //   useEffect(() => {
  //     storePoints();
  //   }, [number]);

  // useEffect(()=>{
  //   getPoints()
  // })
  //   const storePoints = async () => {
  //     await AsyncStorage.setItem('points', JSON.stringify(number));
  //     // setnumber(number + 1);
  //   };

  //   const getPoints = async () => {
  //     let points = await AsyncStorage.getItem('points');
  //     if (points !== null) {
  //       JSON.parse(points);
  //     }
  //     // console.log(number+"n")
  //     setPoints(points);
  //   };

  //   function ConfirmedHandler() {

  //       navigation.navigate('WasteHome');

  //   }

  //   // console.log(number+"number")
  //   // console.log(points+"points")

  const [keyPoint, setKeyPoint] = useState(0);
  const [numberRecycled,setnumberRecycled]=useState(0)
  async function add() {
    if (takedImage && number) {
      await setKeyPoint((keyPoint +(number *100)));
      await setnumberRecycled(numberRecycled+1);
    }
  }

  useEffect(() => {
    getCount();
    
  }, []);

  useEffect(() => {
    setCount();
  }, [keyPoint]);

  const setCount = async () => {
    await AsyncStorage.setItem('count', JSON.stringify(keyPoint));
  };

  const getCount = async () => {
    let count = await AsyncStorage.getItem('count');
    count = count == null ? 0 : JSON.parse(count);

    setKeyPoint(count);
  };

  useEffect(() => {
    getnumberOfRecycled();
    
  }, []);

  useEffect(() => {
    setnumberOfRecycled();
  }, [numberRecycled]);

  const setnumberOfRecycled = async () => {
    await AsyncStorage.setItem('recycled', JSON.stringify(numberRecycled));
  };

  const getnumberOfRecycled = async () => {
    let number = await AsyncStorage.getItem('recycled');
    number = number == null ? 0 : JSON.parse(number);

    setnumberRecycled(number);
  };
  async function craeteCountHandler() {
    if(takedImage){
      add().then(() => {
        navigation.navigate('WasteHome', {
          // place: place,
          // count: keyPoint,
        });
      });
    }else{
      Alert.alert("Warning!!"," You Must Put Image ")
    }
   
  }

  return (
    <View style={Styles.bigCintainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: RFValue(25)}}>
        <ImagePicker onTakeImage={takeImageHandler} />
        <View>
          <Quantity number={number} setnumber={setnumber} />
        </View>
      </ScrollView>
      <GeneralBtn title={'Confirm'} onPress={craeteCountHandler} />
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({});
