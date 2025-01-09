import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function CalculadoraApp() {
    return (
        <View>
            <Text style={{ fontSize: 40, fontFamily: 'SpaceMono', color: Colors.textPrimary }}>
                Calculadora App
            </Text>
            <Text style={{ fontSize: 25, fontFamily: 'SpaceMono', color: Colors.textSecondary }}>
                2666
            </Text>
        </View>
    )
}