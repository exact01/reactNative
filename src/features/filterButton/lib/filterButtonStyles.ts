import { StyleSheet } from 'react-native'
import { FONT_SIZE, FONTS, RADIUS } from '@shared/lib/constants'

export const filterButtonStyles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RADIUS.r16,
        height: 39,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 8,
    },
    text: {
        fontSize: FONT_SIZE.f14,
        fontFamily: FONTS.soraMedium,
    },
})
