import {StyleSheet} from 'react-native';
import {COLORS, FONTS, MARGIN, PADDINGS} from '../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
export const Styles = StyleSheet.create({
  bigCintainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: PADDINGS.mdPadding,
  },
  TextTitle: {
    fontSize: FONTS.h4,
    fontWeight: 'bold',
    color: COLORS.contentColor,
  },
  contentText: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: COLORS.contentColor,
    marginTop:MARGIN.smMargin
  },
  whiteColorContentText: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
