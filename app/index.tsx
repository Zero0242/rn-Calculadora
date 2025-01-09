import { View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components'
import { globalStyles } from '../constants/global-styles';
import { CalculatorButton } from '@/components/CalculatorButton';

export default function CalculadoraApp() {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemedText variant='h1'>
                    10 x 100000
                </ThemedText>
                <ThemedText variant='h2'>
                    1000000
                </ThemedText>
            </View>
            {/* Botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='C' buttonType='special-action' />
                <CalculatorButton label='-/+' buttonType='special-action' />
                <CalculatorButton label='del' buttonType='special-action' />
                <CalculatorButton label='/' buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='7' />
                <CalculatorButton label='8' />
                <CalculatorButton label='9' />
                <CalculatorButton label='x' buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='4' />
                <CalculatorButton label='5' />
                <CalculatorButton label='6' />
                <CalculatorButton label='+' buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='1' />
                <CalculatorButton label='2' />
                <CalculatorButton label='3' />
                <CalculatorButton label='-' buttonType='action' />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label='0' buttonType='big-number' />
                <CalculatorButton label='.' />
                <CalculatorButton label='=' buttonType='action' />
            </View>
        </View>
    )
}