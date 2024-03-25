import { StyleSheet } from 'react-native'
import {
    COLORS,
    FONT_LETTER_SPACING,
    FONT_LINE_HEIGHT,
    FONT_OPACITY,
    FONT_SIZE,
    FONTS,
} from '@shared/lib/constants'

export const stylesAddress = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        height: 38,
        justifyContent: 'space-between',
    },
    wrapperAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 19,
    },
    icon: {
        marginLeft: 4,
    },
    label: {
        color: COLORS.white,
        lineHeight: FONT_LINE_HEIGHT.f15,
        fontSize: FONT_SIZE.f12,
        fontFamily: FONTS.soraRegular,
        opacity: FONT_OPACITY.op7,
    },
    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.f14,
        fontFamily: FONTS.soraMedium,
        lineHeight: FONT_LINE_HEIGHT.f18,
        letterSpacing: FONT_LETTER_SPACING.f1,
    },
})
