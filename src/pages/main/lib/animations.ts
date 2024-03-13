import { Animated } from 'react-native'

export const animatedXY = new Animated.ValueXY({
    x: 0,
    y: -150,
})

export const animatedOpacity = new Animated.Value(0)

Animated.parallel([
    Animated.timing(animatedXY, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
    }),
    Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
    }),
]).start()
