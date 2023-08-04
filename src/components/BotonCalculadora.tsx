import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  label: string;
  onPress: (numeroTexto: string) => void;
  color?: string;
  isLarge?: boolean;
}

const BotonCalculadora = ({
  label,
  onPress,
  color = '#2d2d2d',
  isLarge = false,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress(label)}
        style={{
          ...styles.calculadoraBoton,
          width: isLarge ? 160 : 80,
          alignSelf: isLarge ? 'center' : 'auto',
          backgroundColor: color,
        }}>
        <Text
          style={{
            ...styles.labelBoton,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotonCalculadora;

const styles = StyleSheet.create({
  calculadoraBoton: {
    height: 80,
    width: 80,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
  },
  labelBoton: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
