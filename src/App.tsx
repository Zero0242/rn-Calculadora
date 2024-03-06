import {View} from 'react-native';
import React from 'react';
import {CalculatorScreen} from './presentation/screens';
import {styles} from './config/theme/app_theme';

const App = () => {
  return (
    <View style={styles.background}>
      <CalculatorScreen />
    </View>
  );
};

export default App;
