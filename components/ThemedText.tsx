import { Text, TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/constants/global-styles'

interface Props extends TextProps {
    variant?: 'h1' | 'h2'
}

export function ThemedText({ children, variant, ...props }: Props) {
    return (
        <Text
            style={[
                { fontFamily: 'SpaceMono', color: 'white' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...props}
        >
            {children}
        </Text>
    )
}