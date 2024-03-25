import { StyleSheet } from 'react-native'
import { RADIUS } from '@shared/lib/constants'

export const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RADIUS.r10,
        height: 32,
        width: 32,
    },
    image: {
        width: 16,
        height: 16,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
    },
})
