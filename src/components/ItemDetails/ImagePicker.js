import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../constants/Constants';
import OutlineBtn from './OutlineBtn';
import {Styles} from '../../styles/Styles';
const ImagePicker = ({onTakeImage}) => {
  const [pickedImage, setPickedImage] = useState('');

  async function takePhoto() {
    const image = await launchCamera();
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri); // pass data from here to placeForm
  }

  async function openGallery() {
    const image = await launchImageLibrary();
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri); // pass data from here to placeForm
  }

  return (
    <View>
      <Text
        style={[
          Styles.contentText,
          {marginTop: RFValue(20), marginVertical: RFValue(10)},
        ]}>
        {' '}
        Put a Suitable Image *{' '}
      </Text>
      <View style={styles.imagePreviewContainer}>
        {pickedImage == '' ? (
          <Text style={styles.fallbackText}>No Image Taken Yet</Text>
        ) : (
          <Image
            source={{uri: pickedImage}}
            style={styles.imagePreview}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.btn_Container}>
        <OutlineBtn onPress={takePhoto} nameIcon="camera" title="Camera" />
        <OutlineBtn onPress={openGallery} nameIcon="images" title="Gallery" />
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreviewContainer: {
    width: '100%',
    height: RFValue(400),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RFValue(20),
    backgroundColor: '#ddd',
    borderRadius: RFValue(10),
    overflow: 'hidden',
  },
  fallbackText: {
    fontSize: RFValue(16),
    color: COLORS.fallbackColor,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  btn_Container: {
    flexDirection: 'row',
    width: '100%',
    height: RFValue(60),
    justifyContent: 'space-between',
  },
});
