import { StyleSheet } from 'react-native'
import { COLORS, FONTS, RADIUS } from '../../lib/constants'

export const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RADIUS.r16,
        height: 64,
        marginLeft: 30,
        marginRight: 30,
    },
    text: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: FONTS.soraSemiBold,
    },
})
