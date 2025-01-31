import { View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components'
import { globalStyles } from '../constants/global-styles';
import { CalculatorButton } from '@/components/CalculatorButton';
import { Operation, useCalculator } from '@/hooks';

export default function CalculadoraApp() {
    const { formula, previousCounter, buildNumber, clear, setOperator, toggleValue, removeChar, equalOperator } = useCalculator()

    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemedText variant='h1'>
                    {formula}
                </ThemedText>
                <ThemedText variant='h2'>
                    {previousCounter}
                </ThemedText>
            </View>
            {/* Botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='C' onPress={() => clear()} buttonType='special-action' />
                <CalculatorButton label='-/+' onPress={() => toggleValue()} buttonType='special-action' />
                <CalculatorButton label='del' onPress={() => removeChar()} buttonType='special-action' />
                <CalculatorButton label='/' onPress={() => setOperator(Operation.divition)} buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='7' onPress={() => buildNumber('7')} />
                <CalculatorButton label='8' onPress={() => buildNumber('8')} />
                <CalculatorButton label='9' onPress={() => buildNumber('9')} />
                <CalculatorButton label='x' onPress={() => setOperator(Operation.multiplication)} buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='4' onPress={() => buildNumber('4')} />
                <CalculatorButton label='5' onPress={() => buildNumber('5')} />
                <CalculatorButton label='6' onPress={() => buildNumber('6')} />
                <CalculatorButton label='+' onPress={() => setOperator(Operation.addition)} buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='1' onPress={() => buildNumber('1')} />
                <CalculatorButton label='2' onPress={() => buildNumber('2')} />
                <CalculatorButton label='3' onPress={() => buildNumber('3')} />
                <CalculatorButton label='-' onPress={() => setOperator(Operation.substraction)} buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='0' onPress={() => buildNumber('0')} buttonType='big-number' />
                <CalculatorButton label='.' onPress={() => buildNumber('.')} />
                <CalculatorButton label='=' onPress={() => equalOperator()} buttonType='action' />
            </View>
        </View>
    )
}