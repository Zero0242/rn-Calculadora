import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/constants/global-styles';
import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import * as Haptics from 'expo-haptics'

interface Props {
    label: string;
    buttonType?: 'number' | 'action' | 'big-number' | 'special-action';
    onPress?: () => void;
}

export function CalculatorButton({
    label,
    buttonType = 'number',
    onPress,
}: Props) {
    const currentColor: string = useMemo(() => {
        switch (buttonType) {
            case 'special-action':
                return Colors.lightGray;
            case 'action':
                return Colors.orange;
            default:
                return Colors.darkGray;
        }
    }, [buttonType]);

    return (
        <Pressable
            onPress={() => {
                onPress && onPress()
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
            }}
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: currentColor,
                width: buttonType === 'big-number' ? 180 : 80,
                opacity: pressed ? 0.8 : 1,
            })}>
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: buttonType === 'special-action' ? 'black' : 'white',
                }}>
                {label}
            </Text>
        </Pressable>
    );
}