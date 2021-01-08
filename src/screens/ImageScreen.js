import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return(
      <View>
          <ImageDetail 
            title="AQUILA AVEION"
            imageScource={require('../../assets/pic.jpg')} 
          />
      </View>
  )

};

const styles = StyleSheet.create({});

export default HomeScreen;
