import React, { FC } from 'react'
import { GestureResponderEvent, Pressable, Image } from 'react-native'

import { styles } from '../lib'
import type { IAddCoffeeButton } from './addCoffeButton.interface'
import { Animated } from 'react-native'
import { COLORS } from '@shared/lib/constants'
export const AddCoffeeButton: FC<IAddCoffeeButton> = ({ ...props }) => {
    const animatedColor = new Animated.Value(100)
    const color = animatedColor.interpolate({
        inputRange: [0, 100],
        outputRange: [COLORS.opacityOrange, COLORS.orange],
    })

    const onPressIn = (e: GestureResponderEvent) => {
        Animated.timing(animatedColor, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
        props.onPressIn && props.onPressIn(e)
    }

    const onPressOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedColor, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true,
        }).start()
        props.onPressOut && props.onPressOut(e)
    }

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} {...props}>
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: color,
                }}>
                <Image
                    style={styles.image}
                    source={require('@assets/images/plus.png')}
                />
            </Animated.View>
        </Pressable>
    )
}
