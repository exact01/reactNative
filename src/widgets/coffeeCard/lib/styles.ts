import { StyleSheet } from 'react-native'
import {
    COLORS,
    FONT_LETTER_SPACING,
    FONT_LINE_HEIGHT,
    FONT_OPACITY,
    FONT_SIZE,
    FONTS,
    RADIUS,
} from '@shared/lib/constants'

export const styles = StyleSheet.create({
    content: {
        width: 149,
        backgroundColor: COLORS.white,
        color: COLORS.black,
        borderRadius: RADIUS.r16,
    },
    wrapperRating: {},
    rootRating: {
        position: 'absolute',
        top: 4,
        left: 4,
        overflow: 'hidden',
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    rating: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 3,
        width: 51,
        height: 25,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8,
        borderRadius: 20,
    },
    textRating: {
        color: COLORS.white,
        fontSize: FONT_SIZE.f10,
        lineHeight: FONT_LINE_HEIGHT.f13,
        fontFamily: FONTS.soraSemiBold,
    },
    imageRating: {
        width: 12,
        height: 12,
        marginRight: 3,
        bottom: 1,
    },
    image: {
        width: 141,
        height: 132,
        margin: 4,
    },
    textContainer: {
        flexDirection: 'column',
        marginTop: 12,
        marginLeft: 12,
    },
    title: {
        fontSize: FONT_SIZE.f16,
        fontFamily: FONTS.soraSemiBold,
        lineHeight: FONT_LINE_HEIGHT.f20,
    },
    subTitle: {
        fontSize: FONT_SIZE.f12,
        fontFamily: FONTS.soraRegular,
        lineHeight: FONT_LINE_HEIGHT.f15,
        opacity: FONT_OPACITY.op7,
    },
    infoContainer: {
        flexDirection: 'row',
        marginLeft: 12,
        marginRight: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 12,
    },
    priceText: {
        fontSize: FONT_SIZE.f18,
        fontFamily: FONTS.soraSemiBold,
        lineHeight: FONT_LINE_HEIGHT.f23,
    },
})
