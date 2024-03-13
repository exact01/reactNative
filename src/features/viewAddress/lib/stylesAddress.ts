import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, FONTS, RADIUS } from '@shared/lib/constants'

export const stylesAddress = StyleSheet.create({
    content: {
        padding: 20,
        borderRadius: RADIUS.r16,
    },
    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.f16,
        fontFamily: FONTS.soraSemiBold,
        textAlign: 'center',
    },
})
