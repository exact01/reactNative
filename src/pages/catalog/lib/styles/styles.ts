import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, FONTS } from '@shared/lib/constants'

export const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    container: {
        backgroundColor: COLORS.grayUltraLight,
    },
    contentLocationSearchBar: {
        margin: 0,
        padding: 0,
        backgroundColor: COLORS.black,
    },
    mainContent: {
        flex: 1,
        backgroundColor: COLORS.grayUltraLight,
    },
    contentCoffee: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.f18,
        fontFamily: FONTS.soraExtraBold,
    },
    contentCards: {},
    contentCardsCoffee: {
        padding: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap',
        backgroundColor: COLORS.grayUltraLight,
    },
})
