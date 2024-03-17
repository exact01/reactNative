import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, FONTS, RADIUS } from '@shared/lib/constants'

export const styles = StyleSheet.create({
    content: {
        padding: 10,
        borderRadius: RADIUS.r16,
        width: '100%',
    },
    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.f16,
        fontFamily: FONTS.soraSemiBold,
        textAlign: 'center',
        margin: 0,
        padding: 0,
    },
})
