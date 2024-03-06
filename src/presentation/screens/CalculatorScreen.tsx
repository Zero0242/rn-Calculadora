import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles as globalStyle} from '../../config/theme/app_theme';
import {CalculatorButton} from '../components';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={globalStyle.mainResult}>1500</Text>
      <Text style={globalStyle.subResult}>75</Text>
      <View style={styles.controlsContainer}>
        <View style={globalStyle.row}>
          <CalculatorButton label="C" buttonType="special-action" />
          <CalculatorButton label="+/-" buttonType="special-action" />
          <CalculatorButton label="del" buttonType="special-action" />
          <CalculatorButton label="/" buttonType="action" />
        </View>
        <View style={globalStyle.row}>
          <CalculatorButton label="7" />
          <CalculatorButton label="8" />
          <CalculatorButton label="9" />
          <CalculatorButton label="X" buttonType="action" />
        </View>
        <View style={globalStyle.row}>
          <CalculatorButton label="4" />
          <CalculatorButton label="5" />
          <CalculatorButton label="6" />
          <CalculatorButton label="-" buttonType="action" />
        </View>
        <View style={globalStyle.row}>
          <CalculatorButton label="1" />
          <CalculatorButton label="2" />
          <CalculatorButton label="3" />
          <CalculatorButton label="+" buttonType="action" />
        </View>

        <View style={globalStyle.row}>
          <CalculatorButton label="0" buttonType="big-number" />
          <CalculatorButton label="." />
          <CalculatorButton label="=" buttonType="action" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  controlsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
});
