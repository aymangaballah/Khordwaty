import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BookHome,
  CourseOverview,
  ItemDetails,
  WasteHome,
  WasteorBook,
} from '../screens';
import {COLORS, FONTS, MARGIN} from '../constants/Constants';
import {HeaderLeft} from '../components/WasteHome';
import ProductsPage from '../screens/ProductsPage';
const WasteNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.PrimaryColor}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WasteorBook"
            component={WasteorBook}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WasteHome"
            component={WasteHome}
            options={{
              headerLeft: () => {
                return <HeaderLeft />;
              },
              title: null,
              headerStyle: {backgroundColor: COLORS.PrimaryColor},
            }}
          />
          <Stack.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{
              headerTitleStyle: {
                fontSize: FONTS.h4,
                fontWeight: 'bold',
              },
              headerStyle: {backgroundColor: COLORS.PrimaryColor},
              headerTintColor: COLORS.white,
            }}
          />

          <Stack.Screen
            name="BookHome"
            component={BookHome}
            options={{
              headerLeft: () => {
                return <HeaderLeft />;
              },
              headerStyle: {backgroundColor: COLORS.PrimaryColor},
              headerTintColor: COLORS.white,
              title: null,
              headerShadowVisible: false,
              
            }}
          />
          <Stack.Screen
            name="CourseOverview"
            component={CourseOverview}
            options={{
              headerTitleStyle: {
                fontSize: FONTS.h4,
                fontWeight: 'bold',
              },
              headerStyle: {backgroundColor: COLORS.PrimaryColor},
              headerTintColor: COLORS.white,
              headerShadowVisible: false,
            }}
          />
                    <Stack.Screen
            name="ProductsPage"
            component={ProductsPage}
            
            options={{
              headerTitleStyle: {
                fontSize: FONTS.h4,
                fontWeight: 'bold',
              },
              headerStyle: {backgroundColor: COLORS.PrimaryColor},
              headerTintColor: COLORS.white,
              headerShadowVisible: false,
              title:"Sustainable Products"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default WasteNavigation;

const styles = StyleSheet.create({});
