import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {globalStyles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.fondo}>
      <StatusBar backgroundColor="black" barStyle={'light-content'} />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
