import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CalculatorScreen} from './presentation/screens';

const App = () => {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
