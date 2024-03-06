import {StyleSheet, Text, View} from 'react-native';
import {styles as globalStyle} from '../../config/theme/app_theme';
import React from 'react';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={globalStyle.mainResult}>1500</Text>
      <Text style={globalStyle.subResult}>75</Text>
      <View style={styles.controlsContainer}>
        <Text style={globalStyle.subResult}>75</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  controlsContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
