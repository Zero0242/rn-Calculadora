import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../theme/appTheme';
import BotonCalculadora from '../components/BotonCalculadora';
import useCalculator from '../hooks/useCalculator';

const CalculadoraScreen = () => {
  const {
    armarNumero,
    btnAdd,
    btnDivide,
    btnMulti,
    btnSubstract,
    lastnumber,
    resultado,
    clear,
    calcular,
    removeLast,
    positivoNegativo,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {lastnumber !== '0' && (
        <Text style={globalStyles.labelResultadoS}>{lastnumber}</Text>
      )}
      <Text
        style={globalStyles.labelResultadoL}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {resultado}
      </Text>
      <View style={styles.rowBotones}>
        <BotonCalculadora label="C" color="#9b9b9b" onPress={clear} />
        <BotonCalculadora
          label="+/-"
          color="#9b9b9b"
          onPress={positivoNegativo}
        />
        <BotonCalculadora label="del" color="#9b9b9b" onPress={removeLast} />
        <BotonCalculadora label="/" color="#ff9427" onPress={btnDivide} />
      </View>
      <View style={styles.rowBotones}>
        <BotonCalculadora label="7" onPress={armarNumero} />
        <BotonCalculadora label="8" onPress={armarNumero} />
        <BotonCalculadora label="9" onPress={armarNumero} />
        <BotonCalculadora label="x" color="#ff9427" onPress={btnMulti} />
      </View>
      <View style={styles.rowBotones}>
        <BotonCalculadora label="4" onPress={armarNumero} />
        <BotonCalculadora label="5" onPress={armarNumero} />
        <BotonCalculadora label="6" onPress={armarNumero} />
        <BotonCalculadora label="-" color="#ff9427" onPress={btnSubstract} />
      </View>
      <View style={styles.rowBotones}>
        <BotonCalculadora label="1" onPress={armarNumero} />
        <BotonCalculadora label="2" onPress={armarNumero} />
        <BotonCalculadora label="3" onPress={armarNumero} />
        <BotonCalculadora label="+" color="#ff9427" onPress={btnAdd} />
      </View>
      <View style={styles.rowBotones}>
        <BotonCalculadora label="0" isLarge onPress={armarNumero} />
        <BotonCalculadora label="." onPress={armarNumero} />
        <BotonCalculadora label="=" color="#ff9427" onPress={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;

const styles = StyleSheet.create({
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  rowBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
