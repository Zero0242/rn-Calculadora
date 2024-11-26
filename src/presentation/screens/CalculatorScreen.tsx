import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles as globalStyle} from '../../config/theme/app_theme';
import {CalculatorButton} from '../components';
import {Operator, useCalculator} from '../hooks';

export const CalculatorScreen = () => {
  const {
    counter,
    buildNumber,
    reset,
    toggleSign,
    deleteOperation,
    previousCounter,
    setOperation,
    setResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={globalStyle.mainResult}>
        {counter}
      </Text>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={globalStyle.subResult}>
        {previousCounter}
      </Text>
      <View style={styles.controlsContainer}>
        <View style={globalStyle.row}>
          <CalculatorButton
            onPress={reset}
            label="C"
            buttonType="special-action"
          />
          <CalculatorButton
            onPress={toggleSign}
            label="+/-"
            buttonType="special-action"
          />
          <CalculatorButton
            onPress={deleteOperation}
            label="del"
            buttonType="special-action"
          />
          <CalculatorButton
            onPress={() => setOperation(Operator.divide)}
            label="/"
            buttonType="action"
          />
        </View>
        <View style={globalStyle.row}>
          <CalculatorButton onPress={() => buildNumber('7')} label="7" />
          <CalculatorButton onPress={() => buildNumber('8')} label="8" />
          <CalculatorButton onPress={() => buildNumber('9')} label="9" />
          <CalculatorButton
            onPress={() => setOperation(Operator.multiply)}
            label="X"
            buttonType="action"
          />
        </View>
        <View style={globalStyle.row}>
          <CalculatorButton onPress={() => buildNumber('4')} label="4" />
          <CalculatorButton onPress={() => buildNumber('5')} label="5" />
          <CalculatorButton onPress={() => buildNumber('6')} label="6" />
          <CalculatorButton
            onPress={() => setOperation(Operator.substract)}
            label="-"
            buttonType="action"
          />
        </View>
        <View style={globalStyle.row}>
          <CalculatorButton onPress={() => buildNumber('1')} label="1" />
          <CalculatorButton onPress={() => buildNumber('2')} label="2" />
          <CalculatorButton onPress={() => buildNumber('3')} label="3" />
          <CalculatorButton
            onPress={() => setOperation(Operator.add)}
            label="+"
            buttonType="action"
          />
        </View>

        <View style={globalStyle.row}>
          <CalculatorButton
            onPress={() => buildNumber('0')}
            label="0"
            buttonType="big-number"
          />
          <CalculatorButton onPress={() => buildNumber('.')} label="." />
          <CalculatorButton onPress={setResult} label="=" buttonType="action" />
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
