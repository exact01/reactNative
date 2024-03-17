import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { styles } from '../lib'
import { ICustomLink } from './customLink.interfaces'
import { color, fadeIn, fadeOut } from '../lib/animation'
import { Animated } from 'react-native'
export function CustomLink({ text, ...props }: ICustomLink) {
    return (
        <Link {...props} asChild>
            <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
                <Animated.View
                    style={{ backgroundColor: color, ...styles.content }}>
                    <Text style={styles.text}>{text}</Text>
                </Animated.View>
            </Pressable>
        </Link>
    )
}
