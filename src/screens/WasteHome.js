import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Styles} from '../styles/Styles';
import {Header, HomeCard, MaterialList} from '../components/WasteHome';
import {useIsFocused, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WasteHome = () => {
  const isFocused = useIsFocused();

  const [keyCount, setKeyCount] = useState(0);
  const [numberRecycled, setnumberRecycled] = useState(0);
 
  useEffect(() => {
    if (isFocused) {
      // AsyncStorage.clear();
      const getCount = async () => {
        let count = await AsyncStorage.getItem('count');
        count = count == null ? 0 : JSON.parse(count);

        // console.log(count);
        setKeyCount(count);
      };
      const getnumberOfRecycled = async () => {
        let number = await AsyncStorage.getItem('recycled');
        number = number == null ? 0 : JSON.parse(number);

        // console.log(number);
        setnumberRecycled(number);
      };
      getCount();
      getnumberOfRecycled();
    }
  }, [isFocused]);
 

  return (
    <>
      <View style={[Styles.bigCintainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeCard Points={keyCount} numberRecycled={numberRecycled} />
          <MaterialList />
        </ScrollView>
      </View>
    </>
  );
};

export default WasteHome;

const styles = StyleSheet.create({});
