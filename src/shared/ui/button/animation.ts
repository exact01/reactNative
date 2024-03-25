import { Animated } from 'react-native'
import { COLORS } from '../../lib/constants'

const animatedColor = new Animated.Value(100)

export const animationColor = animatedColor.interpolate({
    inputRange: [0, 100],
    outputRange: [COLORS.opacityOrange, COLORS.orange],
})

export const fadeIn = () => {
    Animated.timing(animatedColor, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
    }).start()
}

export const fadeOut = () => {
    Animated.timing(animatedColor, {
        toValue: 100,
        duration: 100,
        useNativeDriver: true,
    }).start()
}
