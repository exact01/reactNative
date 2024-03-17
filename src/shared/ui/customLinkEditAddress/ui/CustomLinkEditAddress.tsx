import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { styles } from '../lib'
import { color, fadeIn, fadeOut } from '../lib'
import { Animated } from 'react-native'
import { ICustomLinkEditAddress } from './customLinkEditAddress.interfaces'
export function CustomLinkEditAddress({
    address,
    ...props
}: ICustomLinkEditAddress) {
    return (
        <Link {...props} asChild style={styles.content}>
            <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
                <Animated.View
                    style={{ backgroundColor: color, ...styles.content }}>
                    <Text style={styles.text}>{address}</Text>
                </Animated.View>
            </Pressable>
        </Link>
    )
}
