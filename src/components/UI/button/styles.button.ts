import { StyleSheet } from 'react-native'
import { COLORS, RADIUS } from '../../../utils/constants'

export const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RADIUS.r16,
        height: 64,
        backgroundColor: COLORS.orange,
        marginLeft: 30,
        marginRight: 30,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
})
