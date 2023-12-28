import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  blue: '#2F73FC',
  white: '#FFFFFF',
  black: '#000',
  red: '#f00',
  star: '#FFE900',
  darkGreen:"#259E73",
  PrimaryColor: "#19786A",
  SecondryColor:"#19900B",
  fallbackColor:"#005A34",
  contentColor:"#707070",
  lightGray:"#ddd",
  yellow:"#FFDE00"
};
export const ICONS = {
  xsIcon: RFValue(10) >= 10 ? RFValue(10) : 5,
  smIcon: RFValue(15) >= 15 ? RFValue(15) : 10,
  mdIcon: RFValue(20) >= 20 ? RFValue(20) : 15,
  lgIcon: RFValue(25) >= 25 ? RFValue(25) : 20,
  xlIcon: RFValue(30) >= 30 ? RFValue(30) : 25,
  xxlIcon: RFValue(35) >= 35 ? RFValue(35) : 30,
};
export const FONTS = {
  h1: RFValue(35) >= 35 ? RFValue(35) : 30,
  h2: RFValue(30) >= 30 ? RFValue(30) : 25,
  h3: RFValue(25) >= 25 ? RFValue(25) : 20,
  h4: RFValue(20) >= 20 ? RFValue(20) : 17,
  h5: RFValue(15) >= 15 ? RFValue(15) : 14,
  h6: RFValue(13) >= 13 ? RFValue(12) : 13,
  h7: RFValue(11) >= 11 ? RFValue(10) : 11,
  AmaranthRegular: 'Amaranth-Regular',
  Amaranth: 'Amaranth',
};
export const RADIUS = {
  xsRadius: RFValue(5),
  smRadius: RFValue(10),
  mdRadius: RFValue(15),
  lgRadius: RFValue(25),
  xlRadius: RFValue(30),
  xxlRadius: RFValue(35),
};
export const PADDINGS = {
  xsPadding: RFValue(3),
  smPadding: RFValue(10),
  mdPadding: RFValue(15),
  lgPadding: RFValue(20),
  xlPadding: RFValue(25),
};
export const MARGIN = {
  xsMargin: RFValue(5),
  smMargin: RFValue(10),
  mdMargin: RFValue(15),
  lgMargin: RFValue(20),
  xlMargin: RFValue(25),
};
