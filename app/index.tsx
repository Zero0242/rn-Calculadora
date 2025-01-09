import { View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components'
import { globalStyles } from '../constants/global-styles';

export default function CalculadoraApp() {
    return (
        <View style={globalStyles.calculatorContainer}>
            <ThemedText variant='h1'>
                10 x 100000
            </ThemedText>
            <ThemedText variant='h2'>
                1000000
            </ThemedText>
        </View>
    )
}