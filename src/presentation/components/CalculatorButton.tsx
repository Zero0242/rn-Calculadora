import React, {useMemo} from 'react';
import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app_theme';

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
        return colors.lightGray;
      case 'action':
        return colors.orange;
      default:
        return colors.darkGray;
    }
  }, [buttonType]);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: currentColor,
        width: buttonType === 'big-number' ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.buttonText,
          color: buttonType === 'special-action' ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
