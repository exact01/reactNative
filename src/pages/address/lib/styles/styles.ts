import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, FONTS } from '@shared/lib/constants'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        flex: 1,
    },
    content: {
        alignItems: 'center',
        margin: 0,
        padding: 0,
        flex: 1,
    },
    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.f18,
        fontFamily: FONTS.soraExtraBold,
    },
})
