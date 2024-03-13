import { Link } from 'expo-router'
import { Image, Pressable, Text } from 'react-native'
import { styles } from '../lib'
import { color, fadeIn, fadeOut } from '../lib'
import { Animated } from 'react-native'
import { ICustomLinkEditAddress } from './customLinkEditAddress.interfaces'
export function CustomLinkEditAddress({
    address,
    ...props
}: ICustomLinkEditAddress) {
    return (
        <Link {...props} asChild>
            <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
                <Animated.View
                    style={{ backgroundColor: color, ...styles.content }}>
                    <Text style={styles.text}>{address}</Text>
                    <Image
                        // style={{ width: 100, height: 100 }}
                        source={require('@assets/images/iconEdit.svg')}
                    />
                </Animated.View>
            </Pressable>
        </Link>
    )
}
