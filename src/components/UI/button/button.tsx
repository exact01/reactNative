import React from 'react'
import { IButton } from './interfaces'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles.button'
export const Button = ({ text, ...props }: IButton) => {
    return (
        <Pressable {...props}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

