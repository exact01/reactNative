import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@shared/lib/constants'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        flex: 1,
    },
    content: {
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        flex: 1,
        rowGap: 50,
    },
    image: {
        objectFit: 'contain',
        width: 450,
        height: 450,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: FONTS.soraBold,
        color: COLORS.white,
        margin: 0,
        paddingTop: 0,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 16,
        fontFamily: FONTS.soraExtraLight,
        color: COLORS.white,
        margin: 0,
        paddingTop: 0,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: 'center',
    },
    link: { marginLeft: 30, marginRight: 30 },
})
