import React, { FC } from 'react'
import { GestureResponderEvent, Pressable, Animated, Text } from 'react-native'
import { animationColor, fadeIn, fadeOut } from '@shared/ui/button/animation'
import { IFilterButton } from '@features/filterButton/ui/filterButton.interface'
import { filterButtonStyles as styles } from '@features/filterButton/lib'
import { COLORS } from '@shared/lib/constants'

export const FilterButton: FC<IFilterButton> = ({
    text,
    isClicked,
    setClicked,
    ...props
}) => {
    const onPressIn = (e: GestureResponderEvent) => {
        fadeIn()
        setClicked(text)
        props.onPressIn && props.onPressIn(e)
    }

    const onPressOut = (e: GestureResponderEvent) => {
        fadeOut()
        props.onPressOut && props.onPressOut(e)
    }

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} {...props}>
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: isClicked ? animationColor : COLORS.white,
                }}>
                <Text
                    style={{
                        ...styles.text,
                        color: isClicked ? COLORS.white : COLORS.black,
                    }}>
                    {text}
                </Text>
            </Animated.View>
        </Pressable>
    )
}
