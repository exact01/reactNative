import React from 'react'
import { IButton } from '@shared/ui'
import { GestureResponderEvent, Pressable, Text } from 'react-native'
import { styles } from './styles.button'
import { Animated } from 'react-native'
import { animationColor, fadeIn, fadeOut } from './animation'

export const Button = ({ text, ...props }: IButton) => {
    const onPressIn = (e: GestureResponderEvent) => {
        fadeIn()
        props.onPressIn && props.onPressIn(e)
    }

    const onPressOut = (e: GestureResponderEvent) => {
        fadeOut()
        props.onPressOut && props.onPressOut(e)
    }

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} {...props}>
            <Animated.View
                style={{ ...styles.button, backgroundColor: animationColor }}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}
