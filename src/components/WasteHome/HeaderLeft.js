import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Styles} from '../../styles/Styles';

const HeaderLeft = () => {
  let curHr = new Date().getHours();

  return (
    <View>
      <Text style={Styles.whiteColorContentText}>
        {curHr < 12
          ? 'Good Morning! '
          : curHr < 18
          ? 'Good Afternoon! '
          : 'Good Evening! '}
        
      </Text>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
